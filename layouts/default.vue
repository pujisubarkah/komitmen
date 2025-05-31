<template>
  <div>
    <Navbar />   <!-- komponen navbar -->
    <main class="pt-20">  <!-- kasih padding top biar ngga ketutupan navbar fixed -->
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
// pastikan pathnya sesuai
import Navbar from '@/components/Navbar.vue'
</script>
