<template>
  <div>
    <Navbar />
    <div class="timeline-container">
      <h1>Daftar Event LAN Datathon 2025</h1>
      <div class="timeline">
        <div class="timeline-item left">
          <div class="timeline-date blue">Minggu ke-1<br>Juni 2025</div>
          <div class="timeline-content yellow">
            <b>LAUNCHING LAN DATATHON 2025</b>
            <ul>
              <li>WEBINAR</li>
              <li>PENDAFTARAN</li>
            </ul>
          </div>
        </div>
        <div class="timeline-item right">
          <div class="timeline-date blue">Juni 2025</div>
          <div class="timeline-content yellow">
            <b>PENDAFTARAN PESERTA DAN SELEKSI PROPOSAL</b>
          </div>
        </div>
        <div class="timeline-item left">
          <div class="timeline-date blue">Minggu ke-4<br>Juni 2025</div>
          <div class="timeline-content yellow">
            <b>SELEKSI PROPOSAL PESERTA</b>
          </div>
        </div>
        <div class="timeline-item right">
          <div class="timeline-date blue">Minggu ke-1<br>Juli 2025</div>
          <div class="timeline-content yellow">
            <b>PENGUMUMAN PESERTA BOOTCAMP</b>
          </div>
        </div>
        <div class="timeline-item left">
          <div class="timeline-date blue">Minggu ke-2<br>Juli 2025</div>
          <div class="timeline-content yellow">
            <b>BOOTCAMP LAN DATATHON 2025</b>
          </div>
        </div>
        <div class="timeline-item right">
          <div class="timeline-date blue">Minggu ke-4<br>Juli 2025</div>
          <div class="timeline-content yellow">
            <b>SUBMISSION FINAL PROJECT</b>
          </div>
        </div>
        <div class="timeline-item left">
          <div class="timeline-date blue">31 Juli 2025</div>
          <div class="timeline-content yellow">
            <b>PENGUMUMAN FINALIS (TOP 5)</b>
          </div>
        </div>
        <div class="timeline-item right">
          <div class="timeline-date blue">6 Agustus 2025</div>
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
  padding: 40px 0;
  background: #fff;
}
.timeline-container h1 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 2rem;
  font-weight: bold;
}
.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px 0;
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
  margin-bottom: 40px;
}
.timeline-item.left {
  flex-direction: row;
}
.timeline-item.right {
  flex-direction: row-reverse;
}
.timeline-date {
  min-width: 140px;
  max-width: 160px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 1.1rem;
  padding: 18px 10px;
  border-radius: 12px;
  margin: 0 20px;
  box-shadow: 0 2px 8px #0001;
  z-index: 2;
}
.timeline-date.blue {
  background: #19398a;
}
.timeline-content {
  background: #ffe36e;
  color: #19398a;
  padding: 18px 24px;
  border-radius: 40px 40px 40px 40px / 50% 50% 50% 50%;
  min-width: 260px;
  max-width: 340px;
  font-size: 1.05rem;
  font-weight: bold;
  box-shadow: 0 2px 8px #0001;
  z-index: 2;
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.timeline-content ul {
  margin: 8px 0 0 18px;
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
  width: 28px;
  height: 28px;
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
    margin-bottom: 32px;
  }
  .timeline-date,
  .timeline-content {
    margin: 8px 0;
    min-width: 180px;
    max-width: 95vw;
    font-size: 1rem;
    padding: 14px 10px;
  }
  .timeline-content {
    border-radius: 30px;
  }
}
</style>