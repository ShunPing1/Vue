<template lang="">
  
  <div>
    <p class="text-[50px]">測試頁</p>
    <picture>
        <source media="(min-width:1800px)" srcset="@/assets/image/longer_test/1800.png">
        <source media="(min-width:1200px)" srcset="@/assets/image/longer_test/1280.png">
        <source media="(min-width:768px)" srcset="@/assets/image/longer_test/768.png">
        <source media="(min-width:0px)" srcset="@/assets/image/longer_test/375.png">
        <img src="@/assets/image/longer_test/375.png" alt="Weather">
    </picture>
  </div>
</template>
<script>
// import longer01 from "@/assets/image/longer_test/1800.png";
export default {
  data() {
    return {

    }
  },
}
</script>
<style lang="">
  
</style>