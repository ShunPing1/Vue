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