<script setup lang="ts">
const props = defineProps({
  label: {type: String, required: true},
})
</script>

<template>
  <div class="relative flex justify-between items-center w-full">

    <div class="absolute inset-x-0 top-1/2 transform -translate-y-1/2 border-t border-gray-300"></div>

    <span class="bg-white px-2 text-lg font-semibold text-gray-900 z-10">{{ label }}</span>


<!--    <div class="flex items-center gap-2 bg-white px-2 z-10">-->
<!--      <div class="inline-flex rounded-lg shadow-sm border border-gray-300">-->
<!--        <button class="px-3 py-2 text-gray-600 hover:bg-gray-200 focus:ring-2 focus:ring-gray-300 rounded-l-lg">-->
<!--          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">-->
<!--            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>-->
<!--          </svg>-->
<!--        </button>-->
<!--        <button class="px-3 py-2 text-gray-600 hover:bg-gray-200 focus:ring-2 focus:ring-gray-300">-->
<!--          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">-->
<!--            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m3 3V9m8 3H4"></path>-->
<!--          </svg>-->
<!--        </button>-->
<!--        <button class="px-3 py-2 text-gray-600 hover:bg-gray-200 focus:ring-2 focus:ring-gray-300 rounded-r-lg">-->
<!--          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">-->
<!--            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>-->
<!--          </svg>-->
<!--        </button>-->
<!--      </div>-->
<!--    </div>-->

<!--    <div class="flex items-center gap-2 bg-white px-2 z-10">-->
<!--      <div class="relative">-->
<!--        <input type="text" placeholder="Search..."-->
<!--               class="pl-10 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500">-->
<!--        <svg class="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"-->
<!--             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"-->
<!--                d="M21 21l-4.35-4.35M15 10a5 5 0 11-10 0 5 5 0 0110 0z"/>-->
<!--        </svg>-->
<!--      </div>-->
<!--    </div>-->

  </div>
</template>

