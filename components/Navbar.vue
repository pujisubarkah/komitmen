<template>
  <nav class="fixed top-0 left-0 w-full bg-[#4a69bd] text-white shadow-md z-50 m-0 p-0">
    <div class="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
      <!-- Logo -->
      <NuxtLink to="/" class="text-lg font-bold hover:text-yellow-400 transition-colors">LAN DATATHON 2025</NuxtLink>

      <!-- Hamburger -->
      <button @click="toggleMenu" class="md:hidden focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <!-- Menu - Desktop -->
      <ul class="hidden md:flex space-x-6 text-sm font-medium">
        <li><NuxtLink to="/event" class="hover:text-yellow-400 transition-colors">EVENTS</NuxtLink></li>
        <li><NuxtLink to="/jejak_kreatif" class="hover:text-yellow-400 transition-colors">JEJAK KREATIF</NuxtLink></li>
        <li><NuxtLink to="/panduan" class="hover:text-yellow-400 transition-colors">PANDUAN</NuxtLink></li>
        <li><NuxtLink to="/galeri" class="hover:text-yellow-400 transition-colors">GALERI</NuxtLink></li>
      </ul>

      <!-- Menu - Mobile -->
      <transition name="fade">
        <ul
          v-if="isOpen"
          class="absolute top-full left-0 w-full md:hidden px-4 pb-4 space-y-2 text-sm font-medium bg-[#4a69bd] shadow-lg"
        >
          <li><NuxtLink @click="closeMenu" to="/event" class="block hover:text-yellow-400 transition-colors">EVENTS</NuxtLink></li>
          <li><NuxtLink @click="closeMenu" to="/jejak_kreatif" class="block hover:text-yellow-400 transition-colors">JEJAK KREATIF</NuxtLink></li>
          <li><NuxtLink @click="closeMenu" to="/panduan" class="block hover:text-yellow-400 transition-colors">PANDUAN</NuxtLink></li>
          <li><NuxtLink @click="closeMenu" to="/galeri" class="block hover:text-yellow-400 transition-colors">GALERI</NuxtLink></li>
        </ul>
      </transition>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}
</script>

<style>
/* Optional: Add smooth fade-in/out animation for mobile menu */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
