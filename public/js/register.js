//获取inp内容
var inputs = document.getElementsByTagName("input")
var users = [];
	//获取原本的值
var myUSE =localStorage.getItem("USE");
 users = myUSE == undefined ? [] : JSON.parse(myUSE)
// 储存后获取值
 var tt =localStorage.getItem("USE");
 var myuse =  JSON.parse(tt);
//用户名
document.querySelector(".botton").onclick = function(event){

	var user = inputs[0].value
	var reg = /^[0-9a-zA-Z][0-9a-zA-Z\.\-\_]{2,16}[0-9A-Za-z]$/ig
	if(!reg.test(user)){
				// 阻止默认事件: 比如：提交事件
				event.preventDefault()
				confirm("账号要求5--8个字符，第一个不能是数字")
			}else{
			 var a = true
			}

//	 密码
	var password = inputs[1].value
	var pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/
	if(!pPattern.test(password )){
				// 阻止默认事件: 比如：提交事件
				event.preventDefault()
				confirm("密码要求最少6位且要包含大小写数字和特殊字符")
			}else{
				var b =true
			}
//重复密码
var repassword = inputs[2].value
if(password != repassword ){
	event.preventDefault()
	confirm("两次输入的密码不一样")
	}else{
				var c =true
			}
if( repassword ==="" ){
	event.preventDefault()
	confirm("你第二次密码还没输入呢")
	}else{
				var d =true
			}

//手机号

var phoneNub =  inputs[3].value
var ckphoneNub = /^1[34578]\d{9}$/
if(!ckphoneNub.test(phoneNub)){
	event.preventDefault()
	confirm("你输入的手机号不合法")
	}else{
				var e =true
			}
//邮箱

var mailNub=  inputs[4].value
var ckmail = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g
if(!ckmail.test(mailNub)){
	event.preventDefault()
	confirm("你输入的邮箱不合法")
}else{
				var f=true
			}
var callName =  inputs[5].value
var ckmail = /^[\w\u4e00-\u9fa5]{6,8}$/g
if(!ckmail.test(callName)){
	event.preventDefault()
	confirm("你输入的昵称不合法")
}
else{
				var g =true
			}


if(a&&b&&c&&d&&e&&f&&g == true){
	var  person = {
	user,
	password,
	phoneNub,
	mailNub,
	callName
}
users.push(person)
var a = JSON.stringify(users)
var localStorage =window.localStorage; 
// 存储 
localStorage.setItem("USE",a); 
}
}

