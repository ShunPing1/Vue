<template>
  <div v-if="change" class="text-[150px]" ref="container" @click="changeIng">
    change
  </div>
</template>

<script>
export default {
  data() {
    return {
      change: true,
    };
  },
  methods: {
    changeIng() {
      this.change = !this.change;
      console.log(this.change);
    },
    handleOutsideClick(event) {
      if (!this.$refs.container.contains(event.target)) {
        this.change = false;
        console.log('!change',this.change);
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.handleOutsideClick);
  },
  // beforeDestroy() {
  //   document.removeEventListener('click', this.handleOutsideClick);
  // },
};
</script>