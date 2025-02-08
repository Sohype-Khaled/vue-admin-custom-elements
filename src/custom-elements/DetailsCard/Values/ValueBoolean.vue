<script setup lang="ts">
defineProps({
  value: {type: Boolean, required: true},
  trueText: {type: String, default: "Yes"},
  falseText: {type: String, default: "No"}
});
</script>

<template>
  <span class="text-gray-600">
    <span v-if="value"
          class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300">{{ trueText }}</span>
    <span v-else
          class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300">{{
        falseText
      }}</span>
  </span>
</template>