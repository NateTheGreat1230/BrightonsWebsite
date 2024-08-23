<script lang="ts" setup>
import { ref } from 'vue';

const isInnerDropdownOpen = ref(false);

const toggleInnerDropdown = () => {
  isInnerDropdownOpen.value = !isInnerDropdownOpen.value;
};

const route = useRoute();
function toggleDarkMode(): void {
  const isDark: boolean = document.documentElement.classList.toggle('dark');
  localStorage.setItem('dark-mode', isDark.toString());
  if (isDark) {
    console.log("DARK");
  }
}
</script>

<template>
  <div class="bg-secondary p-4 h-16 text-text font-heading flex flex-row justify-between items-center">
    <div class="flex flex-row">
      <NuxtLink to="/" class="text-2xl sm:text-4xl text-primary font-bold hover:underline">TheCalculatorGuy</NuxtLink>
      <div class="hidden md:flex flex-row justify-right items-center pl-10 gap-4">
        <NuxtLink href="/">
          <button class="text-lg p-2 text-text hover:underline font-semibold">Home</button>
        </NuxtLink>
        <NuxtLink href="/calculator">
          <button class="text-lg p-2 text-text hover:underline font-semibold">Calculator</button>
        </NuxtLink>
        <NuxtLink href="/contact">
          <button class="text-lg p-2 text-text hover:underline font-semibold">Contact</button>
        </NuxtLink>
        <div class="relative group">
          <button class="text-lg px-2 text-text hover:underline font-semibold">My Sites⌄</button>
          <div class="absolute hidden group-hover:block w-48 rounded-lg shadow-lg border-4 border-gray-700 bg-secondary text-text">
            <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <NuxtLink href="http://thecalculatorguy.dev/">
                <button class="w-full text-left px-4 py-2 text-sm hover:underline">thecalculatorguy.dev</button>
              </NuxtLink>
              <NuxtLink href="http://thecalculatorguy.com/">
                <button class="w-full text-left px-4 py-2 text-sm hover:underline">thecalculatorguy.com</button>
              </NuxtLink>
              <NuxtLink href="http://thecalculatorguy.org/">
                <button class="w-full text-left px-4 py-2 text-sm hover:underline">thecalculatorguy.org</button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="relative group">
      <div class="flex md:hidden">
        <button class="text-2xl w-14 p-2 border-2 border-gray-700 hover:border-gray-500 rounded-lg">
          <font-awesome-icon :icon="['fas', 'bars']" />
        </button>
      </div>
      <div class="absolute right-0 hidden group-hover:block w-28 rounded-lg shadow-lg border-4 border-gray-700 bg-secondary text-text md:hidden">
        <NuxtLink href="/">
          <button class="w-full text-left px-4 py-2 text-sm hover:underline">Home</button>
        </NuxtLink>
        <NuxtLink href="/calculator">
          <button class="w-full text-left px-4 py-2 text-sm hover:underline">Calculator</button>
        </NuxtLink>
        <NuxtLink href="/contact">
          <button class="w-full text-left px-4 py-2 text-sm hover:underline">Contact</button>
        </NuxtLink>
        <div class="relative">
          <button @click="toggleInnerDropdown" class="w-full text-left px-4 py-2 text-sm hover:underline">My Sites⌄</button>
          <div v-if="isInnerDropdownOpen" class="absolute left-[-10rem] top-0 w-40 rounded-lg shadow-lg border-4 border-gray-700 bg-secondary text-text md:hidden">
            <NuxtLink href="http://thecalculatorguy.dev/">
              <button class="w-full text-left px-4 py-2 text-sm hover:underline">thecalculatorguy.dev</button>
            </NuxtLink>
            <NuxtLink href="http://thecalculatorguy.com/">
              <button class="w-full text-left px-4 py-2 text-sm hover:underline">thecalculatorguy.com</button>
            </NuxtLink>
            <NuxtLink href="http://thecalculatorguy.org/">
              <button class="w-full text-left px-4 py-2 text-sm hover:underline">thecalculatorguy.org</button>
            </NuxtLink>
          </div>
        </div>
      </div>
    <!-- <button @click="toggleDarkMode" class="text-lg p-2 w-14 border-2 border-gray-700 hover:border-gray-500 rounded-lg font-semibold font-body">☀☽</button> -->
    </div>
  </div>
  <div class="w-full flex justify-center">
    <div class="w-full border-t-4 border-gray-700"></div>
  </div>
</template>