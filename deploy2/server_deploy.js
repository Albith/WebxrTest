// import { PeerServer } from 'peer';

const { PeerServer } = require('peer');

const server = PeerServer({port: 9001, path: '/deploy'});

server.listen(9000);