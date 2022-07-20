<template>
  <view class="main">
    <view v-for="item in list">
      <view class="element" @click="select(item)" >
        <uni-icons class="icon" custom-prefix="loyal" :type="proxy.$icon_prefix+item.value" size="30"/>
        <text >配置{{item.name}}</text>
        <uni-icons type="forward"/>
      </view>
    </view>
  </view>
</template>

<script setup>
  import {list} from "../static/select";
  import {getCurrentInstance} from "vue";
  const {proxy} = getCurrentInstance()

  uni.hideHomeButton()

  const select = (item) =>{
    uni.setStorage({
      key:'item',
      data:item,
      success:() =>{
        uni.navigateTo({
          url:'select'
        })
      }
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
