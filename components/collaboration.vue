<template>
    <div class="collaboration-container">
        <h1 class="title">In collaboration with</h1>
        <div class="logos">
            <img src="/lanri_.png" alt="Lanri Logo" class="logo" />
            <img src="/tanoto.png" alt="Tanoto Logo" class="logo" />
            <img src="/mandiri.png" alt="Mandiri Logo" class="logo" />
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
    font-size: 2.5rem;
    margin-bottom: 20px;
    font-weight: bold;
    color: #6a5acd; /* Warna biru purple */
    font-style: italic;
    font-family: 'Comic Sans MS', 'Comic Sans', cursive; /* Font tulisan tangan */
}

.logos {
    display: flex;
    justify-content: center;
    gap: 30px; /* Menambah jarak antar logo */
}

.logo {
    height: 80px;
    width: auto;
    filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.2));
    margin: 10px; /* Menambah margin di sekitar logo */
}
</style>
