<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 flex flex-col justify-center items-center text-center px-4">

    <div class="max-w-3xl">
    <h1 class="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
  LAN Datathon — Master Machine Learning & Data Science in One Epic Challenge!
</h1>

    <p class="mb-6 text-gray-700 leading-relaxed text-lg">
  LAN Datathon 2025 menandai penyelenggaraan ketiga sejak debutnya di tahun 2023. Tahun ini, kompetisi berfokus pada eksplorasi dan demonstrasi kecanggihan <span class="font-semibold text-purple-800">Artificial Intelligence</span> dalam menciptakan birokrasi yang <span class="font-semibold text-purple-800">efisien</span> dan <span class="font-semibold text-purple-800">responsif</span>.  
  <br /><br />
  Lebih dari sekadar ajang kompetisi, LAN Datathon juga menjadi ruang belajar inspiratif bagi <span class="font-semibold text-blue-800">ASN</span> untuk mengembangkan solusi <span class="italic">inovatif berbasis AI</span> demi pelayanan publik yang lebih optimal dan berdampak nyata.
</p>


      <h2 class="text-2xl font-bold mb-4">
        <span class="text-purple-700">Webinar & Registration</span> <span class="font-black">will be open in</span>
      </h2>

      <div class="flex justify-center space-x-4 mb-6">
  <div class="bg-white rounded-xl shadow p-6 text-purple-700 text-center">
    <div class="text-5xl font-bold">{{ countdown.days }}</div>
    <div class="mt-2">Days</div>
  </div>
  <div class="bg-white rounded-xl shadow p-6 text-purple-700 text-center">
    <div class="text-5xl font-bold">{{ countdown.hours }}</div>
    <div class="mt-2">Hours</div>
  </div>
  <div class="bg-white rounded-xl shadow p-6 text-purple-700 text-center">
    <div class="text-5xl font-bold">{{ countdown.minutes }}</div>
    <div class="mt-2">Minutes</div>
  </div>
</div>


      <div class="bg-white px-4 py-2 rounded-full text-purple-700 font-semibold">
        12  Juni 2025, 09.00
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const countdown = ref({ days: '00', hours: '00', minutes: '00' })

const target = new Date('2025-06-12T09:00:00')

const updateCountdown = () => {
  const now = new Date()
  const diff = target.getTime() - now.getTime()

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)

  countdown.value = {
    days: String(days).padStart(2, '0'),
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
  }
}

let interval: NodeJS.Timer

onMounted(() => {
  updateCountdown()
  interval = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>
