<script setup lang="ts">
import {computed, useAttrs} from "vue";
import SVGIcon from "@/components/SVGIcon/SVGIcon.vue";

// Define props
const props = defineProps({
  as: {type: String, default: "button", validator: (value: string) => ["button", "a"].includes(value)},
  label: {type: String, default: ""},
  href: {type: String, default: ""},
  icon: {type: String, default: ""},
  text: {type: Boolean, default: false},
  outlined: {type: Boolean, default: false},
  rounded: {type: Boolean, default: false},
  disabled: {type: Boolean, default: false},
  iconPosition: {type: String, default: "left", validator: (value: string) => ["left", "right"].includes(value)},
  severity: {
    type: String,
    default: "primary",
    validator: (value: string) => ["primary", "secondary", "warning", "danger", "info", "success", "white"].includes(value),
  },
  size: {
    type: String,
    default: "base",
    validator: (value: string) => ["xs", "sm", "base", "lg", "xl"].includes(value),
  },
});

// Get additional attributes
const attrs = useAttrs();

// ✅ Compute button classes
const buttonClasses = computed(() => [
  "btn",
  "cursor-pointer",
  `btn-${props.severity}`,
  `btn-${props.size}`,
  props.icon ? "btn-icon" : "",
  props.text ? "btn-text" : "",
  props.outlined ? "btn-outlined" : "",
  props.rounded ? "btn-rounded" : "",
  props.disabled ? "btn-disabled" : "",
]);
</script>

<template>
  <component
      :is="as"
      v-bind="attrs"
      :href="as === 'a' && !disabled ? href : undefined"
      :disabled="disabled"
      :class="buttonClasses"
  >
    <!-- Left Icon -->
    <SVGIcon v-if="icon && iconPosition === 'left'" :icon="icon" class="icon"/>

    <!-- Button Label -->
    <span v-if="label" v-text="label"/>

    <!-- Right Icon -->
    <SVGIcon v-if="icon && iconPosition === 'right'" :icon="icon" class="icon"/>
  </component>
</template>
