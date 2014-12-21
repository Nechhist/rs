var app = require('http').createServer(handler);
var fs = require('fs');
var io = require('socket.io').listen(app);

app.listen(8080);

function hendler(res, req){
    fs.readFile(__dirname+'/index.html', function(err, data){
        if(err){
            console.log('Error: '+err);
            res.writeHead(404);
            return res.end('Error index');
        }
        res.writeHand(200);
        res.end(data);
    });
}

io.sockets.on('connection', function(socket)){
	
}

console.log('Working');
