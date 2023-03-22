// 3- Rename file from test.txt to info.txt
var fs = require('fs');

fs.rename('test.txt', 'info.txt', function (err) {
  if (err) throw err;
  console.log('File (test.txt) has been renamed to (info.txt)');
});