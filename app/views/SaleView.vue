<template>
  <div class="space-y-8 max-w-7xl mx-auto px-4 py-6">
    <!-- Premium Pink Flash Sale Banner -->
    <div class="relative overflow-hidden bg-linear-to-r from-pink-600 via-rose-500 to-pink-500 text-white p-8 md:p-10 rounded-3xl shadow-xl shadow-pink-500/15">
      <!-- Decorative background blur circle -->
      <div class="absolute -right-10 -top-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
      
      <div class="relative z-10 max-w-xl">
        <div class="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md text-white text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
          <span class="w-2 h-2 rounded-full bg-white animate-pulse"></span>
          Limited Time Hot Deals
        </div>
        <h2 class="text-3xl md:text-4xl font-black tracking-tight drop-shadow-xs">Exclusive Flash Sales</h2>
        <p class="text-pink-100 text-sm md:text-base mt-2 font-medium">Get up to 30% off select apparel items with premium quality.</p>
      </div>
    </div>

    <!-- Product Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="item in saleItems" 
        :key="item.id" 
        class="group bg-white p-5 rounded-3xl border border-pink-100 shadow-sm hover:shadow-xl hover:shadow-pink-500/10 hover:border-pink-300 transition-all duration-300 flex flex-col justify-between"
      >
        <div>
          <!-- Full-Width Image Container with Category Badge & Discount -->
          <div class="relative bg-slate-50 rounded-2xl h-64 w-full flex items-center justify-center mb-4 overflow-hidden group-hover:bg-pink-50/40 transition-colors">
            <!-- Category Tag -->
            <span v-if="item.category" class="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-slate-700 text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-xs z-10">
              {{ item.category }}
            </span>

            <!-- Dynamic Discount Badge -->
            <span 
              v-if="calculateDiscount(item)" 
              class="absolute top-3 right-3 bg-linear-to-r from-pink-600 to-rose-500 text-white font-black text-xs px-2.5 py-1 rounded-lg shadow-md shadow-pink-500/20 z-10"
            >
              -{{ calculateDiscount(item) }}% OFF
            </span>

            <!-- Full-Bleed Image -->
            <img 
              v-if="item.image"
              :src="item.image" 
              :alt="item.name" 
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            >
            
            <!-- Fallback for null image -->
            <div v-else class="flex flex-col items-center justify-center text-slate-300 gap-1 p-6">
              <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span class="text-xs font-semibold text-slate-400">No Image Available</span>
            </div>
          </div>

          <!-- Product Details & Pricing -->
          <div class="flex justify-between items-start gap-2">
            <div>
              <h3 class="font-extrabold text-slate-900 text-base leading-snug group-hover:text-pink-600 transition-colors">
                {{ item.name }}
              </h3>
              <p class="text-xs text-slate-400 mt-0.5">{{ item.description || 'Premium Apparel' }}</p>
            </div>
            
            <div class="text-right shrink-0">
              <span class="text-xl font-black text-pink-600 block leading-tight">
                ${{ item.salePrice ? item.salePrice.toFixed(2) : (item.price ? item.price.toFixed(2) : '0.00') }}
              </span>
              <span v-if="item.originalPrice" class="text-xs text-slate-400 line-through block font-medium">
                ${{ item.originalPrice.toFixed(2) }}
              </span>
            </div>
          </div>

          <!-- Select Size -->
          <div class="mt-4" v-if="item.sizes && item.sizes.length">
            <span class="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-2">Select Size</span>
            <div class="flex flex-wrap gap-1.5">
              <button 
                v-for="size in item.sizes" 
                :key="size"
                @click="selectedSizes[item.id] = size"
                :class="[
                  'px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer',
                  (selectedSizes[item.id] || item.sizes[0]) === size 
                    ? 'bg-pink-600 text-white shadow-md shadow-pink-600/30' 
                    : 'bg-slate-100 text-slate-600 hover:bg-pink-50 hover:text-pink-600'
                ]"
              >
                {{ size }}
              </button>
            </div>
          </div>

          <!-- Select Color -->
          <div class="mt-3" v-if="item.colors && item.colors.length">
            <span class="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-2">Select Color</span>
            <div class="flex gap-2">
              <button 
                v-for="color in item.colors" 
                :key="color.name"
                @click="selectedColors[item.id] = color"
                :style="{ backgroundColor: color.hex }"
                :title="color.name"
                :class="[
                  'w-5 h-5 rounded-full transition-all cursor-pointer ring-2',
                  (selectedColors[item.id]?.name || item.colors[0]?.name) === color.name 
                    ? 'ring-pink-500 scale-110 shadow-sm' 
                    : 'ring-transparent hover:scale-105'
                ]"
              />
            </div>
          </div>
        </div>

        <!-- Single Buy Now Action Button -->
        <div class="mt-6">
          <button 
            @click="handleBuyNow(item)" 
            class="w-full bg-linear-to-r from-pink-600 to-rose-500 hover:from-pink-700 hover:to-rose-600 text-white py-3 rounded-xl font-bold text-xs shadow-md shadow-pink-500/25 transition-all cursor-pointer"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const props = defineProps({
  saleItems: Array
})

const emit = defineEmits(['buy-now'])

const selectedSizes = reactive({})
const selectedColors = reactive({})

// Helper to calculate rounded discount percentage
const calculateDiscount = (item) => {
  // Use passed discount field if present, otherwise calculate from prices
  if (item.discount) return item.discount

  const currentPrice = item.salePrice || item.price
  const originalPrice = item.originalPrice

  if (!originalPrice || !currentPrice || originalPrice <= currentPrice) {
    return null
  }

  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
}

const handleBuyNow = (item) => {
  const selectedSize = selectedSizes[item.id] || (item.sizes ? item.sizes[0] : 'M')
  const selectedColor = selectedColors[item.id] || (item.colors ? item.colors[0] : { name: 'Standard' })

  emit('buy-now', {
    id: item.id,
    name: item.name,
    price: item.salePrice || item.price,
    image: item.image || null,
    selectedSize,
    selectedColor
  })
}
</script>