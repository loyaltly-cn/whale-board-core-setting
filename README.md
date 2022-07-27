# 核心板配置 小程序
## uniapp vite2 + uni ui + vue3 setup + es6规范

## 虚拟键 x y 形状 所占的字节位 写在main.js中

```js
app.config.globalProperties.$icon_prefix = 'icon-'
app.config.globalProperties.$x = [0,4]
app.config.globalProperties.$y = [4,8]
app.config.globalProperties.$shape = [8,12]
```

## project implementation process
- connect.vue 获取ip 之后会向flask 发送http 以确保ip 的正确
- 选择对应选项的配置 在选择具体配置时会建立 socket connect -->key.uve && shape.vue
```js
  const ws = 'ws://'+ip+'/loyal'

  uni.connectSocket({url:ws})
```
- 根据 tips 完成对应操作会将数据post至flask进行保存
```js
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
``` 

## live implementation process
- connect ws 
- ws res convert
- insert fifo
- `live flge = true`

## tips
- icon 由iconfont制作生成 文件在/static下 iconfont.css && iconfont.ttf
- 未写 核心板 与 ws server 之间的断开操作 重启会自动断开连接 可在ws server 中使用 RestTemplate 进行优化 
- 所有选项配置都在select.js 中 shape name 对应 core.json 的 type name 
