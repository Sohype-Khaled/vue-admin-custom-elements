<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
}>();
</script>

<template>
  <div class="w-full mx-auto bg-white shadow-md rounded-lg p-6">
    <h2 class="text-xl font-semibold text-gray-800" v-text="title"/>
    <p class="text-gray-600 text-base" v-html="description"/>

    <div class="mt-4">
      <slot/>
    </div>
  </div>
</template>

<style>
@import url("@/style.css");
</style>
