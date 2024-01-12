<script>
// import cloud from '@/assets/Image/cloudy.jpg';
export default {
    props: {
        weatherData: {
            type: Object,
        }
    },

    data(){
    return{
      sun: '../../assets/image/sun.jpeg',
      sunny: '../../assets/image/sunny.webp',
      cloudy: '../../assets/image/cloudy.jpg',
      rainy: '../../assets/image/rainy.jpg',

    }
  },

    methods: {
        showArray() {
            console.log(this.weatherData.weatherElement);
            console.log(this.imageUrl);
        }
    },

}
/*
 備忘:
 天氣概況:this.weatherData.weatherElement[0].time[0].parameter.parameterName
 降雨機率:this.weatherData.weatherElement[1].time[0].parameter.parameterName
 最低溫度:this.weatherData.weatherElement[2].time[0].parameter.parameterName
 體感:this.weatherData.weatherElement[3].time[0].parameter.parameterName
 最高溫度:this.weatherData.weatherElement[4].time[0].parameter.parameterName
*/
</script>
<template lang="">
    <!-- <div @click="showArray">test</div> -->
    <!-- :style="`background-image: url(${imageUrl})`" -->
    <!-- <img src='../../assets/image/rainy.jpg' alt=""> -->
    <div class="container w-[800px] p-[10px] bg-[#aaf]" :class="`bg-[url(${cloudy})]`">
    <!-- <div class="container w-[800px] p-[10px] bg-[#aaf] bg-[url('../../assets/image/rainy.jpg')]"> -->
        <div class="text-[30px] text-center">{{ weatherData.locationName }}</div>
        <div class="flex justify-around p-[20px]">
            <span>{{ this.weatherData.weatherElement[0].time[0].parameter.parameterName }}</span>
            <span>降雨機率：{{ this.weatherData.weatherElement[1].time[0].parameter.parameterName }}%</span>
            <span>
                溫度：{{ this.weatherData.weatherElement[2].time[0].parameter.parameterName }}
                ~{{ this.weatherData.weatherElement[4].time[0].parameter.parameterName }}
            </span>
            <span>體感：{{ this.weatherData.weatherElement[3].time[0].parameter.parameterName }}</span>
        </div>

    </div>
        
    
</template>
<style scoped>
    .container{
        /* background-image: url('../../assets/image/cloudy.jpg'); */
        border-bottom: 3px solid #555;
        background-position: center;
    }
</style>