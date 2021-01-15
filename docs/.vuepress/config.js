/*
 * @Author: TinsFox
 * @Date: 2021-01-12 09:05:36
 * @LastEditors: TinsFox
 * @LastEditTime: 2021-01-15 12:51:13
 * @Description:
 */
const pluginConf = require('./config/pluginConf.js');
const navConf = require('./config/navConf.js');
const headConf = require('./config/headConf.js');
module.exports = {
  title: '前端',
  description: '',
  lastUpdated: 'Last Updated',
  head: headConf,
  plugins: pluginConf,
  themeConfig: {
    repo: 'https://github.com/TinsFox/blog',
    repoLabel: 'Github',
    lastUpdated: '上次更新',
    repo: 'TinsFox/blog',
    editLinks: true,
    editLinkText: '编辑文档！',
    docsDir: 'docs',
    nav: navConf
  },
  markdown: {
    lineNumbers: true
  }
}
