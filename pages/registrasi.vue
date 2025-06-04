<template>
    <div class="registration-page">
        <h1 class="text-5xl font-extrabold mb-6">
      <span class="text-purple-700">Register Now  -  </span> 
      <span class="text-blue-800">Be the Next AI Master</span>
    </h1>
    <hr class="my-8 border-t-2 border-gray-300">
    <div class="booklet-preview">
        <div class="booklet-image-container">
            <img src="/booklet_datathon.png" alt="Booklet Preview" class="booklet-image">
        </div>
        <div class="booklet-content">
            <p class="booklet-description">
                Discover all the details about the event in our comprehensive booklet. Click the button below to view or download the booklet and get started on your journey to becoming the next AI Master!
            </p>
            <button @click="goToGuide" class="guide-button">📓 View Booklet</button>
        </div>
    </div>
    <hr class="my-8 border-t-2 border-gray-300">
        <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSfLoCW5ypUoQq8_7M_Id0D-97MQrUY1-le7D5xHbwyWkgq2Kw/viewform?embedded=true" 
            width="100%" 
            height="800" 
            frameborder="0" 
            marginheight="0" 
            marginwidth="0">
            Loading…
        </iframe>
    </div>
</template>

<script>
export default {
    name: "RegistrasiPage",
    methods: {
        goToGuide() {
            this.$router.push('/panduan');
        }
    }
};
</script>

<style scoped>

.registration-page {
    text-align: center;
    padding: 20px;
    background: linear-gradient(to bottom, #f5f7fa, #c3cfe2);
    color: #333333;
    font-family: 'Poppins', sans-serif;
    min-height: 100vh;
}

.registration-page h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.guide-button {
    margin-bottom: 20px;
    padding: 12px 25px;
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    background-color: #4a90e2;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.guide-button:hover {
    background-color: #357ab8;
    transform: translateY(-2px);
}

.guide-button:active {
    background-color: #2c5e91;
    transform: translateY(0);
}

iframe {
    border: 1px solid #cccccc;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.booklet-preview {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: 40px auto;
    padding: 20px;
    max-width: 800px;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.booklet-image-container {
    flex: 1;
    text-align: right;
}

.booklet-image {
    width: 60%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    margin-left: 50px;
}

.booklet-image:hover {
    transform: scale(1.05);
}

.booklet-content {
    flex: 2;
    max-width: 700px;
    text-align: left;
}

.booklet-description {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #444444;
    margin-bottom: 20px;
    padding: 0 10px;
}

</style>