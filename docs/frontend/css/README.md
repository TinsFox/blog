---
title: 前端-CSS
---

# 介绍

关于CSS的概念

<img src="https://pic.tinsfox.com/uPic/dc35c91eb2d64ca1aa829d2f070a2d6f~tplv-k3u1fbpfcp-zoom-1.image" alt="img" style="zoom:50%;" />

## @ 规则

1. **@charset**

   @charset 用户定义样式表使用的字符集。他必须是样式表中的第一个元素。如果有多个 @charset 被声明，只有第一个会被使用，而且不能在HTML元素或HTML页面的`<style>` 元素内使用

   对于字节编码，浏览器又一套识别顺序：

   - 文件开头的 Byte order mark 字符值，不过一般编辑器并不能看到文件头里的BOM值

   - HTTP 响应头里的 `content-type` 字段包含的 charset 所指定的值，比如:

     ```
     Content-Type: text/css; charset=utf-8
     ```

   - CSS 文件头定义的 @charset 规则置顶的编码

   - `<link>` 标签的charset 属性（在H5中废除）

   - 默认是 UTF-8

2. **@import**

   @import 用于告诉 CSS 引擎引入一个外部样式表。

   link 和 @import 都能导入样式文件，它们的区别在哪里？

   - link 是HTML 标签，除了等导入CSS外还能导入别的资源，比如图片、脚本、字体等，而@import 是CSS 的语法，只能用来导入CSS；
   - link 导入的样式会在页面加载时同时加载，而@import导入的样式需要等待页面加载完成后再加载；
   - link 没有兼容性问题，@import 不兼容 IE5以下；
   - link 可以通过操作JS 操作DOM动态引入样式表改变样式，而@import不可以

3. **@supports**

   @supports 用于查询特定的 CSS 是否生效，可以结合 not、and和or操作符进行后续的操作。

   ```css
   /* 如果支持自定义属性，则把 body 颜色设置为变量 varName 指定的颜色 */
   @supports (--foo: green) {
       body {
           color: var(--varName);
       }
   }
   ```

   ## 层叠性

   层叠样式表，这里的层叠怎么理解呢？其实它是 CSS 中的核心特性之一，用于合并来自多个源的属性值的算法。比如说针对某个 HTML 标签，有许多的 CSS 声明都能作用到的时候，那最后谁应该起作用呢？层叠性说的大概就是这个。

   针对不同源的样式，将按照如下的顺序进行层叠，越往下优先级越高：

   - 用户代理样式表中的声明(例如，浏览器的默认样式，在没有设置其他样式时使用)。
   - ~~用户样式表中的常规声明(由用户设置的自定义样式。由于 Chrome 在很早的时候就放弃了用户样式表的功能，所以这里将不再考虑它的排序。)~~。
   - 作者样式表中的常规声明(这些是我们 Web 开发人员设置的样式)。
   - 作者样式表中的 !important 声明。
   - ~~用户样式表中的 !important 声明S~~。

   理解层叠性的时候需要结合 CSS 选择器的优先级以及继承性来理解。比如针对同一个选择器，定义在后面的声明会覆盖前面的；作者定义的样式会比默认继承的样式优先级更高。

   ## 选择器

   ### 基础选择器

   - 标签选择器 `h1`
   - 类选择器 `.box`
   - ID 选择器 `#box`
   - 通配选择器 `*`

   ### 属性选择器

   - ` [attr]` : 指定属性的元素；
   - `[attr=val] `: 属性等于指定值的元素；
   - `[attr*=val]`: 属性包含指定值的元素；
   - `[]`

   