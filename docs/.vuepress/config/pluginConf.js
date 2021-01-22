/**
 * @name: pluginConf
 * @author: tinsfox
 * @date: 2021/1/12 下午1:48
 * @description：pluginConf
 * @update: 2021/1/12 下午1:48
 */
const moment = require('moment');

moment.locale("zh-cn");

module.exports = {
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
