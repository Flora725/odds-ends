
// 分析各题执行结果

/*    
    // 第一题
    var n = 1;
    function f1() {
        console.log(n);
    }
    function f2() {
        console.log(n);
        n = 2;
        f1();
        console.log(n);
    }
    f2();

    // 第二题
    var m = 1;
    function f1() {
        console.log(m);
    }
    function f3() {
        function f2() {
            f1(m);
        }

        f2();
        var m = 3;
    }
    f3();

    // 第三题
    function fn(a) {
        console.log(a);
        a = 10;
        console.log(a);
    }
    fn(1);

    // 第四题
    function fn(b) {
        console.log(b);
        function b() {
            console.log(b);
        }

        b();
    }
    fn(1);

    // 第五题
    function fn(b) {
        console.log(b);
        b = function () {
            console.log(b);
        };
        b();
    }
    fn(1);

    // 第六题
    function fn(b) {
        console.log(b);
        var b = function () {
            console.log(b);
        };
        b();
    }
    fn(1);


    // 第七题
    name = "a";
    function fn(name) {
        var name = "b";

        function fn1() {
            var name = "c";
            console.log(name);
        }

        function fn2() {
            console.log(name);
        }

        fn1();
        fn2();
    }
    fn(1);

    // 第八题
    var a = 10;
    function test() {
        a = 100;
        console.log(a);
        console.log(this.a);
        var a;
        console.log(a);
    }
    test();

    // 第九题
    function box(obj) {
        obj.name = 'zs';
        var obj = new Object();
        obj.name = 'ls';
    }
    var obj = new Object();
    box(obj);
    console.log(obj.name);

    // 第10题
    var A = function () {
    };
    A.prototype.n = 1;
    var b = new A();
    A.prototype = {
        n: 2,
        m: 3
    };
    var c = new A();
    console.log(b.n);
    console.log(b.m);
    console.log(c.n);
    console.log(c.m);

写一段代码, 生成 5 个 a 标签. 要求在 a 标签中分别显示出 1, 2, 3, 4, 5
即最后得到 <a>1</a><a>2</a><a>3</a><a>4</a><a>5</a>
*/