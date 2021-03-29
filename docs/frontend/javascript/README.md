---
title: JavaScript
---

# 介绍

关于JavaScript的概念

## 数据类型

基本数据类型：Number、Boolean、String、Null、undefined、symbol（ES6新增）、Biglnt（ES2020）、

引用数据类型：Object、Array、function

特殊对象：正则（RegExp）、日期（Date）

### 数据类型判断

1. **typeof**

   typeof 返回一个标识数据类型的字符串，返回结果包括：Number、String、Boolea、Object、undefined、function。typeof 可以对Number、String、Boolean、undefined 做出准确判断（null除外，typeof null ==="Object"），对于引用类型，除了function，其他都是返回Object

   ```javascript
   typeof 1; // number 有效
   typeof ‘ ’;//string 有效
   typeof true; //boolean 有效
   typeof undefined; //undefined 有效
   typeof null; //object 无效
   typeof new Function(); // function 有效
   typeof [] ; //object 无效
   typeof new Date(); //object 无效
   typeof new RegExp(); //object 无效
   ```

   

2. **instanceof** 

   instanceof 操作符判断做操作数对象的原型链上是否有右边这个构造函数的 proptype 属性 ，也就是说制定对象是否是某个构造函数的实例

   ```javascript
   [] instanceof Array; //true
   [] instanceof Object; //true
   new Date() instanceof Date;//true
   new Date() instanceof Object;//true
   function Person(){};
   new Person() instanceof Person;//true
   new Person() instanceof Object;//true
   ```

   **instanceof** 运算符只能用于对象，不适用原始类型的值

   ```javascript
   'hello' instanceof String // false
   null instanceof Object // false
   undefined instanceof Object // false
   ```

3. #### constructor

   constructor属性的作用是，可以得知某个实例对象，到底是哪一个构造函数产生的。

   ```js
   var f = new F();
   f.constructor === F;// true
   ```

4. **Object.prototye.toString**

   toString 是Object 原型对象的一个方法，该方法默认返回其调用者的具体类型，更严格的讲是toString运行时this指向的对象类型，返回的类型格式为[Object,xxx]，xxx是具体的数据类型，其中包括：String,Number,Boolean,Undefined,Null,Function,Date,Array,RegExp,Error,HTMLDocument,...基本所有对象的类型都可以通过这个方法找到。

   需要注意的是，必须通过 Object.prototype.toString.call()  来获取，而不能直接 new Date().toString() ，从原型链的角度讲，所有对象的原型链最终都指向了Object，按照 Js 变量查找规则，其他对象应该也可以直接访问到 Object 的 toString 方法，而事实上，大部分对象都实现了自身的 toString 方法，这样可能就会导致 Object 的 toString 被终止查找，因此要用 call 来强制执行 Object 的 toString 方法。

   ```javascript
   Object.prototype.toString.call('') ;   // [object String]
   Object.prototype.toString.call(1) ;    // [object Number]
   Object.prototype.toString.call(true) ; // [object Boolean]
   Object.prototype.toString.call(undefined) ; // [object Undefined]
   Object.prototype.toString.call(null) ; // [object Null]
   Object.prototype.toString.call(new Function()) ; // [object Function]
   Object.prototype.toString.call(new Date()) ; // [object Date]
   Object.prototype.toString.call([]) ; // [object Array]
   Object.prototype.toString.call(new RegExp()) ; // [object RegExp]
   Object.prototype.toString.call(new Error()) ; // [object Error]
   Object.prototype.toString.call(document) ; // [object HTMLDocument]
   Object.prototype.toString.call(window) ; //[object Window]
   ```

   #### 总结

   1. typeof 可以准确的判断出基本类型，但是对于引用类型除 function 之外返回的都是Object
   2. 已知是引用类型的情况可以选用instanceof或者constructor方法进行具体类型的判断
   3. instanceof是基于原型链的
   4. Constructor 属性易变，不可信赖，为了规范，在重写对象原型时一般都需要重新给constructor 赋值，以保证实例对象的类型不被改写
   5. Object.prototype.toString.call() 通用但繁琐

## 拷贝

浅拷贝和深拷贝是什么

