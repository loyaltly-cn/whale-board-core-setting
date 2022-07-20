<template>
  <uni-notice-bar scrollable showIcon  :showGetMore="true" background-color="#eaf2ff" color="#2979ff" moreColor="#2979ff" single :text="bar_text"/>
  <view class="main">
    <view class="element">
      <text>
        值:{{shape}}
      </text>
      <button :loading="load" type="primary" size="mini" plain style="margin-top: 50%" @click="submit()">
        <text>
          保存
        </text>
      </button>
    </view>
  </view>
</template>

<script setup>
import {getCurrentInstance, ref} from "vue";
import {onLoad, onUnload} from "@dcloudio/uni-app";
  uni.showLoading({
    title:'加载中...'
  })
  const {proxy} = getCurrentInstance()
  const[bar_text] = ['请使用物体触摸屏幕获取面积']
  let [shape,load,name,ip] = [ref(0),ref(false),'','']

  onLoad((res) => name = res.name)

  onUnload(() => uni.closeSocket())

  try {
    ip = uni.getStorageSync('ip')
  }catch (e){
    console.log(e)
  }

  const ws = 'ws://'+ip+'/loyal'

  uni.connectSocket({url:ws})

  uni.onSocketError((res) =>{
    console.log(res)
  })

  uni.onSocketOpen(() => uni.hideLoading())

  uni.onSocketMessage((res) =>{
    const hex =  Array.prototype.map.call(new Uint8Array(res.data), x => ('00' + x.toString(16)).slice(-2)).join('')
    shape.value = proxy.$convert(hex.substring(proxy.$shape[0],proxy.$shape[1]))
  })

  const submit = () =>{
    load.value = true
    if (shape.value){
      update()
    }else {
      load.value = false
      uni.showToast({
        title:'请触摸屏幕',
        icon:'error'
      })
    }
  }

  const update = () =>{
    const data = {
      type:'shape',
      name:name,
      data:shape.value
    }
    const update = 'http://'+ip+':2333/update'
    uni.request({
      url:update,
      method:'POST',
      data:data,
      success:() =>{
        load.value = false
        uni.showToast({
          title:'ok',
          icon:'success',
          success:() =>{
            uni.navigateBack()
          }
        })
      }
    })
  }
</script>

<style scoped>
  .main{
    display: flex;
    justify-content: center;
    margin-top: 50%;
  }

  .element{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

</style>
