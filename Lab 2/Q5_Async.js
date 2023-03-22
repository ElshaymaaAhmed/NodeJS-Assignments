// 5- Read data from data.json file.
// ---------------- Sync ---------------------//

var fs = require('fs');
fs.readFile('data.json', 'utf8', function(err, data){
	
	if(err) {
		throw err;
	}

	console.log(data)
})

