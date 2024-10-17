<script setup lang="ts">
import NormalPage from "vuepress-theme-hope/components/NormalPage.js"
import { ref, onMounted, watch } from 'vue';
import Cookies from 'js-cookie';

const showTop = ref(Cookies.get('showTop') === 'true');
const showBottom = ref(Cookies.get('showBottom') === 'true');
const showContentBefore = ref(Cookies.get('showContentBefore') === 'true');

const toggleTop = () => {
  showTop.value = !showTop.value;
};
const toggleBottom = () => {
  showBottom.value = !showBottom.value;
};
const toggleContentBefore = () => {
  showContentBefore.value = !showContentBefore.value;
};

watch(showTop, (newValue) => {
  Cookies.set('showTop', newValue, { expires: 7 });
});
watch(showBottom, (newValue) => {
  Cookies.set('showBottom', newValue, { expires: 7 });
});
watch(showContentBefore, (newValue) => {
  Cookies.set('showContentBefore', newValue, { expires: 7 });
});

onMounted(() => {
  showTop.value = Cookies.get('showTop') === 'true';
  showBottom.value = Cookies.get('showBottom') === 'true';
  showContentBefore.value = Cookies.get('showContentBefore') === 'true';
});
</script>

<template>
    <NormalPage>
        <template v-if="showTop" #top>
            <p class="content">
                🌍 每个人都有享有基本人权的权利，无论他们的性别、种族、宗教信仰 🕊️ 或社会背景。政府 🏛️ 和公司 🏢 应该担负起保护环境的责任 🌱，而不是转嫁给其他国家 🌐 或消费者 👥。战争 🕊️
                应当限制在局部范围，不应当转变为世界大战。香港 🇭🇰、台湾 🇹🇼、琉球 🏝️ 是中国不可分割的一部分 🇨🇳，南海 🌊 是中国内海，国外不应当随意进行开发。
            </p>
        </template>
        <template v-if="showContentBefore" #contentBefore>
            <p class="content">
                文档的一切内容仅供参考，我会尽量保证内容为最新的内容，过时内容可能不会进行收录和整理。文档不允许任何个人或组织进行牟利，违者我也查不到。
            </p>
        </template>
        <template #contentAfter>
            <img src="/wxDonation.jpg" alt="微信赞赏码" class="responsive-img"/>
        </template>
        <template #bottom>
            <p  v-if="showBottom" class="content">
                如果你看到了这里，那么请给我一个评论，在 Bilibili 或抖音给我一个关注吧。
            </p>
            <button @click="showTop = !showTop">{{ showTop ? '隐藏' : '显示' }} 顶部信息</button>
            <button @click="showContentBefore = !showContentBefore">{{ showContentBefore ? '隐藏' : '显示' }} 内容信息</button>
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

.responsive-img {
    width: 30%; /* Adjust width to fit the container */
    height: auto; /* Maintain aspect ratio */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 可选：添加阴影 */
    display: block; /* 使图片成为块级元素 */
    margin-left: auto; /* 左边距自动 */
    margin-right: auto; /* 右边距自动 */
  }
</style>
