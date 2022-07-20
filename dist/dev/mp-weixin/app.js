"use strict";
var common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/connect.js";
  "./pages/index.js";
  "./pages/select.js";
  "./pages/key.js";
  "./pages/shape.js";
}
const _sfc_main = {};
var App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/project/uniapp/core-setting/src/App.vue"]]);
const app = common_vendor.createApp(App);
app.config.errorHandler = (err, vim, info) => {
  console.error("\u8FD9\u91CC\u662Fwx ide\u62A5\u9519 \u4E0D\u5F71\u54CD \u6240\u4EE5\u88AB\u6211\u6355\u83B7\u4E86 so origin info:" + info);
};
app.config.globalProperties.$icon_prefix = "icon-";
app.config.globalProperties.$x = [0, 4];
app.config.globalProperties.$y = [4, 8];
app.config.globalProperties.$shape = [8, 12];
app.config.globalProperties.$convert = (hex) => {
  let len = hex.length, a = new Array(len), code;
  for (let i = 0; i < len; i++) {
    code = hex.charCodeAt(i);
    if (48 <= code && code < 58) {
      code -= 48;
    } else {
      code = (code & 223) - 65 + 10;
    }
    a[i] = code;
  }
  return a.reduce((acc, c) => {
    acc = 16 * acc + c;
    return acc;
  }, 0);
};
app.mount("#app");
