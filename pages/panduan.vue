<template>
    <div class="panduan-container">
        <div class="content">
            <img src="/booklet_datathon.png" alt="Preview Panduan" class="preview-image" />
            <div class="description">
                <h1 class="title" style="margin-bottom: 10px;">Booklet LAN Datathon 2025</h1>
                <p style="margin-bottom: 15px; text-align: justify;">
                    Booklet ini dirancang untuk membantu peserta memahami peraturan kompetisi LAN Datathon 2025.
                    Peserta diwajibkan mengumpulkan proposal ide proyek sesuai dengan tema yang telah ditentukan, mengikuti bootcamp online pelatihan AI dasar, dan melakukan submission project yang telah dibuat.
                    Silakan unduh panduan atau lihat versi online untuk informasi lebih lanjut.
                </p>
                <div class="buttons">
                    <a href="/Booklet_LAN_Datathon_2025.pdf" download class="btn download-btn">Unduh Panduan</a>
                    <a href="https://bookletdatathon.my.canva.site/" target="_blank" class="btn view-btn">Lihat Panduan</a>
                </div>
            </div>
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
    padding: 20px;
    background: linear-gradient(135deg, #4a90e2, #8e44ad);
    color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: left;
}

.content {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    width: 100%;
    max-width: 800px;
}

.preview-image {
    width: 250px;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin-right: 20px; /* Tambahkan margin kanan */
}

.description {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-left: 10px; /* Tambahkan padding kiri */
}

.description p {
    margin: 0;
    font-size: 1rem;
    line-height: 1.5;
}

.buttons {
    display: flex;
    gap: 15px;
}

.btn {
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;
    border-radius: 5px;
    transition: all 0.3s ease;
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
</style>
