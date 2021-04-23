const moment = require('moment');

moment.locale("zh-cn");

module.exports = {
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-cn', // 将会被设置为 <html> 的 lang 属性
    },
  '@vuepress/pwa': {
    serviceWorker: true,
    updatePopup: {
      message: "发现新内容可用.",
      buttonText: "刷新"
    }
  },
  '@vuepress/back-to-top': true,
  '@vuepress/medium-zoom': {
    selector: '.content__default img',
  },
  '@vuepress/last-updated': {
    transformer: (timestamp) => moment(timestamp).format('LLLL')
  },
  "vuepress-plugin-code-copy": {
    // selector: String,
    // align: String,
    // color: String,
    // backgroundTransition: Boolean,
    // backgroundColor: String,
    // successText: String
  },
  "vuepress-plugin-auto-sidebar": {
    titleMode: "uppercase",
    titleMap: {
      javascript: "JS 基础",
    },
    collapseList: [
      "/frontend/javascript/"
    ]
  }
};
