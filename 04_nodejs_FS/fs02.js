var fs = require('fs');

//查看是否有 upload 目录， 没有的话， 要建立
// fs.stat('upload', function(err, stats){
//     if(err){
//         fs.mkdir('upload', function(error){
//             if(error){
//                 console.log(error);
//                 return false;
//             }
//             console.log('创建成功')
//         })
//     } else {
//         console.log('upload 已经存在');
//         console.log(stats.isDirectory());
//     }
// })

// 打印出 html 下面的 所有目录
var filesArr = [];
fs.readdir('html', function(err, files){
    if(err){
        console.log(err)
    }else{
        (function getFile(i){
            if(i == files.length){
                console.log('目录' + filesArr);
                return false
            }
            fs.stat('html/'+files[i], function(error, stats){
                if(stats.isDirectory()){
                    filesArr.push(files[i]);
                }
                getFile(i + 1);
            })
        })(0)
    }
})