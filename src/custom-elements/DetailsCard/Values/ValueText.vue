<script setup lang="ts">
defineProps({ value: String })
</script>

<template>
  <span class="text-gray-600">{{ value }}</span>
</template>