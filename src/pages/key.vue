<template>
  <uni-notice-bar scrollable showIcon  :showGetMore="true" background-color="#eaf2ff" color="#2979ff" moreColor="#2979ff" single :text="bar_text"/>
  <view class="main">
    <view class="element">
      <text>
        <text class="text-tips">x</text> : <text class="text">{{x}}</text>
      </text>
      <text>
        <text class="text-tips">y</text> : <text class="text">{{y}}</text>
      </text>
      <button :loading="load" type="primary" size="mini" plain style="margin-top: 50%" @click="submit()">{{ button_text }}</button>
    </view>
  </view>
</template>

<script setup>
import {onLoad, onUnload} from "@dcloudio/uni-app";
import {getCurrentInstance, ref} from "vue";

  uni.showLoading({
    title:'加载中...'
  })

  let [bar_text,X,Y,x,y,ip,name,button_text,load] = ['配置虚拟按键需要虚拟按钮左上角和右下角两个点,请触摸会议板确定坐标绑定按键左上角位置,然后点击下一个对右下角完成配置',0,0,ref(0),ref(0),'','',ref('下一个'),ref(false)]
  const {proxy} = getCurrentInstance()

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
    x.value = proxy.$convert(hex.substring(proxy.$x[0],proxy.$x[1]))
    y.value = proxy.$convert(hex.substring(proxy.$y[0],proxy.$y[1]))
  })

  const submit = () =>{
    if (!(x.value && y.value)) {
      uni.showToast({
        title:'请触摸屏幕',
        icon:"error"
      })
      return
    }

    if (X && Y){
     const xx = [X,x.value]
     const yy = [Y,y.value]
     const data = {
       type:'key',
       name:name,
       data:{
         x:xx,
         y:yy
       }
     }

     const update = 'http://'+ip+':2333/update'
     load.value = true
     button_text.value = '保存中...'
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
    }else {
      X = x.value
      Y = y.value
      x.value = y.value = 0
      button_text.value = '保存配置'
    }
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

  .text{
    width: 100px;
    color: blue;
  }

  .text-tips{
    color: red;
  }
</style>

