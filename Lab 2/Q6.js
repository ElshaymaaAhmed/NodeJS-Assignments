// 6- write inside file info.txt “hello iti”

var fs = require('fs');

fs.writeFile('info.txt', 'hello iti', function(err){
  
  if (err) {
    throw err;
  }

  console.log('The file has been modified!');
});

