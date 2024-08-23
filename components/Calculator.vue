<script lang="ts" setup>
    const props = defineProps({
        title: String,
        titleStyle: String,
        text: String,
        textStyle: String,
    });
</script>

<template>
    <div class="flex flex-col justify-center items-center gap-4 w-80 min-h-96 p-6 bg-black bg-opacity-80 border-4 border-gray-700 rounded-lg shadow-lg">
      <!-- Display area -->
      <div class="w-full h-84 rounded-md bg-gray-900 flex flex-col items-start justify-end p-4 mb-4 border-2 border-gray-600 overflow-hidden">
        <h1 :class="titleStyle">{{ title }}</h1>
        <h1 :class="textStyle">{{ text }}</h1>
      </div>
      <!-- Buttons area -->
      <div class="grid grid-cols-4 gap-2 w-full">
        <!-- Row 1 -->
        <button class="bg-gray-500 text-lg font-mono rounded hover:bg-gray-400 border border-gray-600">AC</button>
        <button class="bg-gray-500 text-lg font-mono rounded hover:bg-gray-400 border border-gray-600">+/-</button>
        <button class="bg-gray-500 text-lg font-mono rounded hover:bg-gray-400 border border-gray-600">%</button>
        <button class="bg-green-500 text-white text-lg font-mono rounded hover:bg-green-400 border border-gray-600">÷</button>
        <!-- Row 2 -->
        <button class="bg-gray-400 text-lg font-mono rounded hover:bg-gray-300 border border-gray-500">7</button>
        <button class="bg-gray-400 text-lg font-mono rounded hover:bg-gray-300 border border-gray-500">8</button>
        <button class="bg-gray-400 text-lg font-mono rounded hover:bg-gray-300 border border-gray-500">9</button>
        <button class="bg-green-500 text-white text-lg font-mono rounded hover:bg-green-400 border border-gray-600">×</button>
        <!-- Row 3 -->
        <button class="bg-gray-400 text-lg font-mono rounded hover:bg-gray-300 border border-gray-500">4</button>
        <button class="bg-gray-400 text-lg font-mono rounded hover:bg-gray-300 border border-gray-500">5</button>
        <button class="bg-gray-400 text-lg font-mono rounded hover:bg-gray-300 border border-gray-500">6</button>
        <button class="bg-green-500 text-white text-lg font-mono rounded hover:bg-green-400 border border-gray-600">−</button>
        <!-- Row 4 -->
        <button class="bg-gray-400 text-lg font-mono rounded hover:bg-gray-300 border border-gray-500">1</button>
        <button class="bg-gray-400 text-lg font-mono rounded hover:bg-gray-300 border border-gray-500">2</button>
        <button class="bg-gray-400 text-lg font-mono rounded hover:bg-gray-300 border border-gray-500">3</button>
        <button class="bg-green-500 text-white text-lg font-mono rounded hover:bg-green-400 border border-gray-600">+</button>
        <!-- Row 5 -->
        <button class="col-span-2 bg-gray-400 text-lg font-mono rounded hover:bg-gray-300 border border-gray-500">0</button>
        <button class="bg-gray-400 text-lg font-mono rounded hover:bg-gray-300 border border-gray-500">.</button>
        <button class="bg-green-500 text-white text-lg font-mono rounded hover:bg-green-400 border border-gray-600">=</button>
      </div>
    </div>
  </template>
  