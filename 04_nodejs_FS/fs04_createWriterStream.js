const fs = require('fs');

var data = 'aaaaaaaaaaaaaaaa \n';

var writeStream = fs.createWriteStream('output.txt');

for(var i=0; i<100; i++){
    writeStream.write(data, 'utf8');
}


writeStream.end();

writeStream.on('finish', function(){
    console.log('写入完成')
})
writeStream.on('error', function(){
    console.group('写入失败')
})