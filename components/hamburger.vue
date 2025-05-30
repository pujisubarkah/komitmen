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
      <div v-show="isOpen" class="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 p-4">
        <!-- Header dengan Tombol Close -->
        <div class="mb-6 flex justify-between items-center">
          <div class="text-lg font-semibold">📁 Menu</div>
          <button @click="toggleMenu" class="text-gray-500 hover:text-gray-800">
            &times;
          </button>
        </div>

        <!-- Menu Items -->
        <ul class="space-y-4">
          <li><a href="#" class="hover:underline">Beranda</a></li>
          <li><a href="#" class="hover:underline">LAN Datahon</a></li>
          <li><a href="#" class="hover:underline">Gallery</a></li>
          <li><a href="#" class="hover:underline">Contact</a></li>
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
</style>