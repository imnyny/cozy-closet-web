<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 overflow-hidden">
    <!-- Backdrop Overlay -->
    <div @click="$emit('close')" class="absolute inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"></div>

    <div class="fixed inset-y-0 right-0 max-w-full flex pl-10">
      <div class="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
        
        <!-- Header -->
        <div class="p-6 border-b border-slate-100 flex items-center justify-between">
          <h2 class="text-lg font-bold text-slate-900">Your Cart ({{ totalCount }})</h2>
          <button @click="$emit('close')" class="text-slate-400 hover:text-slate-600">✕</button>
        </div>

        <!-- Items List -->
        <div class="p-6 flex-1 overflow-y-auto divide-y divide-slate-100">
          <div v-for="(item, index) in cart" :key="index" class="py-4 flex items-center justify-between gap-4">
            <img :src="item.image" class="w-16 h-16 rounded-xl object-contain bg-slate-100 p-2">
            <div class="flex-1">
              <h4 class="font-bold text-sm text-slate-900">{{ item.name }}</h4>
              <p class="text-xs text-slate-400">
                Size: <span class="uppercase font-semibold text-slate-700">{{ item.selectedSize }}</span> | 
                Color: <span class="font-semibold text-slate-700">{{ item.selectedColor?.name }}</span>
              </p>
              <div class="mt-2 flex items-center space-x-2">
                <button @click="$emit('update-qty', { item, amount: -1 })" class="w-6 h-6 rounded bg-slate-100 font-bold text-xs">-</button>
                <span class="text-xs font-bold text-slate-800">{{ item.quantity }}</span>
                <button @click="$emit('update-qty', { item, amount: 1 })" class="w-6 h-6 rounded bg-slate-100 font-bold text-xs">+</button>
              </div>
            </div>
            <div class="text-right">
              <span class="font-bold text-sm text-slate-900 block">${{ (item.price * item.quantity).toFixed(2) }}</span>
              <button @click="$emit('remove-item', index)" class="text-red-500 hover:text-red-700 text-xs mt-1">Remove</button>
            </div>
          </div>

          <div v-if="cart.length === 0" class="text-center py-12 text-slate-400">
            Your cart is empty.
          </div>
        </div>

        <!-- Footer / Checkout -->
        <div class="p-6 border-t border-slate-100 bg-slate-50 space-y-4">
          <div class="flex justify-between text-slate-600 text-sm">
            <span>Subtotal</span>
            <span class="font-bold text-slate-900">${{ subtotal.toFixed(2) }}</span>
          </div>
          <div class="flex justify-between text-slate-600 text-sm">
            <span>Tax (5%)</span>
            <span class="font-bold text-slate-900">${{ (subtotal * 0.05).toFixed(2) }}</span>
          </div>
          <div class="flex justify-between text-slate-900 text-base font-black border-t border-slate-200 pt-3">
            <span>Total Amount</span>
            <span class="text-indigo-600">${{ (subtotal * 1.05).toFixed(2) }}</span>
          </div>

          <button 
            @click="$emit('checkout')" 
            :disabled="cart.length === 0"
            class="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white py-3.5 rounded-xl font-bold transition shadow-md">
            Complete Order
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isOpen: Boolean,
  cart: Array,
  totalCount: Number,
  subtotal: Number
})

defineEmits(['close', 'update-qty', 'remove-item', 'checkout'])
</script>