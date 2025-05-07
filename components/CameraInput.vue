<template>
    <div class="text-center">
      <label class="block font-medium mb-2">Ambil Foto dari Kamera</label>
      
      <!-- Video Preview -->
      <video ref="video" autoplay playsinline class="w-full rounded-md border mb-4" />
      
      <!-- Tombol untuk ambil foto -->
      <button @click="capturePhoto" class="bg-blue-600 text-white px-4 py-2 rounded">
        Ambil Foto
      </button>
      
      <!-- Tombol untuk matikan kamera -->
      <button @click="stopCamera" class="bg-gray-300 text-black px-4 py-2 rounded mt-2">
        Matikan Kamera
      </button>
      
      <!-- Preview Foto -->
      <div v-if="photo" class="mt-4">
        <p class="font-semibold">Hasil Foto:</p>
        <img :src="photo" class="w-40 h-40 object-cover rounded-lg" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  
  const video = ref(null)
  const photo = ref(null)
  let stream = null
  
  // Memulai kamera
  const startCamera = async () => {
    stream = await navigator.mediaDevices.getUserMedia({ video: true })
    video.value.srcObject = stream
  }
  
  // Mematikan kamera
  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop())
      stream = null
    }
  }
  
  // Menangkap foto dari kamera
  const capturePhoto = () => {
    const canvas = document.createElement('canvas')
    canvas.width = video.value.videoWidth
    canvas.height = video.value.videoHeight
    canvas.getContext('2d').drawImage(video.value, 0, 0)
    photo.value = canvas.toDataURL('image/png')  // Menyimpan foto dalam format base64
    stopCamera() // Setelah foto diambil, matikan kamera
  }
  
  // Start kamera saat komponen dimuat
  onMounted(() => {
    startCamera()
  })
  
  // Matikan kamera saat komponen dihancurkan
  onBeforeUnmount(() => {
    stopCamera()
  })
  </script>
  