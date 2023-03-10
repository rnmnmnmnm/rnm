var Ajax={
  get: function(url, fn) {
    var obj = new XMLHttpRequest();  // XMLHttpRequest对象用于在后台与服务器交换数据          
    obj.open('GET', url, true);
    obj.onreadystatechange = function() {
        if (obj.readyState == 4 && obj.status == 200 || obj.status == 304) { // readyState == 4说明请求已完成
          fn.call(this, obj.responseText);  //从服务器获得数据
        }
    };
    obj.send();
  },
  post: function (url, data, fn) {         // datat应为'a=a1&b=b1'这种字符串格式，在jq里如果data为对象会自动将对象转成这种字符串格式
    var obj = new XMLHttpRequest();
    obj.open("POST", url, true);
    obj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");  // 添加http头，发送信息至服务器时内容编码类型
    obj.onreadystatechange = function() {
      if (obj.readyState == 4 && (obj.status == 200 || obj.status == 304)) {  // 304未修改
        fn.call(this, obj.responseText);
      }
    };
    obj.send(data);
  }
}

function doLogin(){
  var email = document.getElementById('email').value
  var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
  if( !myreg.test(email) )
  {
    alert('提示\n\n请输入有效的E_mail！');
  }else{
    var url = (location.href.indexOf('www')==-1?'http://':'http://www.') + 'picaccomic.com/PicaServer/index.php/Api/login?email='+email
    Ajax.get( url , function(res){
      res === 'donated' ? document.cookie = 'is_login_donated' : document.cookie = 'is_login'
      checkLogin()
    })
  }
}

function checkLogin(){
  var is_login = document.cookie.indexOf('is_login')
  if(is_login == -1){
    document.getElementById('login_bg').style.display = 'block'
    document.getElementById('login_box').style.display = 'block'
  }else{
    document.getElementById('login_bg').style.display = 'none'
    document.getElementById('login_box').style.display = 'none'
  }
}

window.onload=function(){
  //checkLogin()
}
