<template>
<div class="row-container" style="background-color: '#000';">
  <iframe :src=location width="600" height="450" frameborder="0" style="border:0;"
    aria-hidden="false" tabindex="0"></iframe>
</div>
</template>

<script>

export default {
  name: 'Map',
  data: () => ({
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41845.80683932618!2d-122.32677578384222!3d47.5678110538151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20WA!5e0!3m2!1sen!2sus!4v1600648346035!5m2!1sen!2sus',
  }),
};
</script>

<style scoped>
  iframe {
    height: 85vh;
    width: 100vw;
    box-sizing: border-box;
  }
</style>
