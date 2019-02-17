const express = require('express');
const app = express();
const server = app.listen(8000);
const io = require('socket.io')(server);

app.use(express.static(__dirname + "/static"));


io.on('connection', function (socket){
	var count = 0;
	console.log("this is the first count",count)
	
	socket.on('count', function(){
		count ++;
		console.log(count)
		socket.emit('countTotal', count)
	})
	socket.on('reset', function(){
		count = 0;
		console.log(count)
		socket.emit('countTotal', count)
	})
})



app.get('/', function(req, res){

	res.sendFile('index.html')
})



