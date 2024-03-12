<script>
import { RouterLink, RouterView } from 'vue-router';
import background from '@/assets/image/desert.jpg';
import { event } from 'jquery';

export default {
  // 元件宣告
  components: {
    RouterView,RouterLink
  },
  data() {
    return {
      background,
      check: false,
      // hamIng: false,
      links:[
        {
          path: "/",
          tap: 'Home',
        },
        {
          path: "/about",
          tap: 'About',
        },
        {
          path: "/calc",
          tap: 'Calc',
        },
        {
          path: "/todolist",
          tap: 'todolist',
        },
        {
          path: "/weathercard",
          tap: 'WeatherCard',
        },
        {
          path: "/hexschool",
          tap: '六角學院練習題',
        },
        
      ],

    }
  },
  methods: {
    menuSwitck(){
      this.hamIng = !this.hamIng;
      console.log(this.hamIng);
    },
    menuClose(e){
      if (this.hamIng == true) {
        console.log(e.target);
        if (!e.target) {
          console.log('nono');
          this.hamIng = false
        }
      }
    },

  },
}
</script>

<template>
  <!-- 觀察你的設計稿 把共用的部分放在此頁面 -->
  <header>
      <RouterLink :to="link.path" class="link" v-for="link in links" :key="link.id" >{{ link.tap }}</RouterLink>
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
  @apply flex items-end gap-[10px] w-full h-[60px] fixed bg-[#aaa] sm:relative;

  #menu:checked ~ nav{
    @apply h-[500px];
  }

  nav {
    @apply sm:w-[30vw] h-0 absolute top-[120px] flex justify-center flex-wrap bg-[#aaf] truncate duration-[2s];

    a {
      @apply hover:bg-[#faa] focus:bg-[#000];
    }
  }
}
.router-link-active{
  @apply bg-[#fff]
}

// main {
//   @apply pt-[120px];
// }
</style>