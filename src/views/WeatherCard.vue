<script>
import WeatherComponent from '@/components/customButton/WeatherComponent.vue';

export default {
    component:{
        WeatherComponent,
    },
    data(){
        return{
            weatherAPI: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-2497FEFB-378D-4EE8-B9BE-C99ACEB8E680',
            catchData: [],
        }
    },
    // 網頁載入時抓取API
    mounted(){
        fetch(this.weatherAPI)
        .then((response) => {
            return response.json();
        }).then((data) => {
            // console.log(data.records.location);
            this.catchData = data.records.location;
        });
    },
    methods: {
        showData(){
            console.log('weather data:',this.catchData);
        },
    },
}
</script>
<template lang="">
    <div>
        {{ showData() }}
        <WeatherComponent />
    </div>
</template>
<style lang="">
    
</style>