<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-8 space-y-6">
      <h1 class="text-2xl font-bold text-center">Formulir Komitmen</h1>

      <!-- Komponen Kamera -->
      <CameraInput />

      <!-- Nama -->
      <div>
        <label class="block font-medium">Nama</label>
        <input v-model="form.nama" type="text" class="w-full mt-1 p-2 border rounded" />
      </div>

      <!-- Submit -->
      <button @click="submitForm" class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
        Saya Berkomitmen
      </button>
    </div>
  </div>
</template>

<script setup>
import CameraInput from '~/components/CameraInput.vue'  // Import komponen kamera

const form = ref({ nama: '' })

const submitForm = () => {
  console.log('Nama:', form.value.nama)
  alert('Foto komitmen telah dikirim!')
}
</script>
