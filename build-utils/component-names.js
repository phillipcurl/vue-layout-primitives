const fs = require('fs');
const path = require('path');

const walk = dir => {
	var results = [];
	var list = fs.readdirSync(dir);
	list.forEach(file => {
		filePath = dir + '/' + file;
		// file = path.join(dir, file);
		var stat = fs.statSync(filePath);
		if (stat && stat.isDirectory()) {
			/* Recurse into a subdirectory */
			results = results.concat(walk(filePath));
		} else {
			/* Is a file */
			results.push(file);
		}
	});
	// console.log('results: ', results);
	return results;
};

// Get all the .vue files in the src directory
const componentFileNames =
	// fs.readdirSync(path.resolve(__dirname, '../src'))
	walk(path.resolve(__dirname, '../src')).filter(componentFileName =>
		/\.vue$/.test(componentFileName)
	);

console.log('component file names: ', componentFileNames);

// Get the names of the components from the file names
module.exports = componentFileNames.map(componentFileName =>
	componentFileName.replace(/\.\w+$/, '')
);
