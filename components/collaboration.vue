<template>
    <div class="collaboration-container">
        <h1 class="title">In collaboration with</h1>
        <div class="logos">
            <img src="/lanri_.png" alt="Lanri Logo" class="logo" />
            <img src="/tanoto.png" alt="Tanoto Logo" class="logo" />
            <img src="/mandiri.png" alt="Mandiri Logo" class="logo" />
        </div>
        <div class="small-logos">
            <img src="/data_academy.png" alt="Data Academy Logo" class="small-logo" />
            <img src="/korika.png" alt="Korika Logo" class="small-logo" />
        </div>
    </div>
</template>

<script>
export default {
    name: "Collaboration",
};
</script>

<style scoped>
.collaboration-container {
    text-align: center;
    background: linear-gradient(to right, #dceeff, #e8d9f1);
    padding: 20px;
    border-radius: 10px;
    color: white;
}

.title {
    font-size: 2rem;
    margin-bottom: 20px;
    font-weight: bold;
    color: #6a5acd;
    font-style: italic;
    font-family: 'Comic Sans MS', 'Comic Sans', cursive;
}

.logos, .small-logos {
    display: flex;
    justify-content: center;
    flex-wrap: wrap; /* Membuat elemen membungkus jika ruang tidak cukup */
    gap: 20px;
}

.logo, .small-logo {
    height: auto;
    width: 200px; /* Ukuran default untuk logo */
    max-width: 100%; /* Membatasi ukuran agar tidak melebihi kontainer */
    filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.2));
    margin: 10px;
}

.small-logo {
    width: 150px; /* Ukuran default untuk logo kecil */
}

@media (max-width: 768px) {
    .title {
        font-size: 1.5rem; /* Ukuran font lebih kecil untuk perangkat kecil */
    }

    .logo {
        width: 80px; /* Ukuran logo lebih kecil */
    }

    .small-logo {
        width: 60px; /* Ukuran logo kecil lebih kecil */
    }
}

@media (max-width: 480px) {
    .title {
        font-size: 1.2rem; /* Ukuran font lebih kecil lagi */
    }

    .logo {
        width: 60px; /* Ukuran logo lebih kecil lagi */
    }

    .small-logo {
        width: 50px; /* Ukuran logo kecil lebih kecil lagi */
    }
}
</style>
