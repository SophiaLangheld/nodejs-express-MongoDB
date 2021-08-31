var http = require ('http');
var url = require ('url');

http.createServer(function(req, res){

    console.log(req.url);
    res.writeHead(200, {"Content-Type": "text/html;charset='utf-8"});

    if (req.url !== '/favicon.ico') {
        //http://localhost:8001/news?aid=123
        console.log(req.url);  //return  /news?aid=123 

        var result = url.parse(req.url, true);
        //console.log(result);
        //console.log(result.query);
        console.log(result.query.aid);
    }
    res.write('Hallo Nodejs');
    res.end();

}).listen(8001);

