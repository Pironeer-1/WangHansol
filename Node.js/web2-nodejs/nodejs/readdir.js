var testFolder = './data';
var fs = require('fs');

//파일 목록을 읽어옴
fs.readdir(testFolder, function(error, filelist) {
    console.log(filelist);
});
