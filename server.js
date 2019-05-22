var http = require("http");//引入一个模块

var fs = require("fs");

var ws = require("socket.io");

var server = http.createServer(function(req,res){
	var html = fs.readFileSync("./client.html")
	res.end(html);
	
}).listen("3000");//创建服务器方法

var io = ws(server);//把socket服务挂到http, 得到socket实例

io.on("connection",function(socket){
	console.log("有新用户连接进来了");
	
	socket.on("message",function(mes){
		console.log(mes);
		io.emit("message",mes);//广播消息、主动触发事件
		
	});//监听客户消息后做的事情
})//监听事件,so不同的链接对象socket指向
