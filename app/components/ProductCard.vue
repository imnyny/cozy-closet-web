<template>
  <div class="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col">
    
    <!-- Image & Badge & Wishlist Button -->
    <!-- Full cover image display -->
<div class="relative bg-slate-100 h-56 sm:h-64 w-full group overflow-hidden">
  <img 
    v-if="product.image" 
    :src="product.image" 
    :alt="product.name" 
    @error="hasImageError = true"
    v-show="!hasImageError"
    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
  >
  
  <div 
    v-if="!product.image || hasImageError" 
    class="w-full h-full flex flex-col items-center justify-center bg-slate-100 text-slate-400"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 stroke-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
    <span class="text-xs text-slate-400 mt-1 font-medium">No image provided</span>
  </div>

  <span class="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-700 border border-slate-200/80 shadow-sm">
    {{ product.category }}
  </span>
</div>

    <!-- Product Details -->
    <div class="p-4 flex-1 flex flex-col justify-between space-y-3">
      <div>
        <div class="flex justify-between items-start mb-1 gap-2">
          <h3 class="font-bold text-slate-900 text-base leading-tight">{{ product.name }}</h3>
          <span class="text-base font-black text-indigo-600">${{ product.price.toFixed(2) }}</span>
        </div>
        <p class="text-xs text-slate-500">Premium Cotton Blend</p>
      </div>

      <!-- Size Selection -->
      <div v-if="product.sizes">
        <span class="text-[11px] font-semibold text-slate-500 block mb-1 uppercase tracking-wide">Select Size</span>
        <div class="flex flex-wrap gap-1.5">
          <button 
            v-for="size in product.sizes" 
            :key="size" 
            @click="selectedSize = size"
            :class="[
              'px-2 py-0.5 text-xs font-bold rounded-md border uppercase transition',
              selectedSize === size ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
            ]">
            {{ size }}
          </button>
        </div>
      </div>

      <!-- Color Selection -->
      <div v-if="product.colors">
        <span class="text-[11px] font-semibold text-slate-500 block mb-1 uppercase tracking-wide">Select Color</span>
        <div class="flex gap-2 items-center">
          <button 
            v-for="color in product.colors" 
            :key="color.name" 
            @click="selectedColor = color"
            :class="[
              'w-5 h-5 rounded-full border-2 transition-all',
              selectedColor?.name === color.name ? 'scale-125 border-indigo-600 shadow-sm' : 'border-slate-200'
            ]"
            :style="{ backgroundColor: color.hex }"
            :title="color.name">
          </button>
        </div>
      </div>

      <!-- Actions (Add to Cart / Buy Now Buttons) -->
      <div class="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
        <button 
          @click="$emit('add-to-cart', { ...product, selectedSize, selectedColor })" 
          class="w-full bg-indigo-50 hover:bg-indigo-100 text-indigo-600 py-2 rounded-xl font-bold text-xs transition active:scale-95">
          Add to Cart
        </button>
        <button 
          @click="$emit('buy-now', { ...product, selectedSize, selectedColor })" 
          class="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl font-bold text-xs shadow-sm transition active:scale-95">
          Buy Now
        </button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Heart } from 'lucide-vue-next'

const props = defineProps({
  product: Object
})

defineEmits(['add-to-cart', 'buy-now'])

const selectedSize = ref(props.product.sizes ? props.product.sizes[0] : 'M')
const selectedColor = ref(props.product.colors ? props.product.colors[0] : { name: 'Standard', hex: '#000' })
</script>