<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
}>();
</script>

<template>
  <div class="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
    <h2 class="text-xl font-semibold text-gray-800">{{ title }}</h2>
    <p class="text-gray-600 text-base">{{ description }}</p>

    <div class="mt-4">
      <slot/>
    </div>
  </div>
</template>

<style>
@import url("@/style.css");
</style>
