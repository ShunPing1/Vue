<script>
import { RouterView } from 'vue-router';
import background from '@/assets/image/desert.jpg';

export default {
  // 元件宣告
  components: {
    RouterView
  },
  data() {
    return {
      background,

    }
  },
}
</script>

<template>
  <!-- 觀察你的設計稿 把共用的部分放在此頁面 -->
  <header>
    <input type="checkbox" id="menu">
    <label for="menu">
      <div class="ham md:hidden text-[30px]">
        選單
      </div>
    </label>
    <nav>
      <a href="/">home</a>
      <a href="/about">about</a>
      <a href="/calc">calc</a>
      <a href="/todolist">todolist</a>
      <a href="/pickupload">PickUpload</a>
      <a href="/weathercard">WeatherCard</a>
      <a href="/aospage">AosPage</a>
      <a href="/lightbox">LightBox</a>
    </nav>
  </header>
  <main>
    <RouterView />
    <div class="calc text-[80px]">我來自公版</div>
    <div class="imgArea" :style="{ backgroundImage: `url(${background})` }"></div>
  </main>
  <footer>
  </footer>
</template>

<!-- scoped style只影響這支vue -->
<!-- <style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.imgArea{
  width: 200px;
  height: 200px;
  background-color: #faa;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
<style lang="scss" scoped>
header {
  @apply flex items-end w-full h-[120px] fixed bg-[#aaa] sm:relative;

  #menu:checked ~ nav{
    @apply h-[250px];
  }

  nav {
    @apply sm:w-[100px] h-0 absolute top-[120px] flex justify-center flex-wrap bg-[#aaf] truncate duration-[2s];

    a {
      @apply hover:bg-[#faa] sm:w-full;
    }
  }
}

main {
  @apply pt-[120px];
}
</style>