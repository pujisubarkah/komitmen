<template>
  <div class="flex w-full justify-end p-4 relative">
    <!-- Hamburger Button -->
    <button @click="toggleMenu" class="flex flex-col space-y-2 focus:outline-none z-50">
      <span class="w-6 h-0.5 bg-black transition-all duration-300" :class="{ 'rotate-45 translate-y-1.5': isOpen }"></span>
      <span class="w-6 h-0.5 bg-black transition-all duration-300" :class="{ 'opacity-0': isOpen }"></span>
      <span class="w-6 h-0.5 bg-black transition-all duration-300" :class="{ '-rotate-45 -translate-y-1.5': isOpen }"></span>
    </button>

    <!-- Sidebar Menu -->
    <transition name="slide">
      <div v-show="isOpen" class="fixed top-0 right-0 w-72 h-full bg-gradient-to-b from-gray-800 to-gray-900 shadow-2xl z-50 p-6 text-white">
        <!-- Header dengan Tombol Close -->
        <div class="mb-8 flex justify-between items-center">
          <div class="text-xl font-bold tracking-wide">📁 Menu</div>
          <button @click="toggleMenu" class="text-gray-400 hover:text-white text-2xl">
            &times;
          </button>
        </div>

        <!-- Menu Items -->
        <ul class="space-y-6">
          <li><a href="#" class="block text-lg font-medium hover:text-gray-300 transition">Beranda</a></li>
          <li><a href="#" class="block text-lg font-medium hover:text-gray-300 transition">LAN Datahon</a></li>
          <li><a href="#" class="block text-lg font-medium hover:text-gray-300 transition">Gallery</a></li>
          <li><a href="#" class="block text-lg font-medium hover:text-gray-300 transition">Contact</a></li>
        </ul>
      </div>
    </transition>

    <!-- Overlay untuk klik tutup -->
    <div
      v-if="isOpen"
      @click.self="toggleMenu"
      class="fixed inset-0 bg-black bg-opacity-50 z-40"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

button:focus {
  outline: none;
}
</style>