import { ref, computed } from 'vue'

export function useStore() {
  // Modal State Management
  const activeTab = ref('home')
  const isCartOpen = ref(false)
  const isSearchOpen = ref(false)
  const isAuthOpen = ref(false)

  // Store Data
  const products = ref([
    {
      id: 1,
      name: 'Jacket',
      price: 25.00,
      category: 'Outerwear',
      image: '/images/i-1.png',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: [
        { name: 'Navy Blue', hex: '#1e3a8a' },
        { name: 'Emerald', hex: '#047857' },
        { name: 'Black', hex: '#18181b' }
      ]
    },
    {
      id: 2,
      name: 'Slim Jeans',
      price: 15.99,
      category: 'Trousers',
      image: '/images/i-2.png',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: [
        { name: 'Black', hex: '#18181b' },
        { name: 'Navy Blue', hex: '#1e3a8a' },
        { name: 'White', hex: '#f8fafc' }
      ]
    },
    {
      id: 3,
      name: 'Urban Hooded Sweats',
      price: 20.00,
      category: 'Hoodies',
      image: '/images/i-3.png',
      sizes: ['XS', 'S', 'M', 'L'],
      colors: [
        { name: 'Crimson', hex: '#dc2626' },
        { name: 'White', hex: '#f8fafc' }
      ]
    }
  ])

  // Sale Items with automatic discount calculation capability
  const rawSaleItems = ref([
    { 
      id: 101, 
      name: 'Winter Puffer Jacket', 
      category: 'Outerwear',
      originalPrice: 54.00, 
      salePrice: 40.99, 
      image: '/images/i-5.png',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: [
        { name: 'Beige', hex: '#d4b896' },
        { name: 'Hot Pink', hex: '#ec4899' }
      ]
    },
    { 
      id: 102, 
      name: 'Casual Chino Trousers', 
      category: 'Trousers',
      originalPrice: 45.00, 
      salePrice: 39.99, 
      image: '/images/i-4.png',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: [
        { name: 'Olive Green', hex: '#4d5d36' },
        { name: 'Beige', hex: '#d4b896' }
      ]
    }
  ])

  // Computed saleItems that dynamically injects the calculated discount percentage
  const saleItems = computed(() => {
    return rawSaleItems.value.map(item => {
      const discount = (item.originalPrice && item.salePrice)
        ? Math.round(((item.originalPrice - item.salePrice) / item.originalPrice) * 100)
        : null

      return {
        ...item,
        discount
      }
    })
  })

  const blogPosts = ref([
    { id: 1, title: 'Top Wardrobe Essentials', category: 'Fashion Trends', excerpt: 'Discover key items to build a timeless capsule wardrobe.', date: 'Oct 2026' },
    { id: 2, title: 'How to Style Oversized Hoodies', category: 'Styling Guide', excerpt: 'Learn modern street style combinations for all occasions.', date: 'Oct 2026' }
  ])

  // Cart State
  const cart = ref([])

  // Computed Calculations
  const cartTotalCount = computed(() => cart.value.reduce((sum, item) => sum + item.quantity, 0))
  const cartSubtotal = computed(() => cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0))

  // Actions
  const addToCart = (product) => {
    const existing = cart.value.find(
      i => i.id === product.id && i.selectedSize === product.selectedSize && i.selectedColor?.name === product.selectedColor?.name
    )
    if (existing) {
      existing.quantity++
    } else {
      cart.value.push({ ...product, quantity: 1 })
    }
    isCartOpen.value = true
  }

  const buyNow = (product) => {
    addToCart(product)
  }

  const updateQty = ({ item, amount }) => {
    item.quantity += amount
    if (item.quantity <= 0) {
      cart.value = cart.value.filter(i => i !== item)
    }
  }

  const removeItem = (index) => {
    cart.value.splice(index, 1)
  }

  const checkout = () => {
    if (cart.value.length === 0) return

    const orderId = `ORD-${Math.floor(1000 + Math.random() * 9000)}`
    
    cart.value = []
    isCartOpen.value = false

    alert(`Order #${orderId} placed successfully! Thank you for your purchase.`)
  }

  return {
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
  }
}