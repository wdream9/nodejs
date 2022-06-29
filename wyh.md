~~~
第三方包将md文件转为 html
i5ting_toc -f test.md  -o
~~~

### 1、简介

#### 1.1、发展历史

~~~
npx http-server
~~~

javascript模块化编程发展历程

common.js---> require.js---->EASMscripts---->webpack

common.js

代码无法在浏览器中运行

导出

~~~js
// common.js模块化，但是语法是使用的es6的语法
const sum = (x,y)=>{
    return x + y;
}
const decre = (x, y)=>{
    return x-y;
}

module.exports  = {
    sum,
    decre
}
~~~

导入

~~~js
const math = require("./math");

console.log(math.sum(1,1))
~~~

require.js

可以在浏览器中进行运行，但是没有common.js简介