<template>
  <div>
    <div ref="objectA" @click="scrollToB" class="w-[200px] h-[200px] bg-[#faa]">A</div>
    <div class="longContent h-[3000px]"></div>
    <div ref="objectB" class="w-[200px] h-[200px] bg-[#aaf]">B</div>
    <div class="long h-[1000px]"></div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToB() {
      const bElement = this.$refs.objectB;
      bElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
};
</script>