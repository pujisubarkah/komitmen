<template>
  <div>
    <Navbar />
    <div class="timeline-container">
      <h1>Timeline Event LAN Datathon 2025</h1>
      <div class="timeline">
        <div class="timeline-item left">
          <div class="timeline-date blue"><small>Minggu 1</small><br>JUNI 2025</div>
          <div class="timeline-content yellow">
            <b>LAUNCHING LAN DATATHON 2025</b>
            <ul>
              <li>WEBINAR</li>
              <li>PENDAFTARAN</li>
            </ul>
          </div>
        </div>
        <div class="timeline-item right">
          <div class="timeline-date blue">JUNI 2025</div>
          <div class="timeline-content yellow">
            <b>PENDAFTARAN PESERTA DAN SELEKSI PROPOSAL</b>
          </div>
        </div>
        <div class="timeline-item left">
          <div class="timeline-date blue"><small>Minggu 4</small><br>JUNI 2025</div>
          <div class="timeline-content yellow">
            <b>SELEKSI PROPOSAL PESERTA</b>
          </div>
        </div>
        <div class="timeline-item right">
          <div class="timeline-date blue"><small>Minggu 1</small><br>JULI 2025</div>
          <div class="timeline-content yellow">
            <b>PENGUMUMAN PESERTA BOOTCAMP</b>
          </div>
        </div>
        <div class="timeline-item left">
          <div class="timeline-date blue"><small>Minggu 2</small><br>JULI 2025</div>
          <div class="timeline-content yellow">
            <b>BOOTCAMP LAN DATATHON 2025</b>
          </div>
        </div>
        <div class="timeline-item right">
            <div class="timeline-date blue">
            <small>Minggu 4</small><br>JULI 2025
            </div>
          <div class="timeline-content yellow">
            <b>SUBMISSION FINAL PROJECT</b>
          </div>
        </div>
        <div class="timeline-item left">
          <div class="timeline-date blue">31 JULI 2025*</div>
          <div class="timeline-content yellow">
            <b>PENGUMUMAN FINALIS (TOP 5)</b>
          </div>
        </div>
        <div class="timeline-item right">
          <div class="timeline-date blue">6 AGUSTUS 2025*</div>
          <div class="timeline-content yellow">
            <b>DEMODAY LAN DATATHON 2025</b>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
</script>

<style scoped>
.timeline-container {
  padding: 60px 20px; /* Tambahkan padding lebih besar */
  background: #fff;
}
.timeline-container h1 {
  text-align: center;
  margin-bottom: 50px; /* Tambahkan margin bawah */
  font-size: 2.2rem; /* Sedikit lebih besar */
  font-weight: bold;
}
.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 30px 0; /* Tambahkan padding atas dan bawah */
}
.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  width: 6px;
  height: 100%;
  background: #19398a;
  transform: translateX(-50%);
  border-radius: 3px;
}
.timeline-item {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  position: relative;
  margin-bottom: 50px; /* Tambahkan margin bawah */
}
.timeline-item.left {
  flex-direction: row;
}
.timeline-item.right {
  flex-direction: row-reverse;
}
.timeline-date {
  min-width: 160px; /* Sedikit lebih lebar */
  max-width: 180px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem; /* Sedikit lebih besar */
  padding: 20px 12px; /* Tambahkan padding */
  border-radius: 12px;
  margin: 0 60px; /* Tambahkan margin horizontal */
  box-shadow: 0 2px 8px #0001;
  z-index: 2;
}
.timeline-date.blue {
  background: #19398a;
}
.timeline-content {
  background: #ffe36e;
  color: #19398a;
  padding: 24px 28px; /* Tambahkan padding */
  border-radius: 40px;
  min-width: 280px; /* Sedikit lebih lebar */
  max-width: 360px;
  font-size: 1.1rem; /* Sedikit lebih besar */
  font-weight: bold;
  box-shadow: 0 2px 8px #0001;
  z-index: 2;
  margin: 0 30px; /* Tambahkan margin horizontal */
  display: flex;
  flex-direction: column;
  gap: 10px; /* Tambahkan jarak antar elemen */
}
.timeline-content ul {
  margin: 10px 0 0 20px; /* Tambahkan margin */
  padding: 0;
  font-weight: normal;
  color: #222;
  font-size: 1rem;
}
.timeline-item::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 32px; /* Sedikit lebih besar */
  height: 32px;
  background: #fff;
  border: 6px solid #19398a;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
}
@media (max-width: 700px) {
  .timeline {
    padding: 0;
  }
  .timeline-item,
  .timeline-item.left,
  .timeline-item.right {
    flex-direction: column !important;
    align-items: center;
    margin-bottom: 40px; /* Tambahkan margin bawah */
  }
  .timeline-date,
  .timeline-content {
    margin: 12px 0; /* Tambahkan margin vertikal */
    min-width: 200px; /* Sedikit lebih lebar */
    max-width: 95vw;
    font-size: 1rem;
    padding: 16px 12px; /* Tambahkan padding */
  }
  .timeline-content {
    border-radius: 30px;
  }
}
</style>
