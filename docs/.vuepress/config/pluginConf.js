const moment = require('moment');

moment.locale("zh-cn");

module.exports = {
  '@vuepress/pwa': {
    serviceWorker: true,
    updatePopup: {
      message: "内容更新.",
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
