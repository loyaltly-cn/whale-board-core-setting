"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  setup(__props) {
    const value = common_vendor.ref("192.168.31.86");
    let ip = common_vendor.ref(value);
    const change = (e) => ip.value = e.detail.value;
    const connect = () => {
      common_vendor.index.showLoading({
        title: "\u8FDE\u63A5\u4E2D"
      });
      const url = "http://" + ip.value + ":2333/connect";
      common_vendor.index.request({
        url,
        success: (res) => {
          common_vendor.index.hideLoading();
          common_vendor.index.showToast({
            title: "\u8FDE\u63A5\u6210\u529F",
            icon: "success",
            success: () => {
              common_vendor.index.reLaunch({
                url: "home"
              });
            }
          });
        },
        fail: () => {
          console.error("ip\u9519\u8BEF\u6216\u670D\u52A1\u672A\u542F\u52A8");
          common_vendor.index.hideLoading();
          common_vendor.index.showToast({
            title: "\u8FDE\u63A5\u5931\u8D25",
            icon: "error"
          });
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(change),
        b: value.value,
        c: common_vendor.o(connect),
        d: common_vendor.p({
          color: "blue",
          type: "arrow-right",
          size: "30"
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/project/uniapp/core-setting/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
