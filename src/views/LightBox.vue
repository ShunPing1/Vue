<script>
import lightbox from 'lightbox2';
export default {
    mounted() {
        lightbox.option({
            'resizeDuration': 500,
            'wrapAround': true
        });
    }
}
</script>
<template>
    <div>
        <a class="example-image-link" href="../assets/image/cloudy.jpg" data-lightbox="example-1">
            <img class="example-image" src="../assets/image/cloudy.jpg" alt="image-1" />
        </a>

    </div>
  </template>
<style lang="">
    
</style>