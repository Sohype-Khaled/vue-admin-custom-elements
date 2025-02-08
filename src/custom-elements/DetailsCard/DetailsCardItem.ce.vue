<script setup lang="ts">
import {computed, defineAsyncComponent, useAttrs} from "vue";

// Define props with TypeScript
const props = defineProps({
  label: {type: String, required: true},
  value: {type: [String, Boolean], required: true},
  type: {type: String, default: "text"}, // Supports text, boolean, and more in the future
});

// Dynamic component loading based on the `type` prop
const componentMap: Record<string, any> = {
  text: defineAsyncComponent(() => import("./Values/ValueText.vue")),
  boolean: defineAsyncComponent(() => import("./Values/ValueBoolean.vue")),
  // Add more types dynamically
};

const selectedComponent = computed(() => componentMap[props.type] || componentMap.text);
const attrs = useAttrs();

</script>

<template>
  <div class="flex justify-between py-2 border-b last:border-b-0">
    <span class="font-medium text-gray-700">{{ label }}</span>
    <component :is="selectedComponent" v-bind="attrs" :value="value" />
  </div>
</template>


<style>
@import url("@/style.css");
</style>