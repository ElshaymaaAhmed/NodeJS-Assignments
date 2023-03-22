// 7- create Dir -> bonus

var fs = require('fs');

fs.mkdir('NewDir', function(err) {
  
  if (err) {
    throw err;
  }
  
  console.log('The directory (NewDir) has been created successfully!');
});