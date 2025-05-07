<template>
  <div class="p-4 text-center">
    <h2 class="text-2xl font-bold mb-4">Ambil Foto Komitmen</h2>
    <video ref="video" autoplay playsinline class="w-full max-w-md mx-auto border rounded" />

    <canvas ref="canvas" class="hidden" />

    <button @click="capturePhoto" class="mt-4 px-6 py-2 bg-blue-500 text-white rounded">
      Ambil Foto
    </button>

    <div v-if="photo" class="mt-4">
      <h3 class="font-semibold">Preview Foto:</h3>
      <img :src="photo" class="mt-2 rounded shadow-md max-w-xs mx-auto" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const video = ref(null)
const canvas = ref(null)
const photo = ref(null)
const route = useRoute()
const userId = route.query.user

onMounted(async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true })
    video.value.srcObject = stream
  } catch (err) {
    alert('Tidak bisa mengakses kamera: ' + err.message)
  }
})

const capturePhoto = () => {
  const context = canvas.value.getContext('2d')
  canvas.value.width = video.value.videoWidth
  canvas.value.height = video.value.videoHeight
  context.drawImage(video.value, 0, 0)

  photo.value = canvas.value.toDataURL('image/png')

  // TODO: Kirim ke server
  // fetch('/api/submit', {
  //   method: 'POST',
  //   body: JSON.stringify({ userId, photo: photo.value }),
  //   headers: { 'Content-Type': 'application/json' }
  // })
}
</script>
