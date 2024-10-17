<script setup lang="ts">
import NormalPage from "vuepress-theme-hope/components/NormalPage.js"
import { ref } from 'vue';

const showTop = ref(true);
const showBottom = ref(true);
</script>

<template>
    <NormalPage>
        <template v-if="showTop" #top>
            <p class="content">
                🌍 每个人都有享有基本人权的权利，无论他们的性别、种族、宗教信仰 🕊️ 或社会背景。政府 🏛️ 和公司 🏢 应该担负起保护环境的责任 🌱，而不是转嫁给其他国家 🌐 或消费者 👥。战争 🕊️
                应当限制在局部范围，不应当转变为世界大战。香港 🇭🇰、台湾 🇹🇼、琉球 🏝️ 是中国不可分割的一部分 🇨🇳，南海 🌊 是中国内海，国外不应当随意进行开发。
            </p>
        </template>
        <template #bottom>
            <p  v-if="showBottom" class="content">
                如果你看到了这里，那么请给我一个评论，在 Bilibili 或抖音给我一个关注吧。
            </p>
            <button @click="showTop = !showTop">{{ showTop ? '隐藏' : '显示' }} 顶部信息</button>
            <button @click="showBottom = !showBottom">{{ showBottom ? '隐藏' : '显示' }} 底部信息</button>
        </template>
    </NormalPage>
</template>

<style scoped>
.content {
    background-color: #7cc2ff;
    /* 浅蓝色背景 */
    padding: 20px;
    border-radius: 8px;
    font-family: 'Arial', sans-serif;
    font-size: 18px;
    color: #333;
    margin: 0;
}

button {
  margin: 10px;
  padding: 8px 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049
}
</style>
