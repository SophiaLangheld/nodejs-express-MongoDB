var http = require('http')

http.createServer(function(req, res){

    res.writeHead(200, {"Content-Type":"text/html; charset='utf-8"});
    res.write('Hallo Nodejs');
    res.end(); //结束响应

}).listen(8001);