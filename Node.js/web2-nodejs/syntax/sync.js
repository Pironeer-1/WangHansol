var fs = require('fs');

var result = fs.readFile('syntax/sample.txt', 'utf8', function(err, result){
    console.log(result);
});
