<template>
  <section class="bg-gradient-to-b from-indigo-900 via-indigo-800 to-indigo-700 text-white py-20">
    <!-- Header -->
    <div class="container mx-auto px-6 text-center">
      <h1 class="text-3xl md:text-4xl font-extrabold mb-6 max-w-4xl mx-auto leading-snug text-yellow-300">
        Tandai setiap langkah, serunya makin terasa sampai akhir!
      </h1>
      <h2 class="text-lg md:text-xl font-medium mb-12 relative inline-block text-cyan-300">
        Linimasa Perjalanan Kita
        <span class="absolute left-1/2 bottom-[-6px] transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 rounded-full"></span>
      </h2>
    </div>

    <!-- Timeline Container -->
    <div class="container mx-auto px-6 pb-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
      <!-- Looping Timeline Items -->
      <div v-for="(item, index) in timeline" :key="index" class="relative bg-white rounded-lg shadow-lg p-6">
      <!-- Circle Icon -->
      <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full flex items-center justify-center shadow-md z-10">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-white">
        <path d="M12 2l10 10H2z" />
      </svg>
      </div>
      <!-- Content -->
      <div class="text-center mt-8">
      <!-- Title -->
      <div class="text-xl font-bold text-indigo-900">{{ item.title }}</div>
      <!-- Date -->
      <div class="text-sm text-gray-500 mt-2">{{ item.date }}</div>
      <!-- Description -->
      <div class="text-gray-700 mt-4">{{ item.description }}</div>
      </div>
      </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Data Timeline
const timeline = [
  {
    title: 'Open Registration',
    date: '12 Juni 2025',
    description: 'Webinar & Registration: Team Formation & Project Ideation',
  },
  {
    title: 'Bootcamp (Online)',
    date: '11-18 Juli 2025',
    description: 'Bootcamp Online: Project Development & Mentoring',
  },
  {
    title: 'Final Pitching',
    date: ' Agustus 2025',
    description: 'Demo Day: Final Project Presentation & Awards Ceremony',
  },
  
]
</script>