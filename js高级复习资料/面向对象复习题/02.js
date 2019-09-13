
//1、-------------------------------------------------------------------------------------
(function(b) {
    console.log(b);
    var b = c = 2;
    console.log(b);
})(1)

//2、-------------------------------------------------------------------------------------
(function(b) {
    console.log(b);
    var b = c = 2;
    console.log(b);
    function b(){}
    console.log(b);
})(1)

//3、-------------------------------------------------------------------------------------
(function(){
 var a = b = 3;
})();
 
console.log((typeof a !== 'undefined')); 
console.log((typeof b !== 'undefined'));

//4、-------------------------------------------------------------------------------------
(function(x) {
 return (function(y) {
 console.log(x);
 })(2)
})(1);

//5、-------------------------------------------------------------------------------------
var myObject = {
 foo: "bar",
 func: function() {
    var self = this;
    console.log( this.foo);
    console.log( self.foo);
    (function() {
        console.log(this.foo);
        console.log(self.foo);
    }());
 }
};
myObject.func();

//6、-------------------------------------------------------------------------------------
//写一个下面两种方式都能调用的函数
// console.log(sum(2,3)); // Outputs 5
// console.log(sum(2)(3)); // Outputs 5

// function sum(){

//     var first = arguments[ 0 ];
//     if(arguments.length == 2){

//         return arguments[ 0 ] + arguments [ 1 ];

//     }else{

//         return function(arg){
//             return first + arg;
//         }
//     }
// }


// sum(1,2,3,4,5) 15
// sum(1)(2)(3)(4)(5)  sum(1,2)(3)(4)(5)  sum(1,2,3)(4)(5) sum(1,2,3,4,5) 15


// 柯里化 函数
// 把一个函数的参数进行拆分 拆分后重新返回函数 然后返回的函数又可以接收剩下的参数

//7、-------------------------------------------------------------------------------------
// 完成下面函数
function repeat (func, times, wait) {


    return function(arg){

        var count = 0;
        var intervalId = setInterval(function(){
            // 判断count大于9时就停止定时器
            if(count > 9){
                clearInterval(intervalId);
            }else{
                func(arg);
            }
            count++;
        },wait)
    }
}

// 1.这个函数能返回一个新函数，比如这样用
var repeatedFun = repeat(alert, 10, 5000);
// 2.调用这个 repeatedFun ("hellworld") 会alert十次 helloworld, 每次间隔5秒
