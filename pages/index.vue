<template>
    <div class="flex items-center justify-center h-screen">
      <div class="text-center p-6">
        <h1 class="text-3xl font-bold mb-4">Scan untuk Komitmen</h1>
        <qrcode-vue :value="link" :size="500" /> <!-- Ukuran QR Code besar -->
        <p class="mt-2 text-sm text-gray-600">{{ link }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import QrcodeVue from 'qrcode.vue'
  
  const userId = '12345' // Ganti dengan user ID dinamis
  const link = `https://komitmen.vercel.app/komitmen?user=${userId}`
  </script>
  