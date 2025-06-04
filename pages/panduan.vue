<template>
    <div class="panduan-container">
        <div class="content">
            <img src="/booklet_datathon.png" alt="Preview Panduan" class="preview-image" />
            <div class="description">
                <h1 class="title" style="margin-bottom: 10px;">Booklet LAN Datathon</h1>
                <p style="margin-bottom: 15px; text-align: justify;">
                    Booklet ini dirancang untuk membantu peserta memahami peraturan kompetisi LAN Datathon 2025 secara menyeluruh. Dalam booklet ini, peserta akan menemukan informasi penting terkait tahapan kompetisi, mulai dari pengumpulan proposal ide proyek sesuai tema, hingga pelaksanaan bootcamp online yang dirancang untuk memberikan pelatihan dasar mengenai pembuatan proyek/aplikasi berbasis AI. 
                    Panduan ini juga mencakup langkah-langkah teknis dalam melakukan submission proyek. 
                    Silakan unduh panduan ini atau lihat versi online untuk mendapatkan informasi lebih rinci dan memastikan Anda tidak melewatkan detail penting terkait kompetisi.
                </p>
                <div class="buttons">
                    <a href="https://drive.google.com/uc?export=download&id=1v9AxqEpltFBKTbbkzkt8BKhnh_ktjPg1" download class="btn download-btn">Unduh Panduan</a>
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
    padding: 40px 20px;
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
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
    max-width: 800px;
}

.preview-image {
    width: 100%;
    max-width: 350px;
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