拷贝即为复制，我们一般通过赋值的方式可以进行拷贝一个变量的值

#### 浅拷贝

**Object.assign()**

ES6 中Object的一个方法，可以是用来合并多个JS 对象（能用来实现浅拷贝）

第一个参数拷贝的目标对象，后面的参数是拷贝的来源对象

- 语法

```javascript
Object.assign(target, ...sources)
```

>
>
>注意：Object.assign() 方法只会拷贝源对象自身的并且可枚举的属性到目标对象。
>
>使用时应注意：

- 不会拷贝对象的继承属性
- 不会拷贝对象的不可枚举属性
- 可以拷贝Symbol类型的属性

```js
function shalloeClone(obj){
  let cloneObh = {};
  for(let i in obj){
    cloneObj[i]=obj[i];
  }
  return clone
} 
```

**手写**

思路

1. 基本类型做最基本的赋值
2. 引用数据类型需要开辟一个新的储存，并拷贝一层对象属性

```js
function shallowCopy(target){
  if(typeof copy = Array.isArray === "Object" && target !== null){
    const copy = Array.isArray(target) ? [] : {}
    for(const prop in target){
      if(target.hasOwnProperty(prop)){
        cpoy[prop] = target[prop]
      }
      return copy
    }
    return target
  }
}
```



#### 深拷贝

- 考虑基础类型
- 引用类型
  - RegExp、Date、函数
  - 会丢失constructor，所有的构造函数都指向Object
  - 破解循环引用

```js

```

```js
function deepCopy(){
  let copyObj = {}
  for(let key in obj){
    if(typeof obj[key]==="object"&&obj[key]!==null){
      copyObj[key] = deepCopy(obj[key])
    }else{
      copyObj[key] = obj[key]
    }
  }
  return copyObj
}
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



## Promise

1. 没有考虑异步版本

```js
const PENING ="PENDING"
const FULFLLED = "FULFILLED"
const REJECTED = "REJECTED"
class Promise(){
  constructor(executor){
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
  }
  let resolve =(value) =>{
    if(this.status === PENDING){
      this.status = FULFILLED;
      this.value = value;
    }
  }
  let reject = (reason) =>{
    if(this.status===PENDING){
      this.status = REJECTED;
      this.reason = reason;
    }
  }
  try{
    excutor(resolve,reject)
  }catch(error){
    reject(error)
  }
  then(onFulfilled,onRejected){
    if(this.status === FULFILLED){
      onFulfilled(this.value)
    }
    if(this.status === REJECTED){
      OnRejected(this.reason)
    }
  }
}
```

2. 异步

发布订阅模式 收集依赖 -> 触发通知 -> 取出依赖执行

```javascript
const PENDING = "PENDING"
const FULFILLED = "FULFILLED"
const REJECTED = "REJECTED"
class Promise{
  constructor(executor){
    this.status = PENDING
    this.value = undefined
    this.reason = undefined
  }
  let resolve = (value) =>{
    if(this.status === PENDING){
      this.status = FULFILLED;
      this.value = value;
    }
  }
  let reject = (reason)=>{
    if(this.status === PENDING){
      this.status = REJECTED;
      this.reason = reason;
    }
  }
  try{
    executor(resolve,reject)
  }catch(error){
    reject(errod)
  }
	then(onFulfilled,onRejected){
    if(this.status === FULFILLED){
      onFulfilled(this.value)
    }
    if(this.status === REJECTED){
      onRejacted(this.reason)
    }
    if(this.status ===PENDING){
      this.onReslovedCallbacks.push(()=>{
        onFulfilled(this.value)
      })
      this.onRejectedCallbacks.push(())=>{
        onRejected(this.reason)
      }
    }
  }
}
```

## this指向

```js
var o = {
    a:12,
    b:{
        a:14,
        c:{
           a:15,
           d:function(){
             console.log(this.a);
              function e(){
                  console.log(this.a); 
                  f();
              }
              e();  
              function f(){
                  console.log(this.a); 
              }
              g=()=>{
                 console.log(this.a); 
              }
              g();
           }
        }
    }
}
o.b.c.d()
```



