<template>
  <div class="space-y-6">
    <div>
      <h2 class="text-2xl font-black text-slate-900">Fashion & Style Journal</h2>
      <p class="text-sm text-slate-500">Read news, trends, and wardrobe tips from our editorial team.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <article v-for="post in posts" :key="post.id" class="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col justify-between">
        <div class="p-6">
          <span class="text-xs font-bold text-indigo-600 uppercase tracking-wider">{{ post.category }}</span>
          <h3 class="text-lg font-bold text-slate-900 mt-2 mb-2 hover:text-indigo-600 transition cursor-pointer">
            {{ post.title }}
          </h3>
          <p class="text-xs text-slate-600 leading-relaxed">{{ post.excerpt }}</p>
        </div>
        <div class="px-6 py-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
          <span>{{ post.date }}</span>
          <span class="font-semibold text-slate-600 cursor-pointer hover:text-indigo-600">Read Article →</span>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
defineProps({
  posts: Array
})
</script>