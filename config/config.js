module.exports = {
	development : {
		root: require('path').normalize(__dirname + '/..'),
		app: {
			name: 'NodeDuino Tutorial'
		},
		db: 'mongodb://localhost/nodeduino_dev'
	}
}