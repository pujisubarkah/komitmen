<template>
  <div class="max-w-5xl mx-auto px-8 py-12 bg-gradient-to-b from-blue-50 to-purple-50 rounded-lg shadow-lg">
    <h1 class="text-4xl font-extrabold mb-6 text-blue-800">Karya Peserta LAN Datathon Event Sebelumnya</h1>
    <p class="mb-10 text-gray-700 text-lg leading-relaxed">
      Temukan inovasi dan kreativitas luar biasa dari para peserta LAN Datathon di event-event sebelumnya.
      Beragam karya data visualisasi, aplikasi, dan solusi yang telah memberikan inspirasi dan dampak nyata.
      Mari jelajahi jejak kreativitas yang terus berkembang dan memacu semangat berinovasi!
    </p>

    <h3 class="text-2xl font-bold mb-4 text-blue-700">LAN DATATHON 2024</h3>
    <p class="mb-8 text-gray-600 text-base leading-relaxed">
      Nikmati pengalaman eksplorasi data yang kaya dan interaktif melalui dashboard Tableau ini, yang menampilkan berbagai insight menarik dari proyek peserta.
      Cocok untuk kamu yang suka mendalami data secara visual dan detail.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <!-- Karya 1 -->
      <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer" 
        @click="openTableauDashboard('https://public.tableau.com/views/DOIPINTAR-DashboardDataIndonesiadalamPendidikandanTransformasiSosial-Indonesianv3/D_Master?:language=en-US&:display_count=n&:origin=viz_share_link&:showVizHome=no')">
        <h2 class="text-xl font-semibold mb-3 text-blue-700">
          Indonesia dalam Pendidikan dan Transformasi Sosial
        </h2>
        <p class="text-sm font-medium text-gray-500 mb-3">
          Oleh: Nofriani (Badan Pusat Statistik)
        </p>
        <p class="mb-5 text-gray-600 leading-relaxed">
          Visualisasi interaktif tentang keadaan pendidikan dan transformasi sosial di Indonesia yang dibuat oleh Nofriani dari BPS Provinsi Bengkulu.
        </p>
        <div class="relative" style="padding-top: 56.25%;">
          <img
        src="https://public.tableau.com/static/images/DO/DOIPINTAR-DashboardDataIndonesiadalamPendidikandanTransformasiSosial-Indonesianv3/D_Master/1.png"
        alt="Preview Tableau Dashboard"
        class="absolute top-0 left-0 w-full h-full rounded-lg object-cover"
          />
        </div>
      </div>
      <!-- Karya 2 -->
      <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer" @click="openTableauDashboard('https://public.tableau.com/views/DashboardP3STA/DUtama?:language=en-US&:display_count=n&:origin=viz_share_link&:showVizHome=no')">
        <h2 class="text-xl font-semibold mb-3 text-blue-700">
          Integrasi Data untuk Transformasi Sosial Berkelanjutan
        </h2>
        <p class="text-sm font-medium text-gray-500 mb-3">
          Oleh: Arif RK (Kementerian Kesehatan)
        </p>
        <p class="mb-5 text-gray-600 leading-relaxed">
          Visualisasi interaktif tentang keadaan status kesehatan dan status gizi di Indonesia yang dibuat oleh Arif dari Bapelkes Kementerian Kesehatan.
        </p>
        <div class="relative" style="padding-top: 56.25%;">
          <img
        src="https://public.tableau.com/static/images/Da/DashboardP3STA/DUtama/1.png"
        alt="Preview Tableau Dashboard"
        class="absolute top-0 left-0 w-full h-full rounded-lg object-cover"
          />
        </div>
      </div>
      <!-- Karya 3 -->
      <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer" @click="openTableauDashboard('https://public.tableau.com/views/Project-IHDD/IHDD?:language=en-US&:display_count=n&:origin=viz_share_link&:showVizHome=no')">
        <h2 class="text-xl font-semibold mb-3 text-blue-700">
          Indonesia Health Development Dashboard
        </h2>
        <p class="text-sm font-medium text-gray-500 mb-3">
          Oleh: Florencia SG (Badan Pusat Statistik)
        </p>
        <p class="mb-5 text-gray-600 leading-relaxed">
          Visualisasi interaktif tentang kondisi pembangunan kesehatan di Indonesia yang dibuat oleh Florencia dari BPS RI.
        </p>
        <div class="relative" style="padding-top: 56.25%;">
          <img
        src="https://public.tableau.com/static/images/Pr/Project-IHDD/IHDD/1.png"
        alt="Preview Tableau Dashboard"
        class="absolute top-0 left-0 w-full h-full rounded-lg object-cover"
          />
        </div>
      </div>
      <!-- Karya 4 -->
      <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer" @click="openTableauDashboard('https://public.tableau.com/views/VisualizingStudent-TeacherRatiosinIndonesiaforInformedPolicyActionv2/OptimalizationEducationalEquity?:language=en-US&:display_count=n&:origin=viz_share_link&:showVizHome=no')">
        <h2 class="text-xl font-semibold mb-3 text-blue-700">
          Improving the Quality of Education in Indonesia
        </h2>
        <p class="text-sm font-medium text-gray-500 mb-3">
          Oleh: Anan BK (Lembaga Ketahanan Nasional)
        </p>
        <p class="mb-5 text-gray-600 leading-relaxed">
          Visualisasi interaktif tentang keadaan kualitas pendidikan di Indonesia yang dibuat oleh Anan BK dari Lemhannas.
        </p>
        <div class="relative" style="padding-top: 56.25%;">
          <img
        src="https://public.tableau.com/static/images/Vi/VisualizingStudent-TeacherRatiosinIndonesiaforInformedPolicyActionv2/OptimalizationEducationalEquity/1.png"
        alt="Preview Tableau Dashboard"
        class="absolute top-0 left-0 w-full h-full rounded-lg object-cover"
          />
        </div>
      </div>
      <!-- Karya 5 -->
      <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer" @click="openTableauDashboard('https://public.tableau.com/views/FinalProject_17215797609370/DashboardUtama2?:language=en-US&:display_count=n&:origin=viz_share_link&:showVizHome=no')">
        <h2 class="text-xl font-semibold mb-3 text-blue-700">
          Pendidikan, Inovasi, dan Pembangunan Manusia Indonesia
        </h2>
        <p class="text-sm font-medium text-gray-500 mb-3">
          Oleh: Mustofa (Lembaga Administrasi Negara/LAN)
        </p>
        <p class="mb-5 text-gray-600 leading-relaxed">
          Visualisasi interaktif tentang keadaan pendidikan, inovasi, dan pembangunan manusia di Indonesia yang dibuat oleh Mustofa dari LANRI.
        </p>
        <div class="relative" style="padding-top: 56.25%;">
          <img
        src="https://public.tableau.com/static/images/Fi/FinalProject_17215797609370/DashboardUtama2/1.png"
        alt="Preview Tableau Dashboard"
        class="absolute top-0 left-0 w-full h-full rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openTableauDashboard(link) {
      window.open(link, '_blank');
    }
  }
};
</script>
