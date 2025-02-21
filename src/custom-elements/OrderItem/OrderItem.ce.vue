<script setup lang="ts">
import {computed, ref} from "vue";

// Define the type for order details
interface Order {
  productName: string;
  category: string;
  accountManager: string;
  dueDate: string;
  quantity: number;
  price: number;
  totalPrice: number;
  status: string;
}

// Define the type for each step in the stepper
interface Step {
  id: number;
  label: string;
  completed: boolean;
}

// Reactive order state
const order = ref<Order>({
  productName: "Wireless Headphones",
  category: "Electronics",
  accountManager: "John Doe",
  dueDate: "2025-02-15",
  quantity: 2,
  price: 150,
  totalPrice: 300,
  status: "Shipped",
});

// Define order tracking steps
const steps = ref<Step[]>([
  {id: 1, label: "Order Placed", completed: true},
  {id: 2, label: "Processing", completed: true},
  {id: 3, label: "Shipped", completed: true},
  {id: 4, label: "Out for Delivery", completed: false},
  {id: 5, label: "Delivered", completed: false},
]);

// Status options for dropdown
const statusOptions: string[] = ["Processing", "Shipped", "Out for Delivery", "Delivered"];

// Compute the current step index dynamically
const currentStep = computed(() => {
  return statusOptions.indexOf(order.value.status) + 2;
});

// Function to change status and update step progress
const changeStatus = (newStatus: string) => {
  order.value.status = newStatus;
  steps.value.forEach((step, index) => {
    step.completed = index < currentStep.value - 1;
  });
};
</script>

<template>
  <div class="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
    <!-- Header -->
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-lg font-semibold text-gray-900">Order Tracking</h2>
      <span class="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded">
        {{ order.status }}
      </span>
    </div>

    <!-- Order Details -->
    <div class="grid grid-cols-2 gap-4 text-sm text-gray-700">
      <div><strong>Product:</strong> {{ order.productName }}</div>
      <div><strong>Category:</strong> {{ order.category }}</div>
      <div><strong>Account Manager:</strong> {{ order.accountManager }}</div>
      <div><strong>Due Date:</strong> {{ order.dueDate }}</div>
      <div><strong>Quantity:</strong> {{ order.quantity }}</div>
      <div><strong>Price:</strong> ${{ order.price }}</div>
      <div><strong>Total Price:</strong> ${{ order.totalPrice }}</div>
    </div>

    <!-- Stepper -->
    <div class="mt-6">
      <ol class="flex items-center w-full space-x-4">
        <li
            v-for="(step, index) in steps"
            :key="step.id"
            class="flex-1 flex items-center"
        >
          <div
              class="flex items-center justify-center w-10 h-10 border-2 rounded-full"
              :class="{
              'bg-blue-600 border-blue-600 text-white': step.completed || index < currentStep,
              'border-gray-300 text-gray-500': !step.completed && index >= currentStep,
            }"
          >
            <span v-if="step.completed || index < currentStep">✔</span>
            <span v-else>{{ index + 1 }}</span>
          </div>
          <div
              v-if="index < steps.length - 1"
              class="w-full h-1"
              :class="{
              'bg-blue-600': index < currentStep - 1,
              'bg-gray-300': index >= currentStep - 1,
            }"
          ></div>
        </li>
      </ol>
    </div>

    <!-- Actions -->
    <div class="mt-6 flex justify-between items-center">
      <div class="flex space-x-3">
        <a href="#" class="text-blue-600 hover:underline">View Form</a>
        <a href="#" class="text-blue-600 hover:underline">Open Chat</a>
        <a href="#" class="text-blue-600 hover:underline">Preview Attachments</a>
      </div>
      <div>
        <select
            class="px-3 py-2 border rounded text-gray-700"
            v-model="order.status"
            @change="changeStatus(order.status)"
        >
          <option v-for="status in statusOptions" :key="status" :value="status">
            {{ status }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<style>
@import url("@/style.css");
</style>