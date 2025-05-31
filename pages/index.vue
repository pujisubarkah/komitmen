<template>
  <div>
    <Navbar />
    <div id="content" style="margin-top: 80px;">
      <section>
        <Countdown />
      </section>
      <section>
        <Timeline />
      </section>
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Countdown from '@/components/countdown.vue'
import Timeline from '@/components/timeline.vue'

</script>
