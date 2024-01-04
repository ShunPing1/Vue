<template lang="">
    <div>
        <input type="file" accept=".jpg,.png" @change="picFile">
        <button type="button">上傳圖片</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            picFile:'',
        }
    },
    methods: {
        picFile(){

        }
    },
}
</script>
<style lang="">
    
</style>