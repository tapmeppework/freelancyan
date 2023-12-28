/**
 * 
 */
const
	path = require('node:path'),
	distribution = './dist',
	source = './src',
	bloc = `${source}/bloc`,
	flag = 'wonder',
	original = `${flag}.js`,
	backup = `${flag}.backup.js`

module.exports = {
	path,
	source,
	bloc: `${source}/bloc`,
	flag,
	original,
	backup,
	distribution,
	folders: {
		source: path.join(__dirname, source),
		bloc: path.join(__dirname, bloc),
		original: path.join(__dirname, bloc, original),
		backup: path.join(__dirname, bloc, backup),
		distribution: path.join(__dirname, distribution),
	},
	join: suffix => path.join(__dirname, suffix),
}
