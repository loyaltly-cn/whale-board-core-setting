<template>
  <view class="main">
    <input class="uni-input" @input="change" placeholder="请输入设备ip" type="number" :value="value" />
    <uni-icons @click="connect" color="blue" type="arrow-right" size="30"/>
  </view>
</template>

<script setup>
  import {ref} from "vue";

  const value = ref('192.168.31.86')
  let ip = ref(value)
  //我为什么这么写？ 别问 问就是吊文档没写绑定的props
  const change = e => ip.value = e.detail.value

  const connect = () =>{
    uni.showLoading({
      title:'连接中'
    })
    const url = 'http://'+ip.value+':2333/connect'
    uni.request({
      url:url,
      success:(res) =>{
        uni.hideLoading()
        uni.showToast({
          title:'连接成功',
          icon:'success',
          success:() =>{
            uni.reLaunch({
              url:'home'
            })
          }
        })
      },
      fail:() =>{
        console.error('ip错误或服务未启动')
        uni.hideLoading()
        uni.showToast({
          title:'连接失败',
          icon:'error'
        })
      }
    })
  }
</script>

<style >
  .main{
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 50%;
    /*margin:100px 20px auto 20px;*/
  }
  .uni-input{
    height: 10px;
    border-bottom: 2px solid blue;
  }
</style>
