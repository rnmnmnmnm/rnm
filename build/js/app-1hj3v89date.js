function fun1() {
    //生成一个10以内的随机数
    var m = parseInt(Math.random()*10);
    if (m < 5) {
        window.location.href = "noticet.html";
    }
    else {
        window.location.href = "noticew.html";
    }

}

function fun2() {
    var m = parseInt(Math.random()*10);
    if (m < 5) {
        window.location.href = "noticet.html";
    }
    else {
        window.location.href = "noticew.html";
    }
}

function fun3() {
    var date = new Date();
    var d = date.getDate();
    var m = parseInt(date.getDate()%3);
    if (m != 0) {
        window.location.href = "noticet.html";
    }
    else {
        window.location.href = "noticew.html";
    }
}
