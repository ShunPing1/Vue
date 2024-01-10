<script>
// import WeatherComponent from '@/components/customButton/WeatherComponent.vue';
import WeatherComponent from '@/components/customButton/WeatherComponent.vue';
import WeatherSlot from '@/components/customButton/WeatherSlot.vue';

export default {
    components: {
        WeatherComponent,
        WeatherSlot,
    },
    data() {
        return {
            weatherAPI: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-2497FEFB-378D-4EE8-B9BE-C99ACEB8E680',
            catchData: [],
            // place:['北部','中部','南部','東部','離島']
            place: [
                {   
                    id:1,
                    name:'全台',
                },
                {   
                    id:2,
                    name:'北部',
                },
                {   
                    id:3,
                    name:'中部',
                },
                {   
                    id:4,
                    name:'南部',
                },
                {   
                    id:5,
                    name:'東部',
                },
                {   
                    id:6,
                    name:'離島',
                }],
            
            placeID: 0,
            
        }
    },
    // 網頁載入時抓取API
    mounted() {
        fetch(this.weatherAPI)
            .then((response) => {
                return response.json();
            }).then((data) => {
                // console.log(data.records.location);
                this.catchData = data.records.location;
            });
    },
    // computed: {
    //     filterPlace(){
    //         return if(){

    //         }
    //     }
    // },
    methods: {
        showData() {
            console.log('weather data:', this.catchData[0]);
        },
    },
}
</script>
<template lang="">
    <div class="flex gap-[5px]">
        <div v-for="item in place" :key="item.id" class="hover:bg-[#9bdff0]">
            <WeatherSlot :place-btn="item" @click="place = item.id"></WeatherSlot>
        </div>
    </div>
    <div v-for="item in catchData" :key="item.id" >
        <WeatherComponent :weather-data="item">
        </WeatherComponent>
    </div>

</template>
<style lang="">
    
</style>