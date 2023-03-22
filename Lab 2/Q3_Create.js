// Create test file with dummy data
var fs = require('fs');

fs.appendFile('test.txt', 'Hello World! From ITI, This Shaima Speaking', function (err) {
  
  if (err) {
    throw err;
  }

  console.log('File (test) Created Successfully!');
});
 