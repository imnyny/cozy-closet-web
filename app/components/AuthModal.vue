<template>
  <div v-if="isOpen" class="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div class="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden border border-gray-100 p-6 sm:p-8 relative">
      <button @click="$emit('close')" class="absolute top-5 right-5 p-1.5 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
        <X class="w-5 h-5" />
      </button>

      <div class="flex border-b border-gray-200 mb-6">
        <button 
          @click="tab = 'login'" 
          :class="['flex-1 pb-3 text-sm font-bold border-b-2 transition-all', tab === 'login' ? 'text-indigo-600 border-indigo-600' : 'text-gray-400 border-transparent']"
        >
          Log In
        </button>
        <button 
          @click="tab = 'register'" 
          :class="['flex-1 pb-3 text-sm font-bold border-b-2 transition-all', tab === 'register' ? 'text-indigo-600 border-indigo-600' : 'text-gray-400 border-transparent']"
        >
          Create Account
        </button>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div v-if="tab === 'register'">
          <label class="block text-xs font-semibold text-gray-600 mb-1">Full Name</label>
          <input type="text" required placeholder="Alex Rivera" class="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-indigo-500 outline-none text-sm">
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">Email Address</label>
          <input type="email" required placeholder="alex@example.com" class="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-indigo-500 outline-none text-sm">
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">Password</label>
          <input type="password" required placeholder="••••••••" class="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-indigo-500 outline-none text-sm">
        </div>
        <button type="submit" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl shadow-lg transition-all text-sm">
          {{ tab === 'login' ? 'Sign In' : 'Create Account' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { X } from 'lucide-vue-next'

defineProps({ isOpen: Boolean })
const emit = defineEmits(['close'])

const tab = ref('login')

function handleSubmit() {
  alert(tab.value === 'login' ? 'Successfully Logged In!' : 'Account Created!')
  emit('close')
}
</script>