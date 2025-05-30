<template>
  <section class="bg-indigo-800 text-white py-16">
    <!-- Header -->
   <div class="container mx-auto px-4 text-center">
  <h1 class="text-2xl md:text-3xl font-extrabold mb-4 max-w-3xl mx-auto leading-relaxed text-yellow-400">
    Tandai setiap langkah, serunya makin terasa sampai akhir!
  </h1>
  <h2 class="text-xl md:text-2xl font-bold mb-8 relative inline-block text-cyan-400">
    Linimasa Perjalanan Kita
    <span class="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-full"></span>
  </h2>
</div>


    <!-- Timeline Container -->
    <div class="container mx-auto px-4 overflow-x-auto whitespace-nowrap pb-6">
      <div class="flex space-x-10 md:space-x-16 lg:space-x-24 items-center justify-center">
        <!-- Looping Timeline Items -->
        <div v-for="(item, index) in timeline" :key="index" class="inline-flex flex-col items-center min-w-[200px]">
          <!-- Triangle Icon -->
          <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-indigo-800">
              <path d="M12 2l10 10H2z" />
            </svg>
          </div>
          <!-- Title -->
          <div class="mt-4 text-lg font-semibold">{{ item.title }}</div>
          <!-- Date -->
          <div class="text-gray-300 mt-1">{{ item.date }}</div>
          <!-- Description -->
          <div class="text-sm mt-1 text-center">{{ item.description }}</div>
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
    description: 'Webinar & Registration',
  },
  {
    title: 'Bootcamp (Online)',
    date: '11 Juli 2025',
    description: 'Bootcamp Online',
  },
  {
    title: 'Final Pitching',
    date: ' Agustus 2025',
    description: 'Demo day dan presentasi final',
  },
  
]
</script>