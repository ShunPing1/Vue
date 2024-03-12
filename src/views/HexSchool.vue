<template lang="">
    <div>
        <h1>代辦清單</h1>
        <input type="text" v-model="textContent"
        @keyup.enter="addContent(textContent)">
        <ul>
            <li v-for="item in contentArr" :key="item.id">
                {{ item.listContent }}
                <button @click="deleteContent(item)">  刪除</button>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            contentArr: [],
            textContent: '',
        }
    },
    methods: {
        addContent(content){
            this.contentArr.push({listContent: content});
            this.textContent = '';
        },
        deleteContent(content){
            this.contentArr.splice(this.contentArr.indexOf(content),1)
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
</style>