# JavaScript高级考试题

### 选择题(共15题,每题4分)

> 01 - 关于this的工作原理，下面4种情况的描述哪一个是错误的？ C

```javascript
A.在全局范围内，this指向全局对象（浏览器下指window）
B.对象函数调用时，this指向当前对象
C.全局函数调用时，this指向全局函数
D.使用new实例化对象时，this指向新创建的对象
```


> 02 - Ajax中，你已经创建了一个XMLHttpRequest对象，xhr，正确调用了对象的open方法和send方法。当你检查xhr.status时发现等于0，responseText是空。下面哪一个最好的解释了这种情形？B

```javascript
A.服务器发生未知错误
B.请求被撤销了，因为连接错误或用户的操作
C.浏览器初始化了太多的并发XHR请求，这个请求在排队
D.请求没有发送到服务器
```


> 03 - 下列的关于ajax描述当中，错误的是 C

```javascript
A.ajax是异步javascript和xml，用于在web页面中实现异步数据交互
B.ajax的核心对象是xmlhttprequest
C.ajax的状态码1代表正在发送请求，2代表正在解析响应内容，可通过ajax.status获取
D.ajax的缺点是对搜索引擎不友好，并且存在跨域问题限制
E.要实现ajax下的前后退功能成本较大
```


> 04 - 关于HTTP Cookie的描述正确的是？C

```javascript
A.Cookie的超时时间通过服务端设置
B.Session只能通过Cookie的形式进行传递
C.一台计算机上安装了多个浏览器，每个浏览器的Cookie是单独存储的
D.Cookie通过HTTP Header从浏览器发送到服务端
```


> 05 - 在标准的 JavaScript 中， Ajax 异步执行调用基于下面哪一个机制才能实现？D

```javascript
A.Event和callback
B.多线程操作
C.多CPU核
D.Deferral和promise
```

> 06 - 请选择结果为真的表达式  C

```javascript
A.null instanceof Object（if(!(null instanceof Object))是真的） 
B.null === undefined 
C.null == undefined 
D.NaN == NaN
```


> 07 - 关于IFrame表述正确的有 ABCD

```javascript
A.	通过IFrame，网页可以嵌入其他网页内容，并可以动态更改
B.	在相同域名下，内嵌的IFrame可以获取外层网页的对象
C.	在相同域名下，外层网页脚本可以获取IFrame网页内的对象 
D.	可以通过脚本调整IFrame的大小
```

> 08 - 以下描述错误的是 A

```javascript
A.cookie以及localstorage都会伴随着http请求发送到服务器
B.get提交的URL会有长度的限制，而post提交的数据则可以比较大
C.javascript在浏览器执行是单线程的
D.html5中新增的存储方式包括localstorage/sessionstorage
```

> 09 - w3c制定的JavaScript标准事件模型,以下正确的顺序及描述是 B

```javascript
A.事件捕获>事件冒泡
B.事件捕获>事件处理>事件冒泡
C.事件冒泡>事件处理>事件捕获
D.事件处理>事件捕获>事件冒泡
```

> 10 - 下列正确定义函数的是 A

```javascript
A. function foo(){}
B. Function foo(){}
C. var foo = new Function(){}
D. var foo = new function(){}
```

> 11 - var arr = [1,2,3],下面哪个操作会返回一个数组,并且不是arr C

```javascript
A. arr.push(3)
B. arr.reverse()
C. [].concat.call(arr,[])
D. [].sort.call()
```

> 12 - 下面有关浏览器中使用js跨域获取数据的描述,说法错误的是？A

```javascript
A. 域名、端口相同，协议不同，属于相同的域
B. js可以使用jsonp进行跨域
C. 通过修改document.domain来跨子域
D. 使用window.name来进行跨域
```

> 13 - 下面有关JavaScript内部对象的描述,正确的是 ABCD

```javascript
A. History对象包含用户(在浏览器窗口中)访问过的URL
B. Location对象包含有关当前URL的信息
C. Window对象表示浏览器中打开的窗口
D. Navigator对象包含有关浏览器的信息
```

> 14 - 以下哪一条JavaScript语句会产生运行错误 A

```javascript
A. var obj = ();
B. var obj = [];
C. var obj = {};
D. var obj = //; 
```

> 15 - 以下call,apply,bind说法正确的是 B

