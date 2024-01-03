<!-- 1.可以輸入文字的輸入框
2.可以標記的checkbox
3.可以刪除的button
4.可以儲存的button
-->

<script>
export default {
  data() {
    return {
      addText: '',
      toDoListArr: [
        {
          id: 1,
          toDo: '不要下雨',
          checkThis: false,
        },
      ],
    };
  },
  // 載入網頁時就執行的函式
  mounted() {
    if (sessionStorage.getItem('toDoList')) {
      this.toDoListArr = JSON.parse(sessionStorage.getItem('toDoList'));
    }else{
      sessionStorage.setItem('toDoList', JSON.stringify(this.toDoListArr));

    }
  },
  methods: {
    addList() {
      if (!this.addText) return;
      const contentId = this.toDoListArr.length;
      this.toDoListArr.push({
        id: contentId +1,
        toDo: this.addText,
        checkThis: false,

      });
      this.addText = '';
      sessionStorage.setItem('toDoList', JSON.stringify(this.toDoListArr));
    },
  },
};

</script>

<template>
  <!-- 在使用漸層色的時候，要注意色調有要連續性 -->

  <div
    class="w-full h-[100vh] bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center font-big">
    <div class="w-[70%] bg-white rounded-md">
      <div class="flex items-center justify-center border-b-2 gap-5">
        <input v-model="addText" type="text" class="w-full h-10 ml-3 border-2" placeholder="請填寫事項">
        <button class="bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 p-3 rounded-xl m-3 text-white text-xl"
          type="button" @click="addList()"><font-awesome-icon :icon="['fas', 'file-import']" /></button>
      </div>
      <div class="overflow-y-scroll h-[200px]">
        <div v-for=" item in toDoListArr" :key="item.id" class="flex items-center justify-between gap-5 border-b-2" :class="{'text-[#faa]' : item.checkThis}">
          <input class="ml-3" type="checkbox" v-model="item.checkThis">
          <span>{{ item.toDo }}</span>
          <button button class="bg-gradient-to-b from-red-500  to-orange-500 p-3 rounded-xl m-3 text-white"
            type="button"><font-awesome-icon :icon="['fas', 'trash-can']" /></button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped="scss"></style>