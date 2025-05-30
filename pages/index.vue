<template>
  <div>
    <nav class="navbar">
      <ul class="nav-links">
        <li><a href="#home">LAN DATATHON 2025</a></li>
        <li><a href="#timeline">TIMELINE</a></li>
        <li><a href="#panduan">PANDUAN</a></li>
        <li><a href="#gallery">GALERI</a></li>
      </ul>
    </nav>
    <div id="content">
      <section id="home">
        <Countdown />
      </section>
      <section id="timeline">
        <Timeline />
      </section>
      <section id="panduan">
        <Panduan />
      </section>
      <section id="gallery">
        <h2>Galeri</h2>
        <!-- Add your gallery content here -->
      </section>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #4a69bd; /* Soft blue */
  color: #dcdde1; /* Light gray for contrast */
  padding: 20px 30px; /* Increased padding for better visibility */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  z-index: 1000;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Professional font */
  font-size: 18px; /* Larger font size for better readability */
  font-weight: bold; /* Bold font */
  height: 65px; /* Increased height for the navbar */
}

.nav-links {
  list-style: none;
  display: flex;
  justify-content: center; /* Center the menu */
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin: 0 15px; /* Compact spacing */
}

.nav-links a {
  text-decoration: none;
  color: #ffffff; /* White for better contrast */
  font-weight: 500; /* Medium weight for elegance */
  font-size: 14px; /* Slightly smaller font size */
  transition: color 0.3s, transform 0.2s; /* Smooth hover effect */
}

.nav-links a:hover {
  color: #f1c40f; /* Bright yellow for hover contrast */
  transform: scale(1.05); /* Subtle zoom effect */
}

#content {
  margin-top: 60px; /* Adjusted for navbar height */
}
</style>


<script setup>

import Countdown from '@/components/countdown.vue'
import Timeline from '@/components/timeline.vue'
import Panduan from '@/components/panduan.vue'
</script>
