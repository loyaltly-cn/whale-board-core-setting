<template>
  <view class="main">
    <view v-for="item in list.values">
      <view class="element" @click="select(item)" >
        <uni-icons class="icon" custom-prefix="loyal" :type="proxy.$icon_prefix+item.value" size="30"/>
        <text >{{item.name}}</text>
        <uni-icons type="forward"/>
      </view>
    </view>
  </view>
</template>

<script setup>

import {getCurrentInstance, ref} from "vue";

  const {proxy} = getCurrentInstance()
  const [list] = [ref()]

  uni.getStorage({
    key:'item',
    success:(res) => list.value = res.data
  })


  const select = (name) => {
    const type = list.value.value
    uni.navigateTo({
      url:type+'?name='+name.value
    })
  }


</script>

<style scoped>
  .main{
    margin: 15px 15px;
    display: flex;
    flex-direction: column;
  }
  .element{
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
    border-bottom: #d6d9d9 solid 1px;
    align-items: center;
  }
  .icon{
    height: 40px;
  }
</style>
