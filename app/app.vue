<template>
  <div class="min-h-screen bg-slate-50 text-slate-800 font-sans">
    <Head>
      <Title>cozycloset</Title>
      <Link rel="icon" type="image/png" href="/icon.png" />
    </Head>
    <!-- Navbar Component -->
    <Navbar 
      :activeTab="activeTab" 
      :cartTotalCount="cartTotalCount" 
      @change-tab="activeTab = $event"
      @open-cart="isCartOpen = true" 
      @open-search="isSearchOpen = true"
      @open-auth="isAuthOpen = true"
    />

    <!-- Main View Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <HomeView v-if="activeTab === 'home'" @navigate="activeTab = $event" />
      
      <ProductsView 
        v-if="activeTab === 'products'" 
        :products="products" 
        @add-to-cart="addToCart" 
        @buy-now="buyNow" 
      />
      
      <SaleView 
        v-if="activeTab === 'sale'" 
        :saleItems="saleItems" 
        @add-to-cart="addToCart" 
        @buy-now="buyNow"
      />
      
      <BlogView v-if="activeTab === 'blog'" :posts="blogPosts" />
    </main>

    <!-- Cart Drawer Component -->
    <CartDrawer 
      :isOpen="isCartOpen" 
      :cart="cart" 
      :totalCount="cartTotalCount" 
      :subtotal="cartSubtotal"
      @close="isCartOpen = false" 
      @update-qty="updateQty" 
      @remove-item="removeItem" 
      @checkout="checkout" 
    />

    <!-- Search Modal Component -->
    <SearchModal 
      :isOpen="isSearchOpen" 
      :products="products" 
      @close="isSearchOpen = false" 
      @add-to-cart="addToCart" 
    />

    <!-- Auth Modal Component -->
    <AuthModal 
      :isOpen="isAuthOpen" 
      @close="isAuthOpen = false" 
    />

  </div>
</template>

<script setup>
// Import Components
import Navbar from './components/Navbar.vue'
import CartDrawer from './components/CartDrawer.vue'
import SearchModal from './components/SearchModal.vue'
import AuthModal from './components/AuthModal.vue'

// Import Views
import HomeView from './views/HomeView.vue'
import ProductsView from './views/ProductsView.vue'
import SaleView from './views/SaleView.vue'
import BlogView from './views/BlogView.vue'

// Import Composable Logic
import { useStore } from './data/useStore.js'

const {
  activeTab,
  isCartOpen,
  isSearchOpen,
  isAuthOpen,
  products,
  saleItems,
  blogPosts,
  cart,
  cartTotalCount,
  cartSubtotal,
  addToCart,
  buyNow,
  updateQty,
  removeItem,
  checkout
} = useStore()
</script>