<template>
  <div v-if="isOpen" class="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-50 flex items-start justify-center pt-20 px-4">
    <div class="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
      <div class="p-4 border-b border-gray-100 flex items-center gap-3">
        <Search class="w-5 h-5 text-gray-400" />
        <input 
          v-model="query" 
          type="text" 
          placeholder="Search products..." 
          class="w-full text-base font-medium outline-none text-gray-800 placeholder-gray-400"
        >
        <button @click="$emit('close')" class="p-1.5 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
          <X class="w-5 h-5" />
        </button>
      </div>

      <div class="p-4 max-h-[60vh] overflow-y-auto space-y-3">
        <div v-if="filteredProducts.length === 0" class="text-center py-6 text-gray-400 text-sm">
          No matching products found.
        </div>
        <div 
          v-for="item in filteredProducts" 
          :key="item.id"
          class="flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-100 cursor-pointer"
        >
          <div class="flex items-center gap-3">
            <img :src="item.image" class="w-12 h-12 rounded-xl object-cover">
            <div>
              <h4 class="font-bold text-sm text-gray-900">{{ item.name }}</h4>
              <span class="text-xs text-indigo-600 font-semibold">{{ item.category }} • ${{ item.price.toFixed(2) }}</span>
            </div>
          </div>
          <button @click="$emit('add-to-cart', item)" class="bg-indigo-50 hover:bg-indigo-600 text-indigo-600 hover:text-white p-2 rounded-xl text-xs font-bold transition-all">
            + Add
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Search, X } from 'lucide-vue-next'

const props = defineProps({
  isOpen: Boolean,
  products: Array
})

defineEmits(['close', 'add-to-cart'])

const query = ref('')

const filteredProducts = computed(() => {
  if (!query.value.trim()) return props.products
  return props.products.filter(p => 
    p.name.toLowerCase().includes(query.value.toLowerCase()) ||
    p.category.toLowerCase().includes(query.value.toLowerCase())
  )
})
</script>