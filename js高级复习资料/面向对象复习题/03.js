

/* 1.0 ***********************/

function fun(n,o) {
  console.log(o);
  return {
    fn:function(m){
      return fun(m,n);
    }
  };
}

// var a = fun(0);  a.fun(1);  a.fun(2);  a.fun(3);// undeifined
var a = fun(0);  a.fn(1);  a.fn(2);  a.fn(3);// undeifined 0 0 0
 
// a 对象在fun这个函数中构成了一个闭包 此时这个闭包中的 n == 0 o == undefined
// a.fn(m) ==> fun(m,n)  === >a.fn(1) ==> fun(1,0)

// var b = fun(0).fun(1).fun(2).fun(3);//?,?,?,?
var b = fun(0).fn(1).fn(2).fn(3);//undefined 0 1 2
// 1. 第一次fun(0)执行时返回的 对象在 fun这个函数中构成了一个闭包 此时这个闭包中的 n == 0 o == undefined
// 2. 执行fn(m) == > fun(m,n) ==> fn(1) ==> fun(1,0) 
// 3. 第二次执行fun(1,0)函数 所构成的闭包中 n == 1 o == 0
// 4. 执行fn(2) ==> fun(2,1)
// 5. 第三次执行fun(2,1) 然后构成的闭包里面 n == 2 o == 1
// 6. 执行fn(3) ==> fun(3,2)
// 7. 第四次执行fun(3,2) 这个闭包中 n == 3 o == 2

var c = fun(0).fun(1);  c.fun(2);  c.fun(3);// undefined 0  1  1
// var c = fun(0).fn(1);  c.fn(2);  c.fn(3);// undefined 0  1  1

//问:三行a,b,c的输出分别是什么？


/* 2.0 ***********************/
var x = 10;
var obj = {
    x: 20,

    f: function(){
        
        console.log(this.x); // 20

        var foo = function(){
            console.log(this.x); 
        }

        foo(); // 10
    }
};

obj.f();

/* 3.0 ***********************/
var obj1 = {
    name: 'zs',
    getName: function fn() {
        return this.name;
    }
}

var obj2 = {
    name : 'ls'
}

console.log(obj1.getName()) ; // zs
console.log(obj1.getName.call(obj2)) ; // ls

/* 4.0 ***********************/
var obj = {
    myname : 'zs',
    getNname : function() {
        return this.myname;
    }
}

console.log(obj.getNname()); // zs

var getname2 = obj.getNname;

console.log(getname2()) ; // undefined 




/* 5.0 ***********************/
window.color = "red";
var o = {
    color:"blue"
};

function sayColor(){
    alert(this.color);
}
var objectSayColor = sayColor.bind(o);
objectSayColor(); // blue




/* 6.0 ***********************/
function fn1(){console.log(1)};

function fn2(){console.log(2)};

fn3 = fn2.call;

fn2.call(fn1);//请问输出什么结果，为什么

fn3.call(fn1);//请问输出什么结果，为什么

fn3.call.call(fn1);//请问输出什么结果，为什么




/* 7.0 ***********************/
var name = "The Window";
var object = {
    name : "My Object",
    getNameFunc : function(){
        alert('1.' + this.name);
        return function(){
            return this.name;
        };
    }
};

var func = object.getNameFunc(); // My Object
alert('2.' + func()); // The Window
alert('3.' + func.call(object)); // My Object
alert('4.' + func.apply(object)); // My Object



/* 8.0 ***********************/
var name = 'global';
var obj = {
    name : 'obj',
    func : function(){
        this.name = 'func';
        return function(){
            return this.name;
        }
    }
}

console.log(obj.func().call(this));

// obj.func() 因为这里是方法调用 所以func中的this是obj  执行this.name = 'func' ===> obj.name = 'func';
// obj.func().call(this) 最后的这个this 指代的是谁? window
// obj.func().call(window)  所以最后打印的结果是global


/* 9.0 ***********************/
var name = 'global';
var obj = {
    name : 'obj',
    func : function(){
        var that = this;
        this.name = 'func';
        return function(){
            return that.name;
        }
    }
}
console.log(obj.func().call(this)); // func


/* 10 ***********************/
var name = 'global';
var obj = {
    name : 'obj',
    func : function(){
        this.name = 'func';
        return function(){
            return this.name;
        }.bind(this);
    }
}
console.log(obj.func().call(this)); // func
