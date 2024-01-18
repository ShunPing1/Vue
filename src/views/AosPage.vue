<template lang="">
    <div data-aos="fade-up" data-aos-duration="1000">
    这是一个使用aos.js的动画效果
    </div>  
</template>
<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
    mounted() {
        AOS.init();
    }
}

</script>
<style lang="">
    
</style>