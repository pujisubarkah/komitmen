<template>
  <div class="galeri-page max-w-6xl mx-auto px-4 py-10">
    <h1 class="text-5xl font-extrabold mb-6">
      <span class="text-purple-900">Jejak Inspirasi  -  </span> 
      <span class="text-blue-800">Dokumentasi LAN Datathon</span>
    </h1>
    
    <p class="text-gray-700 text-lg mb-8">
      Lihat kembali momen-momen penuh semangat, kreativitas, dan kolaborasi dari event LAN Datathon sebelumnya.  
      Dalam galeri ini, Anda akan menemukan berbagai dokumentasi menarik, mulai dari sesi presentasi yang penuh ide-ide brilian, 
      mentoring yang memberikan wawasan baru, hingga momen-momen penjurian yang menegangkan. 
      Setiap foto dan video yang ditampilkan di sini adalah bukti nyata dari dedikasi, kerja keras, dan inovasi para peserta. 
      Mari kita rayakan perjalanan inspiratif ini bersama!
    </p>

    <!-- Video Pengantar -->
    <div class="mb-12">
      <div class="relative" style="padding-top: 56.25%;">
        <iframe
          class="absolute top-0 left-0 w-full h-full rounded-lg"
          src="https://drive.google.com/file/d/1bGwbPbnLOhqp_iSJ2wGMZoWECG2iFqYP/preview"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <!-- Galeri Foto -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div v-for="(img, idx) in images" :key="idx" class="galeri-item">
        <img :src="img.src" :alt="img.alt" class="w-full h-auto rounded-lg shadow-md" />
        <p class="mt-2 text-center text-gray-600 text-sm">{{ img.caption }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const images = [
  {
    src: 'https://drive.usercontent.google.com/download?id=1FF6jTztAmQjhBjxG0fpu7nNe1jTmoTxS&export=view&authuser=0',
    alt: 'Peserta Presentasi',
    caption: 'Presentasi Tim Datathon',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1bv0FrP76mcbXDb48DK-Ju97ueGF6w50S',
    alt: 'Suasana Kegiatan',
    caption: 'Kolaborasi dalam Tim',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1squhpwxGXoKe7F3HMWuGUpQlCqIVCAwg',
    alt: 'Mentoring Session',
    caption: 'Sesi Mentoring Seru',
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=14s8xbVxpfQrLTz-C-EoIAyfTcF9Sbktq',
    alt: 'Penjurian',
    caption: 'Momen Penjurian Kreatif',
  },
]
</script>


<style scoped>
.galeri-item {
  transition: transform 0.3s ease;
}
.galeri-item:hover {
  transform: scale(1.03);
}
</style>
