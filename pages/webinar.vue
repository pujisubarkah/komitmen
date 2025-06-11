<template>
  <div class="panduan-container">
      <div class="content">
          <img src="/flyer-webinar.jpg" alt="Preview Panduan" class="preview-image" />
          <div class="description">
              <h1 class="title" style="margin-bottom: 10px;">Webinar Road to LAN Datathon 2025</h1>
              <h2 class="subtitle" style="margin-bottom: 15px;">Masa Depan Kebijakan Publik: Peran AI Generatif dalam Optimalisasi Reformasi Birokrasi</h2>
              <p style="margin-bottom: 15px; text-align: justify;">
                  Bergabunglah dengan webinar kami untuk mendapatkan wawasan mendalam tentang LAN Datathon 2025! Webinar ini akan membahas bagaimana AI generatif dapat mengoptimalkan reformasi birokrasi dalam kebijakan publik. Jangan lewatkan kesempatan ini untuk mempersiapkan diri Anda dengan baik sebelum kompetisi dimulai!
                  
              </p>
          </div>
      </div>
      <div class="buttons">
          <a href="https://us02web.zoom.us/meeting/register/hTgZ1XdCTn-X9NXUXZ6dXA" target="_blank" class="btn view-btn">Registrasi Webinar</a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeoTC0kXjoLFJiT-uc1eSSfrpTVg7IHXX1ae2icLh3s5lJq6A/viewform" target="_blank" class="btn download-btn">Daftar Hadir Webinar</a>
          <a href="https://drive.google.com/file/d/1WOMmG0zjgV6NkVZ6e63FYQbiPkxZOw5e/view?usp=sharing" target="_blank" class="btn download-btn">Background Zoom</a>
      </div>

  </div>
</template>

<script>
export default {
  name: "Panduan",
};
</script>

<style scoped>
.panduan-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  background: linear-gradient(135deg, #e0f7fa, #ede7f6);
  color: #000;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: left;
}

.subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 15px;
  text-align: left;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 800px;
}

.preview-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.description {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: center;
}

.description p {
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
}

.btn {
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.3s ease;
  text-align: center;
}

.download-btn {
  background-color: #4a90e2;
  color: #fff;
}

.download-btn:hover {
  background-color: #357ab8;
}

.view-btn {
  background-color: #8e44ad;
  color: #fff;
}

.view-btn:hover {
  background-color: #6d348c;
}

/* Media Queries */
@media (min-width: 768px) {
  .content {
      flex-direction: row;
      align-items: flex-start;
  }

  .description {
      text-align: left;
      padding-left: 10px;
  }

  .buttons {
      flex-direction: row;
      justify-content: flex-start;
  }
}

@media (max-width: 480px) {
  .title {
      font-size: 1.5rem;
  }

  .btn {
      font-size: 0.9rem;
      padding: 8px 16px;
  }
}
</style>
