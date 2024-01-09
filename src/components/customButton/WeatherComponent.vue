<script>
export default {
    props:{
        weatherData:{
            type:Object,
        }
    },

    
    methods: {
        showArray(){
            console.log(this.weatherData);
        }
    },

}
</script>
<template lang="">
    <div v-for="item in weatherData" :key="item.id" @click="showArray">111</div>
</template>
<style lang="">
    
</style>