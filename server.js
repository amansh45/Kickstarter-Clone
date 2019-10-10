const { createServer } = require('http');
const next = require('next');

// dev tells whether we are running our server either in production or development mode
const app = next({
	dev: process.env.NODE_ENV != 'production'
});

const routes = require('./routes');

const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
	createServer(handler).listen(3000, err => {
		if(err) throw err;
		console.log('Ready on localhost:3000');
	});
});