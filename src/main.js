import {createApp} from "vue";
import App from "./App.vue";

const app = createApp(App);

app.config.errorHandler = (err,vim,info) =>{
	console.error("这里是wx ide报错 不影响 所以被我捕获了 so origin info:"+info)
}

app.config.globalProperties.$icon_prefix = 'icon-'
app.config.globalProperties.$x = [0,4]
app.config.globalProperties.$y = [4,8]
app.config.globalProperties.$shape = [8,12]

app.config.globalProperties.$convert = (hex) =>{
	let len = hex.length, a = new Array(len), code;
	for (let i = 0; i < len; i++) {
		code = hex.charCodeAt(i);
		if (48<=code && code < 58) {
			code -= 48;
		} else {
			code = (code & 0xdf) - 65 + 10;
		}
		a[i] = code;
	}

	return a.reduce((acc, c) =>{
		acc = 16 * acc + c;
		return acc;
	}, 0);
}

app.mount('#app')
