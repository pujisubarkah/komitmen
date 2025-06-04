<template>
  <div>
    <Navbar />
    <div class="timeline-container">
      <h1>Timeline Event LAN Datathon 2025</h1>
      <div class="timeline">
        <img src="/timeline.jpeg" alt="Timeline LAN Datathon 2025" class="timeline-image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
</script>

<style scoped>
.timeline-container {
  padding: 60px 20px;
  background: #fff;
}
.timeline-container h1 {
  text-align: center;
  margin-bottom: 50px;
  font-size: 2.2rem;
  font-weight: bold;
}
.timeline {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  margin: 0 auto;
  padding: 30px 0;
}
.timeline-image {
  width: 100%;
  max-width: 800px; /* Perbesar ukuran maksimum */
  height: auto;
  border-radius: 12px;
  box-shadow: 0 2px 8px #0001;
  object-fit: cover; /* Pastikan gambar tetap proporsional */
}
</style>
