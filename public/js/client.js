//获取实例
        var socket = io.connect("/");
		var userInfo = document.getElementById("userInfo"),
		btn = document.getElementById("btn");
		var yoursname 
//		获取locals值
      var myUSE = localStorage.getItem("USE");
      var myuse = JSON.parse(myUSE);
      var a =false
//		 获取时间
		 var myDate = new Date();
		        //获取信息盒子
		        var chatMsg = document.getElementById("chatMsg")
//		        创建验证框
            var NewPage = prompt("请输入你的手机号验证")
		for(var i  = 0; i < myuse.length; i++){
			if(myuse[i].phoneNub == NewPage){
				alert("验证成功")
				var yoursname = this.myuse[i].callName
				var a =true
				break
            }
           }
		    console.log(myuse)
            console.log(yoursname)
//		        创建模型盒子
if( a == true){
		btn.onclick = function(event){
			
//			 var uesrInfoText = userInfo.value ;
             var uesrInfoText  = yoursname+ "  "+result +"  "+ userInfo.value 

//			拦截不合格文本
			if(uesrInfoText  == undefined){
				return;
			}else if(uesrInfoText .trim() == ''){
				return;
			}
			socket.send(uesrInfoText);//发送
			
			
			//TOOD 发送消息
			
			userInfo.value = "";
           
		}	
}else{
	alert("你验证没通过")
	event.preventDefault()
}

	

		socket.on("message",function(msg){
//			console.log(msg)
//    时间
		var usertimeBox = document.createElement('div');
		usertimeBox.className = "time"
		usertimeBox.innerHTML = result;
//		用户
		var userBox = document.createElement('div');
		userBox.className = "usename"
		userBox.innerHTML = yoursname;
//		内容
		var rightBox = document.createElement('div');
		rightBox.className = 'right';
		var rightBoxMsg = document.createElement('div');
		rightBoxMsg.className = 'right-msg msg';
		rightBoxMsg.textContent = msg;
		rightBox.appendChild(rightBoxMsg);
		chatMsg.appendChild(rightBox); 
//		rightBox.appendChild(usertimeBox);
//		rightBox.appendChild(userBox);
		});
		
	
		//格式化时间
				//'2019-10-10 10:10:10'  'yyyy-MM-dd hh:mm:ss'

		Date.prototype.format = function (rule) {

			//rule: 'yyyy-MM-dd hh:mm:ss'

			//替换年份
			var year = this.getFullYear();

			var yearReg = /(y+)/;

			if (yearReg.test(rule)) {


				var groupContent = RegExp.$1;

				rule = rule.replace(groupContent, year);

			}

			

			//月，日，时，分，秒
			var o = {
				'M': this.getMonth() + 1, //月
				'd': this.getDate(), //日
				'h': this.getHours(), //时
				'm': this.getMinutes(), //分
				's': this.getSeconds() //秒
			};

			//替换 月，日，时，分，秒
			for (var key in o) {
				var reg = new RegExp('(' + key + '+)');

//				console.log('reg ==> ', reg);
				
				if (reg.test(rule)) {

					//获取匹配组内容
					var content = RegExp.$1;

					var value = o[key];
					
					rule = rule.replace(content, value >= 10 ? value : content.length >= 2 ? '0' + value : value);

				}
			}

			return rule;

		}

		var date = new Date();
		var result = date.format('yyyy-MM-dd hh:m:ss');
		console.log('result ==> ', result);
		
//获取
      var myUSE =localStorage.getItem("USE");
	  var myuse =  JSON.parse(myUSE);
	  
	  var inp = document.getElementById("inp")
	  
