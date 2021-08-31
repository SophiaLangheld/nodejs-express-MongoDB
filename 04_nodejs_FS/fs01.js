var fs = require('fs');


//1. fs.stat 检测是文件还是目录
// fs.stat('html', function(err, stats){
//     if(err){
//         console.log(err);
//         return false;
//     }

//     console.log('File:' + stats.isFile())
//     console.log('Directory:' + stats.isDirectory())
// })


//2.  fs.mkdir 创建目录
// fs.mkdir('css', function(err){
//     if(err){
//         console.log(err);
//         return false;
//     }
//     console.log('创建目录成功')
// })

// 3. fs.writeFile 写入文件
// fs.writeFile('t.txt', 'hallo Nodejs, fs.writeFile',  function(err){
//     if(err){
//         console.log(err);
//         return false;
//     }
//     console.log('写入成功')
// })


// 4. fs.appendFile 追加文件
// fs.appendFile('t1.txt', 'hier ist Content \n', function(err){
    
//     if(err){
//         console.log(err);
//         return false;
//     }
//     console.log('写入成功');
// })


// 5. fs.readFile 读取文件
// fs.readFile('t1.txt', function(err, data){
//     if(err){
//         console.log(err);
//         return false;
//     }
//     console.log(data);
//     console.log(data.toString());
// })


// 6. fs.readdir 读取目录
// fs.readdir('html', function(err, data){
//     if(err){
//         console.log(err);
//         return false;
//     }
//     console.log(data);
// })

// 7. fs.rename 重命名   //1重命名 2剪切文件
// fs.rename('html/index.html', 'html/news.html', function(err){
//     if(err){
//         console.log(err);
//         return false;
//     }
//     console.log('重命名成功')
// })

//7.2剪切文件
// fs.rename( 'html/css/basis.css', 'html/style.css', function(err){
//     if(err){
//         console.log(err);
//         return false;
//     }
//     console.log('剪切成功')
// })


//8. fs.rmdir 删除目录
// fs.rmdir('t', function(err){
//     if(err){
//         console.log(err);
//         return false;
//     }
//     console.log('删除目录成功')
// })

//9. fs.unlink 删除文件
fs.unlink('index.txt', function(err){
    if(err){
        console.log(err);
        return false;
    }
    console.log('删除文件成功');
})





