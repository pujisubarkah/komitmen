export default defineNuxtConfig({
  app: {
    head: {
      title: 'LAN DATATHON 2025',
      // Anda juga bisa menambahkan meta tag lain di sini jika perlu
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Poppins: [400, 600, 700], // Sesuaikan berat font yang kamu butuhkan
        },
        display: 'swap',
      }
    ], // Tambahkan modul Google Fonts dengan konfigurasi
  ],
  build: {
    // Pengaturan build jika perlu
  },
  css: [
    // Bisa tambahkan file CSS global di sini jika ada
  ]
})
