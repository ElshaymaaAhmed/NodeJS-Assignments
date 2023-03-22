// 2- How to read a file line by line using node.js?

var fs = require('fs');
var readline = require('readline');

var greet = readline.createInterface({
    input: fs.createReadStream('greet.txt')
});


greet.on('line',function(line){
    console.log(line)
})
