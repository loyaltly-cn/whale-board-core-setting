"use strict";
var common_vendor = require("../../common/vendor.js");
var static_select = require("../../static/select.js");
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
    const icon_prefix = "icon-";
    const select = (item) => {
      console.log(item);
      common_vendor.index.navigateTo({
        url: "select?param=" + item
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(static_select.list), (item, k0, i0) => {
          return {
            a: "1badc801-0-" + i0,
            b: common_vendor.p({
              ["custom-prefix"]: "loyal",
              type: icon_prefix + item.value,
              size: "30"
            }),
            c: common_vendor.t(item.name),
            d: "1badc801-1-" + i0,
            e: common_vendor.o(($event) => select(item))
          };
        }),
        b: common_vendor.p({
          type: "forward"
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1badc801"], ["__file", "C:/project/uniapp/core-setting/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
