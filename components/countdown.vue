<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-200 via-purple-100 to-purple-200 flex flex-col justify-center items-center text-center px-6 py-8">
  
    <div class="max-w-4xl bg-gradient-to-r from-white via-blue-50 to-purple-50 rounded-lg shadow-lg p-8 flex flex-col justify-center items-center h-full">
      <h1 class="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 leading-tight">
        LAN Datathon — Master Machine Learning & Data Science in One Epic Challenge!
      </h1>

      <p class="mb-8 text-gray-800 leading-relaxed text-lg md:text-xl">
        <span class="font-bold text-blue-800">LAN Datathon 2025</span> menandai penyelenggaraan ketiga sejak debutnya di tahun 2023. Tahun ini, kompetisi berfokus pada eksplorasi dan demonstrasi kecanggihan <span class="font-bold text-purple-700">Artificial Intelligence</span> dalam menciptakan birokrasi yang <span class="font-bold text-purple-700">efisien</span> dan <span class="font-bold text-purple-700">responsif</span>.
        <br /><br />
        Lebih dari sekadar ajang kompetisi, LAN Datathon juga menjadi ruang belajar inspiratif bagi <span class="font-bold text-blue-800">Aparatur Sipil Negara (ASN)</span> untuk mengembangkan solusi <span class="italic">inovatif berbasis AI</span> demi pelayanan publik yang lebih optimal dan berdampak nyata.
      </p>

      <h2 class="text-3xl font-bold text-purple-800 mb-6">
        <span class="text-purple-700">Webinar & Registration</span> <span class="font-black">will be open in</span>
      </h2>

      <div class="flex justify-center space-x-6 mb-8 flex-wrap">
        <div class="bg-gradient-to-r from-blue-100 to-purple-200 rounded-lg shadow-md p-8 text-purple-800 text-center w-24 md:w-32">
          <div class="text-4xl md:text-6xl font-extrabold">{{ countdown.days }}</div>
          <div class="mt-2 text-sm md:text-lg font-medium">Days</div>
        </div>
        <div class="bg-gradient-to-r from-blue-100 to-purple-200 rounded-lg shadow-md p-8 text-purple-800 text-center w-24 md:w-32">
          <div class="text-4xl md:text-6xl font-extrabold">{{ countdown.hours }}</div>
          <div class="mt-2 text-sm md:text-lg font-medium">Hours</div>
        </div>
        <div class="bg-gradient-to-r from-blue-100 to-purple-200 rounded-lg shadow-md p-8 text-purple-800 text-center w-24 md:w-32">
          <div class="text-4xl md:text-6xl font-extrabold">{{ countdown.minutes }}</div>
          <div class="mt-2 text-sm md:text-lg font-medium">Minutes</div>
        </div>
        <div class="bg-gradient-to-r from-blue-100 to-purple-200 rounded-lg shadow-md p-8 text-purple-800 text-center w-24 md:w-32">
          <div class="text-4xl md:text-6xl font-extrabold">{{ countdown.seconds }}</div>
          <div class="mt-2 text-sm md:text-lg font-medium">Seconds</div>
        </div>
      </div>

      <div v-if="countdown.days === '00' && countdown.hours === '00' && countdown.minutes === '00' && countdown.seconds === '00'" class="flex space-x-4">
        <NuxtLink to="/registrasi" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold">
          REGISTER NOW
        </NuxtLink>
        <NuxtLink to="/panduan" class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full text-lg font-semibold">
          VIEW BOOKLET
        </NuxtLink>
      </div>
      <div v-else class="bg-gradient-to-r from-purple-700 to-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold">
        12 June 2025, 09.00 WIB
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const countdown = ref({ days: '00', hours: '00', minutes: '00', seconds: '00' })

const target = new Date('2025-06-12T09:00:00')

const updateCountdown = () => {
  const now = new Date()
  const diff = target.getTime() - now.getTime()

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)

  const seconds = Math.floor((diff / 1000) % 60)

  countdown.value = {
    days: String(days).padStart(2, '0'),
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0'),
  }
}

let interval: ReturnType<typeof setInterval>

onMounted(() => {
  updateCountdown()
  interval = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>
