// 5- Read data from data.json file.
// ---------------- Sync ---------------------//

var fs = require('fs');

var content = fs.readFileSync('data.json', 'utf8')
console.log(content)
