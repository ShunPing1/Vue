<script>
export default {
    props: {
        weatherData: {
            type: Object,
        }
    },


    methods: {
        showArray() {
            console.log(this.weatherData.weatherElement);
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
    <div @click="showArray">
        
            <div class="w-[800px] bg-[#aaf]">
                <div class="text-[30px] text-center">{{ weatherData.locationName }}</div>
                <div class="flex justify-around">
                    <span>{{ this.weatherData.weatherElement[0].time[0].parameter.parameterName }}</span>
                    <span>降雨機率：{{ this.weatherData.weatherElement[1].time[0].parameter.parameterName }}%</span>
                    <span>
                        溫度：{{ this.weatherData.weatherElement[2].time[0].parameter.parameterName }}
                        ~{{ this.weatherData.weatherElement[4].time[0].parameter.parameterName }}
                    </span>
                    <span>體感：{{ this.weatherData.weatherElement[3].time[0].parameter.parameterName }}</span>
                </div>

            </div>
        
    </div>
</template>
<style scoped>
td {
    @apply border-[0px] border-[#000];
}
</style>