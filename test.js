'use strict'
class Test {
	test(){
		var ws = new WebSocket('ws://10.13.18.32:7874');

		ws.onopen = function() {
		  ws.send('something'); // 发送一个消息
		};

		ws.onmessage = function(e){
		  console.log(e.data);
		};

		ws.onerror = function(e){
		  console.log(e.message);
		};

		ws.onclose = function(e) {
		  console.log(e.code, e.reason);
		};	
		return "websocket";
	}
}