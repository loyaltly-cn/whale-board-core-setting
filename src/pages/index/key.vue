<template>
  <view class="main">
    <view v-for="item in key">
      <view class="element" @click="select(item.value)" >
        <uni-icons class="icon" custom-prefix="loyal" :type="icon_prefix+item.value" size="30"/>
        <text >{{item.name}}</text>
        <uni-icons type="forward"/>
      </view>
    </view>
  </view>
</template>

<script setup>

  import {list} from "../../static/select";
  const icon_prefix = 'icon-'
  const key = list[0].values

  const select = (value) =>{
    console.info(value)
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
