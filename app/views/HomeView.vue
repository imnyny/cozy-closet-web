<template>
  <div class="space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <!-- Hero Banner with Cute Bouncy Style -->
    <div
      class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-pink-500 via-rose-400 to-amber-300 text-white shadow-2xl p-8 sm:p-12 lg:p-16 group">

      <!-- Decorative Animated Floating Bubbles -->
      <div
        class="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-xl transition-transform duration-700 ease-out group-hover:scale-150">
      </div>
      <div
        class="absolute -bottom-10 -left-10 w-48 h-48 bg-yellow-200/30 rounded-full blur-xl transition-transform duration-700 ease-out group-hover:scale-125">
      </div>

      <div class="relative z-10 max-w-2xl space-y-6">
        <!-- Cute Tag Badge -->
        <div
          class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5 rounded-full shadow-sm hover:rotate-2 transition-transform duration-300 cursor-default">
          <svg class="w-4 h-4 text-yellow-200 fill-current animate-pulse" viewBox="0 0 24 24">
            <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
          </svg>
          <span class="text-xs font-black uppercase tracking-wider text-white">NEW SEASON 2026 COLLECTION</span>
        </div>

        <!-- Main Title -->
        <h1 class="text-4xl sm:text-6xl font-black tracking-tight leading-tight text-white drop-shadow-sm">
          Redefine Your <br />
          <span
            class="text-yellow-200 inline-block hover:scale-105 hover:rotate-1 transition-transform duration-300 origin-left cursor-default">
            Everyday Style
          </span>
        </h1>

        <!-- Subtitle -->
        <p class="text-sm sm:text-base text-pink-50 max-w-md leading-relaxed font-medium">
          Upgrade your wardrobe with tailored outerwear, sleek trousers, and premium streetwear essentials crafted for
          ultimate cozy comfort!
        </p>

        <!-- Cute Interactive CTA Button -->
        <div class="pt-2">
          <button @click="$emit('navigate', 'products')"
            class="bg-white text-pink-600 hover:bg-pink-50 hover:text-pink-700 px-8 py-4 rounded-2xl font-black text-sm shadow-lg shadow-pink-900/10 hover:shadow-xl hover:shadow-pink-600/20 hover:-translate-y-1 active:translate-y-0 active:scale-95 transition-all duration-300 flex items-center gap-2.5 group/btn cursor-pointer">
            <span>Shop Catalog</span>
            <svg class="w-4 h-4 text-pink-600 group-hover/btn:translate-x-1.5 transition-transform duration-300"
              fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Cute Category Cards Highlights -->
    <section class="space-y-6">
      <div class="flex items-end justify-between border-b-2 border-pink-100 pb-4">
        <div>
          <span class="text-xs font-black uppercase tracking-wider text-pink-500 flex items-center gap-1.5">
            <svg class="w-4 h-4 text-pink-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            CATEGORIES
          </span>
          <h2 class="text-2xl sm:text-3xl font-black text-slate-800 mt-0.5">Explore Collections</h2>
        </div>
        <button @click="$emit('navigate', 'products')"
          class="hidden sm:flex items-center gap-1.5 text-xs font-extrabold text-pink-500 hover:text-pink-600 hover:translate-x-1 transition-all cursor-pointer">
          <span>View all categories</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

      <!-- Cute Category Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <!-- Outerwear Card -->
        <div @click="$emit('navigate', 'products')"
          class="group bg-pink-50/60 hover:bg-white border-2 border-pink-100/80 hover:border-pink-300 p-6 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-pink-500/10 hover:-translate-y-2 cursor-pointer transition-all duration-300 flex justify-between items-center">
          <div>
            <!-- Outerwear Icon -->
            <div
              class="w-10 h-10 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-500 mb-3 group-hover:scale-110 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3 7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v14M8 5l4 4 4-4" />
              </svg>
            </div>
            <h3 class="font-extrabold text-base text-slate-800 group-hover:text-pink-600 transition-colors">Outerwear
            </h3>
            <p class="text-xs text-slate-400 mt-1 font-medium">Blazers, trench coats & jackets</p>
          </div>
          <svg
            class="w-5 h-5 text-pink-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
            fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>

        <!-- Trousers Card -->
        <div @click="$emit('navigate', 'products')"
          class="group bg-purple-50/60 hover:bg-white border-2 border-purple-100/80 hover:border-purple-300 p-6 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2 cursor-pointer transition-all duration-300 flex justify-between items-center">
          <div>
            <!-- Trousers Icon -->
            <div
              class="w-10 h-10 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-500 mb-3 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 4h8l1 16h-4l-1-9-1 9H8L8 4z" />
              </svg>
            </div>
            <h3 class="font-extrabold text-base text-slate-800 group-hover:text-purple-600 transition-colors">Trousers
            </h3>
            <p class="text-xs text-slate-400 mt-1 font-medium">Slim fit pants & raw denim</p>
          </div>
          <svg
            class="w-5 h-5 text-purple-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
            fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>

        <!-- Hoodies Card -->
        <div @click="$emit('navigate', 'products')"
          class="group bg-amber-50/60 hover:bg-white border-2 border-amber-100/80 hover:border-amber-300 p-6 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-2 cursor-pointer transition-all duration-300 flex justify-between items-center">
          <div>
            <!-- Hoodies Icon -->
            <div
              class="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-500 mb-3 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <!-- Hoodie body, sleeves, neckline & drawstrings -->
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M9 4a3 3 0 016 0v2h2.5a1.5 1.5 0 011.5 1.5v11a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 18.5v-11A1.5 1.5 0 014.5 6H7V4z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 10l1.5 3M15 10l-1.5 3" />
              </svg>
            </div>
            <h3 class="font-extrabold text-base text-slate-800 group-hover:text-amber-600 transition-colors">Hoodies
            </h3>
            <p class="text-xs text-slate-400 mt-1 font-medium">Streetwear & loungewear</p>
          </div>
          <svg
            class="w-5 h-5 text-amber-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
            fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
defineEmits(['navigate'])
</script>