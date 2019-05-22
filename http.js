// server.js 

// 引入相关模块
var http = require("http");//引入一个模块
var url = require('url');
var path = require('path');
var readStaticFile = require('./modules/readStaticFile');

var fs = require("fs");
var ws = require("socket.io");

// 搭建 HTTP 服务器
var server = http.createServer(function(req, res) {
    var urlObj = url.parse(req.url);
    var urlPathname = urlObj.pathname;
    var filePathname = path.join(__dirname, "./public", urlPathname);
    
    // 读取静态文件
    readStaticFile(res, filePathname);
});

// 在 3000 端口监听请求
server.listen(3000, function() {
    console.log("服务器运行中.");
    console.log("正在监听 3000 端口:")
})
var io = ws(server);//把socket服务挂到http, 得到socket实例

io.on("connection",function(socket){
	console.log("有新用户连接进来了");
	
	socket.on("message",function(mes){
		console.log(mes);
		io.emit("message",mes);//广播消息、主动触发事件
		
	});//监听客户消息后做的事情
})//监听事件,so不同的链接对象socket指向