const pluginConf = require('./config/pluginConf.js');
const navConf = require('./config/navConf.js');
const headConf = require('./config/headConf.js');
module.exports = {
  lang: 'zh-CN',
  port: "6004",
  title: "TinsFox's blog",
  description: 'TinsFox 的博客',
  lastUpdated: 'Last Updated',
  head: headConf,
  plugins: pluginConf,
  base: process.env.NODE_ENV == 'development' ? "/" : "/blog/",
  themeConfig: {
    repo: 'https://github.com/TinsFox/blog',
    repoLabel: 'Github',
    lastUpdated: '上次更新',
    repo: 'TinsFox/blog',
    editLinks: true,
    editLinkText: '帮助我改善此页面！',
    docsDir: 'docs',
    docsBranch: "main",
    nav: navConf
  },
  markdown: {
    lineNumbers: true
  }
}
