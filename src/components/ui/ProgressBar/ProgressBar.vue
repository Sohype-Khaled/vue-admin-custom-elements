<script setup lang="ts">
defineProps({
  progress: {type: Number, required: true}, // Progress percentage
});
</script>

<template>
  <div class="relative w-full h-1 bg-gray-300 rounded-full overflow-hidden">
    <div
        class="absolute h-full bg-orange-500 transition-all duration-300 ease-in-out"
        :style="{ width: `${progress}%` }"
    ></div>
  </div>
</template>
