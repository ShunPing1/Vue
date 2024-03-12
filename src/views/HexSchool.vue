<template lang="">
    <div>
        <h1>代辦清單</h1>
        <input type="text" v-model="textContent" 
        placeholder="請輸入代辦事項：" @keyup.enter="addContent(textContent)">
        <ul>
            <li v-for="(item,index) in contentArr" class="checkItem" :key="item.id">
                <input type="checkbox"  @click="finish(index)" :data-id="listId">
                {{ item.listContent }}
                <button @click="deleteContent(item)">  刪除</button>
            </li>
        </ul>

        <br>
        <hr>
        <h1>匯率計算</h1>
        <input type="number"  placeholder="請輸入新台幣金額：" v-model="ntw">
        <p>換算成美金為：{{ calc(ntw / 31.3) }}元</p>
        <p>換算成日幣為：{{ calc(ntw / 0.21) }}元</p>
        <p>換算成人民幣為：{{ calc(ntw / 4.3) }}元</p>
        <p>換算成歐元為：{{ calc(ntw / 34.1) }}元</p>



    </div>
</template>
<script>
export default {
    data() {
        return {
            // todolist
            contentArr: [],
            textContent: '',
            finishState: false,
            // listId測試用
            listId: 0,

            //exchange rate
            ntw: null,
        }
    },
    methods: {
        // todolist
        addContent(content){
            // listId測試用
            this.listId++;
            this.contentArr.push({
                listContent: content,
                id: this.listId,
                compueted: false,
             });
            this.textContent = '';
        },
        deleteContent(content){
            // 使用splice搭配indexOf達到刪除指定陣列的功能
            this.contentArr.splice(this.contentArr.indexOf(content),1)
        },
        // 必須以外部參數(itemIndex)帶入
        finish(itemIndex){
            const checkItems = document.querySelectorAll('.checkItem');
            this.contentArr[itemIndex].finishState = !this.contentArr[itemIndex].finishState;
            if (this.contentArr[itemIndex].finishState) {
                checkItems[itemIndex].classList.add('finish');
            }else{
                checkItems[itemIndex].classList.remove('finish');
            }
        },

        //exchange rate
        calc(result){
           if(result < 0) return;
           return result.toFixed(4);
        }
    },
}
</script>
<style lang="scss" scoped>
    input{
        @apply border-2 border-[#555];
    }
    button{
        @apply bg-[#ccc];
    }
    .finish{
        text-decoration: line-through;
    }
</style>