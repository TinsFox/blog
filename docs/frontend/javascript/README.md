---
title: 目录
---

# 介绍

关于JavaScript的概念



## 预编译

1. 变量提升

   JavaScript 引擎的工作方式是，先解析代码，获取所有被声明的变量，然后再一行一行地运行。这造成的结果，就是所有的变量的声明语句，都会被提升到代码的头部，这就叫做变量提升（hoisting）。

   ```js
   console.log(a);
   var a = 1;
   
   // 上述代码实际运行结果
   var a;
   consoloe.log(a);// undefined
   a = a
   ```


## 闭包

**特性：**

1. 函数可以嵌套函数
2. 函数内部可以引用外部的参数和变量
3. 参数和变量不会被垃圾机制回收

**优点：**

1. 避免全局变量的污染

**缺点：**

1. 常驻内存，会增大内存的使用量，使用不当很容易造成内存泄漏

## 数组

一、创建数组

1. 使用数组字面量表示方法

```javascript
var array1 = []; 
var array2 = [20];
var array3 = ["Tony","lucy","lily"];
```

2. 使用 Array 构造函数

#### 无参构造

```javascript
var array4 = new Array();
```

#### 有参构造
