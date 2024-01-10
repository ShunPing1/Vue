<script>
export default {
    props:{
        weatherData:{
            type:Object,
        }
    },

    
    methods: {
        showArray(){
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
    <div  class="border-[#000] border-[2px]" @click="showArray">
        <table>
            <tr>
                <td>{{ weatherData.locationName }}</td>
                <!-- <td>{{item.weatherElement[0]}}</td> -->
            </tr>
        </table>
    
    </div>
</template>
<style lang="">
    
</style>