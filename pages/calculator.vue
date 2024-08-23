<template>
    <div class="flex items-center justify-center h-full p-10">
      <div class="flex flex-col justify-center items-center gap-4 w-80 min-h-96 p-6 bg-black bg-opacity-80 border-4 border-gray-700 rounded-lg shadow-lg">
        <!-- Display area -->
        <div class="w-full h-20 rounded-md bg-gray-900 text-right text-white flex items-start justify-end p-4 mb-4 border-2 border-gray-600 overflow-hidden">
          <h1 class="text-xl font-mono leading-snug break-all">{{ fullDisplay }}</h1>
        </div>
        <!-- Buttons area -->
        <div class="grid grid-cols-4 gap-2 w-full">
          <!-- Row 1 -->
          <button @click="clear" class="bg-gray-500 text-lg font-mono p-3 rounded hover:bg-gray-400 border border-gray-600">AC</button>
          <button @click="toggleSign" class="bg-gray-500 text-lg font-mono p-3 rounded hover:bg-gray-400 border border-gray-600">+/-</button>
          <button @click="percent" class="bg-gray-500 text-lg font-mono p-3 rounded hover:bg-gray-400 border border-gray-600">%</button>
          <button @click="setOperator('÷')" class="bg-green-500 text-white text-lg font-mono p-3 rounded hover:bg-green-400 border border-gray-600">÷</button>
          <!-- Row 2 -->
          <button @click="appendNumber('7')" class="bg-gray-400 text-lg font-mono p-3 rounded hover:bg-gray-300 border border-gray-500">7</button>
          <button @click="appendNumber('8')" class="bg-gray-400 text-lg font-mono p-3 rounded hover:bg-gray-300 border border-gray-500">8</button>
          <button @click="appendNumber('9')" class="bg-gray-400 text-lg font-mono p-3 rounded hover:bg-gray-300 border border-gray-500">9</button>
          <button @click="setOperator('×')" class="bg-green-500 text-white text-lg font-mono p-3 rounded hover:bg-green-400 border border-gray-600">×</button>
          <!-- Row 3 -->
          <button @click="appendNumber('4')" class="bg-gray-400 text-lg font-mono p-3 rounded hover:bg-gray-300 border border-gray-500">4</button>
          <button @click="appendNumber('5')" class="bg-gray-400 text-lg font-mono p-3 rounded hover:bg-gray-300 border border-gray-500">5</button>
          <button @click="appendNumber('6')" class="bg-gray-400 text-lg font-mono p-3 rounded hover:bg-gray-300 border border-gray-500">6</button>
          <button @click="setOperator('−')" class="bg-green-500 text-white text-lg font-mono p-3 rounded hover:bg-green-400 border border-gray-600">−</button>
          <!-- Row 4 -->
          <button @click="appendNumber('1')" class="bg-gray-400 text-lg font-mono p-3 rounded hover:bg-gray-300 border border-gray-500">1</button>
          <button @click="appendNumber('2')" class="bg-gray-400 text-lg font-mono p-3 rounded hover:bg-gray-300 border border-gray-500">2</button>
          <button @click="appendNumber('3')" class="bg-gray-400 text-lg font-mono p-3 rounded hover:bg-gray-300 border border-gray-500">3</button>
          <button @click="setOperator('+')" class="bg-green-500 text-white text-lg font-mono p-3 rounded hover:bg-green-400 border border-gray-600">+</button>
          <!-- Row 5 -->
          <button @click="appendNumber('0')" class="col-span-2 bg-gray-400 text-lg font-mono p-3 rounded hover:bg-gray-300 border border-gray-500">0</button>
          <button @click="appendDot" class="bg-gray-400 text-lg font-mono p-3 rounded hover:bg-gray-300 border border-gray-500">.</button>
          <button @click="calculate" class="bg-green-500 text-white text-lg font-mono p-3 rounded hover:bg-green-400 border border-gray-600">=</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  
  useHead({
    title: 'Calculator',
  });

  const currentNumber = ref('');
  const previousNumber = ref('');
  const operator = ref('');
  
  const fullDisplay = computed(() => {
    if (operator.value) {
      return `${previousNumber.value} ${operator.value} ${currentNumber.value}`;
    }
    return currentNumber.value || '0';
  });
  
  function appendNumber(number: string): void {
    if (currentNumber.value.length < 10) {
      currentNumber.value += number;
    }
  }
  
  function clear(): void {
    currentNumber.value = '';
    previousNumber.value = '';
    operator.value = '';
  }
  
  function toggleSign(): void {
    currentNumber.value = (parseFloat(currentNumber.value) * -1).toString();
  }
  
  function percent(): void {
    currentNumber.value = (parseFloat(currentNumber.value) / 100).toString();
  }
  
  function setOperator(op: string): void {
    if (currentNumber.value === '') return;
    if (previousNumber.value !== '') calculate();
    operator.value = op;
    previousNumber.value = currentNumber.value;
    currentNumber.value = '';
  }
  
  function appendDot(): void {
    if (!currentNumber.value.includes('.')) {
      currentNumber.value += '.';
    }
  }
  
  function calculate(): void {
    let result;
    const prev = parseFloat(previousNumber.value);
    const current = parseFloat(currentNumber.value);
    
    if (isNaN(prev) || isNaN(current)) return;
  
    switch (operator.value) {
      case '+':
        result = prev + current;
        break;
      case '−':
        result = prev - current;
        break;
      case '×':
        result = prev * current;
        break;
      case '÷':
        result = prev / current;
        break;
      default:
        return;
    }
  
    currentNumber.value = result.toString();
    previousNumber.value = '';
    operator.value = '';
  }
  </script>
  