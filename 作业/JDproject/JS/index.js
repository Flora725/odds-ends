window.onload = function () {
    //var banner = document.getElementById("banner");
    //var clo = document.getElementById("clo");
    //clo.onclick = function () {
    //    replace(banner, "show", "hide");
    //};关闭广告的第一种方法

    var banner = document.getElementById("banner");
    document.getElementById("clo").onclick=function(){
        banner.style.display = "none";
    }
    //关闭广告的第二种方法

    function replace(element, oldstr, newstr) {
        element.className = element.className.replace(oldstr, newstr);
    }

    var slideimg = document.getElementById("slideimg");
    var leftarr = document.getElementById("leftarr");
    var rightarr = document.getElementById("rightarr");
    var imgli = document.getElementById("imgli");
    var lilis = imgli.getElementsByTagName("li");
    var numbar = document.getElementById("numbar");
    var lis = numbar.getElementsByTagName("li");

    function replaceclassName(element, oldstr, newstr) {
        element.className = element.className.replace(oldstr, newstr);
    }

    slideimg.onmouseover = function () {
        replaceclassName(leftarr, "hide", "show");
        replaceclassName(rightarr, "hide", "show");
    };
    slideimg.onmouseout = function () {
        replaceclassName(leftarr, "show", "hide");
        replaceclassName(rightarr, "show", "hide");
    };
    var counter = 0;
    rightarr.onclick = function (){
        for (var i = 0; i < lilis.length; i++) {
            lilis[i].className = "hide";
        }
            if (counter === 6) {
                counter = 0;
            }
            if (counter === 5) {
                counter = -1;
            }
            replaceclassName(lilis[counter + 1], "hide", "show");
            counter++;
    };

    leftarr.onclick = function () {
        for (var i = 0; i < lilis.length; i++) {
            lilis[i].className = "hide";
        }
        if (counter === 0) {
            counter = 6;
        }
        if (counter === -1) {
            counter = 5;
        }
        replaceclassName(lilis[counter - 1], "hide", "show");
        counter--;
    };

    var manyic = document.getElementById("manyic");
    var ems = manyic.getElementsByTagName("em");
    for(var i = 0;i<ems.length;i++){
        ems[i].style.background="url(../image/life.png) no-repeat 0 "+(-i*25)+"px";
    }

















};



