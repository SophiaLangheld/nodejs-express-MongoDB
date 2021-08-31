const fs = require('fs');

var readStream = fs.createReadStream('input.txt');

var str = '';
var count = 0;
readStream.on('data', function(chunk){
    str += chunk;
    count ++;
})

readStream.on('end', function(chunk){
    console.log(count);
    console.log(str);
})
