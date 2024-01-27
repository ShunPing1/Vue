<template lang="">
  <div>
    <img src="../assets/image/" alt="">
    <picture>
      
        <source media="(min-width:1800px)" srcset="@/assets/image/cloudy.jpg">
        <source media="(min-width:1200px)" srcset="@/assets/image/rainy.jpg">
        <source media="(min-width:768px)" srcset="@/assets/image/sun.jpeg">
        <source media="(min-width:0px)" srcset="@/assets/image/sunny.webp">
        <img src="@/assets/image/sunny.webp" alt="Weather">
    </picture>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="">
  
</style>