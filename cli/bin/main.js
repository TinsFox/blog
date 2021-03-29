#!/usr/bin/env node

const program = require('commander')
program.version(`version is ${require('../package.json').version}`)
  .description('uni-app 运行脚本')
  .alias('m')
  .usage('<command> [项目名称]')
  .command('init', '创建新项目')
  //自定义帮助信息
  .on('--help', function () {
    console.log('  Examples:')
    console.log('')
    console.log('$ app module moduleName')
    console.log('$ app m moduleName')
  })
program.parse(process.argv);
