// This file is used to set dynamic routes which contain variables...

const routes = require('next-routes')();

// Defining a new route mapping...
routes.add('/campaigns/new', 'campaigns/new').add('/campaigns/:address', '/campaigns/show')
	.add('/campaigns/:address/requests','campaigns/requests/index')
	.add('/campaigns/:address/requests/new','campaigns/requests/new');

module.exports = routes;