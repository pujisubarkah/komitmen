<template>
    <div class="contact-page">
        <h1 class="title">Kontak Kami</h1>
        <div class="contact-card">
            <h2>WhatsApp</h2>
            <div class="contact-item">
                <a
                    :href="'https://wa.me/6285724469390?text=' + encodeURIComponent('Halo, saya mau tau lebih lanjut mengenai LAN Datathon')"
                    target="_blank"
                    class="contact-link"
                >
                    <i class="fab fa-whatsapp"></i> Hasna (+62 857 2446 9390)
                </a>
            </div>
            <div class="contact-item">
                <a
                    :href="'https://wa.me/6281290897184?text=' + encodeURIComponent('Halo, saya mau tau lebih lanjut mengenai LAN Datathon')"
                    target="_blank"
                    class="contact-link"
                >
                    <i class="fab fa-whatsapp"></i> Erlyna (+62 812 9089 7184)
                </a>
            </div>
        </div>

        <div class="contact-card">
            <h2>Instagram</h2>
            <div class="contact-item">
                <a
                    href="https://instagram.com/humas_lan"
                    target="_blank"
                    class="contact-link"
                >
                    <i class="fab fa-instagram"></i> humas_lan
                </a>
            </div>
            <div class="contact-item">
                <a
                    href="https://instagram.com/pusdatin.lan"
                    target="_blank"
                    class="contact-link"
                >
                    <i class="fab fa-instagram"></i> pusdatin.lan
                </a>
            </div>
        </div>

        <div class="contact-card">
            <h2>Email</h2>
            <div class="contact-item">
                <a href="mailto:pusdatin@lan.go.id" class="contact-link">
                    <i class="fas fa-envelope"></i> pusdatin@lan.go.id
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.contact-page {
    font-family: Arial, sans-serif;
    padding: 20px;
    background: linear-gradient(to bottom, #6a11cb, #2575fc);
    color: #fff;
    min-height: 100vh;
}

.title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 20px;
}

.contact-card {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
}

.contact-card h2 {
    font-size: 1.8rem;
    margin-bottom: 10px;
}

.contact-item {
    margin-bottom: 10px;
}

.contact-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
}

.contact-link i {
    margin-right: 10px;
    font-size: 1.5rem;
}

.contact-link:hover {
    text-decoration: underline;
}
</style>