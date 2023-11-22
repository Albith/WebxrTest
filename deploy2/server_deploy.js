// import { PeerServer } from 'peer';

const { PeerServer } = require('peer');

const server = PeerServer({port: 9001, path: '/'});

server.listen(9001);
