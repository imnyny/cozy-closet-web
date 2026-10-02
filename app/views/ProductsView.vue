<template>
  <div class="space-y-6">
    <div>
      <h2 class="text-2xl font-black text-slate-900">All Products</h2>
      <p class="text-sm text-slate-500">Browse through our latest catalog and pick your size and color.</p>
    </div>

    <!-- Product Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProductCard 
        v-for="product in products" 
        :key="product.id" 
        :product="product" 
        @add-to-cart="handleAddToCart"
        @buy-now="handleBuyNow" 
      />
    </div>
  </div>
</template>

<script setup>
import ProductCard from '~/components/ProductCard.vue'

// Define Props
defineProps({
  products: {
    type: Array,
    default: () => []
  }
})

// Define Emits (added 'toggle-wishlist' which was missing in your original snippet)
const emit = defineEmits(['add-to-cart', 'buy-now'])

// Event Handlers
const handleAddToCart = (payload) => {
  emit('add-to-cart', payload)
}

const handleBuyNow = (payload) => {
  emit('buy-now', payload)
}
</script>