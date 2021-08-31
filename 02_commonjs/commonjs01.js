var http = require ('http');
var config = require ('./config.js')
var app = http.createServer(function(req, res){

    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    res.write('hallo Nodejs');
    console.log(config);
    res.end();
})

app.listen(8002, '127.0.0.1');