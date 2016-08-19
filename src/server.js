/*jslint node: true */
'use strict';

require('dotenv').config();

import Hapi from 'hapi';

const server = new Hapi.Server();
server.connection({port: 4000});

server.route([{
	method: 'GET',
	path: '/',
	handler: (request, reply) => {
		reply('Be Hapi!!');
	}
}]);

server.start(() => {
	console.log('Server running at: ', server.info.uri);
});
