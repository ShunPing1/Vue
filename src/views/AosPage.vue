<template>
    <div>
      <div v-if="showA" class="a-object text-[#f00]">A物件</div>
      <div class="content h-[2000px]">這是一個很長的內容...</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showA: false
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll() {
        const aObject = document.querySelector('.a-object')
        const content = document.querySelector('.content')
        const aObjectTop = aObject.offsetTop
        const contentBottom = content.offsetTop + content.offsetHeight
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  
        if (scrollTop >= aObjectTop && scrollTop <= contentBottom) {
          this.showA = true
        } else {
          this.showA = false
        }
      }
    }
  }
  </script>
  
  <style>
  .a-object {
    display: none;
  }
  </style>