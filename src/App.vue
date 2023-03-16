<template>
  <div class="theme-container">
    <button class="btn" @click="handleChangeTheme">切换主题</button>
    <h1 @click="appStore.increment()">{{appStore.count}}</h1>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {useAppStore} from "@/store/app"
import {useCache} from '@/hooks/useCache'
const appStore = useAppStore();
const bol=ref<Boolean>(false)
  const {wsCache}=useCache('localStorage')
// 设置缓存，第三个参数对象配置的超时事件
wsCache.set('login',true,{exp : 100})
// 获取缓存
wsCache.get('login')

const handleChangeTheme=()=>{
  bol.value=!bol.value
  if(bol.value){
    document.documentElement.className = 'dark';
  }else{
    document.documentElement.className = '';
  }
}
</script>

<style lang="scss" scoped>
.theme-container{
  width: 100vw;
  height: 100vh;
  background: var(--theme-bg-color);
  .btn{
    color: var(--btn-color);
  }
}
</style>