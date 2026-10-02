<template>
  <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      
      <!-- Brand Logo -->
      <div class="flex items-center space-x-3 cursor-pointer" @click="selectTab('home')">
        <div class="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-md shadow-indigo-200">
          NY
        </div>
        <span class="text-xl font-bold tracking-tight text-slate-900">NY STORE</span>
      </div>

      <!-- Navigation Desktop -->
      <div class="hidden md:flex items-center space-x-1 bg-slate-100 p-1.5 rounded-xl">
        <button 
          v-for="tab in navigationTabs" 
          :key="tab.id"
          @click="selectTab(tab.id)"
          :class="[
            'px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200',
            activeTab === tab.id 
              ? 'bg-white text-indigo-600 shadow-sm' 
              : 'text-slate-600 hover:text-slate-900'
          ]">
          {{ tab.label }}
          <span v-if="tab.badge" class="ml-1 bg-rose-500 text-white text-[10px] px-1.5 py-0.5 rounded-full uppercase">
            {{ tab.badge }}
          </span>
        </button>
      </div>

      <!-- Icon Bar -->
      <div class="flex items-center space-x-1 sm:space-x-2">
        <!-- Search Icon -->
        <button 
          @click="$emit('open-search')" 
          class="p-2.5 text-slate-600 hover:text-indigo-600 hover:bg-slate-100 rounded-full transition-colors"
          title="Search">
          <Search class="w-5 h-5 stroke-[2]" />
        </button>

        <!-- Shopping Cart Icon with Badge -->
        <button 
          @click="$emit('open-cart')" 
          class="relative p-2.5 text-slate-600 hover:text-indigo-600 hover:bg-slate-100 rounded-full transition-colors"
          title="Cart">
          <ShoppingCart class="w-5 h-5 stroke-[2]" />
          <span 
            class="absolute -top-1 -right-1 bg-indigo-600 text-white text-[11px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-sm">
            {{ cartTotalCount }}
          </span>
        </button>

        <!-- User Profile / Auth Icon -->
        <button 
          @click="$emit('open-auth')" 
          class="p-2.5 text-slate-600 hover:text-indigo-600 hover:bg-slate-100 rounded-full transition-colors"
          title="Account">
          <User class="w-5 h-5 stroke-[2]" />
        </button>

        <!-- Mobile Menu Toggle -->
        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen" 
          class="md:hidden p-2.5 text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
          <Menu v-if="!isMobileMenuOpen" class="w-5 h-5" />
          <X v-else class="w-5 h-5" />
        </button>
      </div>

    </nav>

    <!-- Mobile Navigation Drawer -->
    <div 
      v-if="isMobileMenuOpen" 
      class="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-1">
      <button 
        v-for="tab in navigationTabs" 
        :key="tab.id"
        @click="selectTab(tab.id)"
        :class="[
          'w-full text-left px-4 py-2.5 rounded-xl font-semibold text-sm flex items-center justify-between',
          activeTab === tab.id 
            ? 'bg-indigo-50 text-indigo-600 font-bold' 
            : 'text-slate-600 hover:bg-slate-50'
        ]">
        <span>{{ tab.label }}</span>
        <span v-if="tab.badge" class="bg-rose-500 text-white text-[10px] px-2 py-0.5 rounded-full uppercase">
          {{ tab.badge }}
        </span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Search, Heart, ShoppingCart, User, Menu, X } from 'lucide-vue-next'

defineProps({
  activeTab: String,
  cartTotalCount: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['change-tab', 'open-cart', 'open-search', 'open-auth', 'open-wishlist'])

const isMobileMenuOpen = ref(false)

const navigationTabs = [
  { id: 'home', label: 'Home' },
  { id: 'products', label: 'Products' },
  { id: 'sale', label: 'Sale', badge: 'Hot' },
  { id: 'blog', label: 'Blog' }
]

const selectTab = (tabId) => {
  emit('change-tab', tabId)
  isMobileMenuOpen.value = false
}
</script>