<template>
  <div>
    <Navbar />
    <div id="content">
      <section>
        <Countdown />
      </section>
      <section>
        <Timeline />
      </section>
      <section>
        <Collaboration />
      </section>
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Countdown from '@/components/countdown.vue'
import Timeline from '@/components/timeline.vue'
import Collaboration from '@/components/collaboration.vue'

</script>
