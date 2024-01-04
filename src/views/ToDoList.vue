<!-- 1.可以輸入文字的輸入框
2.可以標記的checkbox
3.可以刪除的button
4.可以儲存的button
-->

<script>
import Swal from 'sweetalert2'


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
      endTime: '',
    };
  },
  // 載入網頁時就執行的函式
  mounted() {
    if (sessionStorage.getItem('toDoList')) {
      this.toDoListArr = JSON.parse(sessionStorage.getItem('toDoList'));
    } else {
      sessionStorage.setItem('toDoList', JSON.stringify(this.toDoListArr));

    }
  },
  methods: {
    addList() {

      Swal.fire({
        title: "確認是否輸入",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "確認",
        cancelButtonText: "取消",
      }).then((result) => {
        if (result.isConfirmed) {

          let date = new Date().toISOString().split('T');
          console.log(date[0]);
          if (!this.addText || !this.endTime) {
            return Swal.fire({
              title: "請輸入事項以及結束日期",
              icon: "error"
            });
          }
          const contentId = this.toDoListArr.length;
          this.toDoListArr.push({
            id: contentId + 1,
            toDo: this.addText,
            checkThis: false,
            logTime: date[0],
            endTime: this.endTime,

          });
          this.addText = '';
          sessionStorage.setItem('toDoList', JSON.stringify(this.toDoListArr));

          Swal.fire({
            title: "輸入成功",
            icon: "success"
          });
        }
      });

    },
    // 刪除功能
    deleteList(id) {
      Swal.fire({
        title: "是否要刪除事項",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "確認",
        cancelButtonText: "取消",
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(id);
          // 使用filter儲存點選id的其它結果
          const deleteResult = this.toDoListArr.filter(item => item.id !== id);
          this.toDoListArr = deleteResult;
          console.log(deleteResult);
          // 將原本toDoListArr的暫存資料改為deleteResult
          sessionStorage.setItem('toDoList', JSON.stringify(this.toDoListArr)) 

          Swal.fire({
            title: "刪除成功",
            icon: "success"
          });
        }
      });


    },
  },
};

</script>

<template>
  <!-- 在使用漸層色的時候，要注意色調有要連續性 -->

  <div
    class="w-full h-[100vh] bg-gradient-to-b from-indigo-300 via-purple-300 to-pink-500 flex items-center justify-center font-big">
    <!-- 進度條 -->
    <div class="w-[70%] bg-white rounded-md pt-2">
      <div class="w-[60%] border-[2px] border-[#000] rounded-full overflow-hidden m-auto">
        <div class="w-[20%] h-[20px] rounded-full bg-gradient-to-r from-[#0fa] to-[#0af]"></div>
      </div>
      <div class="flex items-center justify-center border-b-2 gap-5">
        <input v-model="addText" type="text" class="w-full h-10 ml-3 border-2" placeholder="請填寫事項">
        <input type="date" v-model="endTime">
        <button class="bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 p-3 rounded-xl m-3 text-white text-xl"
          type="button" @click="addList()"><font-awesome-icon :icon="['fas', 'file-import']" /></button>
      </div>
      <div class="overflow-y-scroll h-[200px]">
        <div class="lists flex items-center border-b-2">
          <span class="list flex-[1] text-center">選取</span>
          <span class="list flex-[3] text-center">清單內容</span>
          <span class="list flex-[2] text-center">開始日期</span>
          <span class="list flex-[2] text-center">結束日期</span>
          <span class="list flex-[1] text-center">刪除</span>
        </div>
        <div v-for=" item in toDoListArr" :key="item.id" class="flex items-center justify-between gap-5 border-b-2"
          :class="{ 'text-[#faa]': item.checkThis }">
          <input class="ml-[30px]" type="checkbox" v-model="item.checkThis">
          <div class="w-[200px] overflow-x-scroll">{{ item.toDo }}</div>
          <div>{{ item.logTime ?? '' }}</div>
          <div>{{ item.endTime }}</div>
          <button button class="bg-gradient-to-b from-red-500  to-orange-500 p-3 rounded-xl m-3 text-white" type="button"
            @click="deleteList(item.id)"><font-awesome-icon :icon="['fas', 'trash-can']" /></button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped="scss"></style>