```javascript
A. call不是一个函数
B. call可以改变this的指向
C. apply可以改变使用过bind绑定的函数this指向
D. apply第一个参数是一个数组
```

### 代码题(共10题,每题4分)

> 1.移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组 

```javascript
function remove(arr,item){
    var newarr = arr.slice(0);
    for(var i=0;i<newarr.length;i++){
        if(newarr[i] == item){
            newarr.splice(i,1);
            i--;
        }
    }
    return newarr;
}
```

> 2.找出数组 arr 中重复出现过的元素

```javascript
function duplicates(arr) {  
    var result = [];  
    arr.forEach(function(item){  
        if(arr.indexOf(item)!=arr.lastIndexOf(item)&&result.indexOf(item)==-1)  
            result.push(item);  
    })  
    return result;  
}  
```
> 3.输出今天的日期，以YYYY-MM-DD的方式，比如今天是2017年3月1日，则输出2017-03-01

```javascript
function formatToday(){
  var d = new Date();
  // 获取年，getFullYear()返回4位的数字
  var year = d.getFullYear();
  // 获取月，月份比较特殊，0是1月，11是12月
  var month = d.getMonth() + 1;
  // 变成两位
  month = month < 10 ? '0' + month : month;
  // 获取日
  var day = d.getDate();
  day = day < 10 ? '0' + day : day;
  console.log(year + '-' + month + '-' + day);
}	
```
> 4.为了保证页面输出安全，我们经常需要对一些特殊的字符进行转义，请写一个函数escapeHtml，将<, >, &, “进行转义

```javascript
function escapeHtml(str) {
	return str.replace(/[<>”&]/g, function(match) {
        switch (match) {
               case “<”:
                  return “&lt;”;
               case “>”:
                  return “&gt;”;
               case “&”:
                  return “&amp;”;
               case “\””:
                  return “&quot;”;
          }
  	});
}
```

> 5.用js实现随机选取10–100之间的10个数字，存入一个数组，并排序(升序)

```javascript
function random_sort(){
  var iArray = []; 
  // 获取指定区间的随机数
  function getRandom(istart, iend){
          var iChoice = iend - istart +1;
          return Math.floor(Math.random() * iChoice + istart);
  }
  for(var i=0; i<10; i++){
          iArray.push(getRandom(10,100));
  }
  iArray.sort();
}
```

> 6.说出以下函数的作用是？空白区域应该填写什么？

```javascript
//define 
(function(window){
    function fn(str){
        this.str=str;
    }
 
    fn.prototype.format = function(){
        var arg = ______;
        return this.str.replace(_____,function(a,b){
             return arg[b]||"";
      });
    }
    window.fn = fn;
})(window);
 
//use
(function(){
    var t = new fn('<p><a href="{0}">{1}</a><span>{2}</span></p>');
    console.log(t.format('http://www.alibaba.com','Alibaba','Welcome'));
})();

1. Array.prototype.slice.call(arguments,0);// 将arguments转换成数组
2. /\{(\d+)\}/g // 匹配: {数字}
```


> 7.写一个函数判断是否大于18岁,比如传入1993-6-3，返回true ，传入2001-6-3 返回false

```javascript
function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age > 18;
}
```

> 8.实现函数 makeClosures，调用之后满足如下条件：
> 1、返回一个函数数组 result，长度与 arr 相同
> 2、运行 result 中第 i 个函数，即 result\[i\]()，结果与 fn(arr[i]) 相同 

```javascript
 function makeClosures(arr, fn) {  
    var result = [];  
     arr.forEach(function(e){  
         result.push(function(num){  
             return function(){  
                 return fn(num);  
             };  
         }(e));  
     });  
     return result;  
}
eg:
var arr = [1, 2, 3];
var square = function (x) { return x * x; };
var funcs = makeClosures(arr, square);
funcs[1]();
```

> 9.给定字符串 str，检查其是否符合如下格式
> 1、XXX-XXX-XXXX
> 2、其中 X 为 Number 类型 

```javascript
function checkStr(str){
    return /^(\d{3}-){2}\d{4}$/.test(str);
}
```

> 10.封装函数获取一个字符串中的数字字符，并按数组形式输出，如dgfhfgh254bhku289fgdhdy675gfh输出[254,289,675]

```javascript
function selectNumber(str){
    var arr = [];
    str.replace(/\d+/g,function(m){
        arr.push(m);
    })
    return arr;
}
```