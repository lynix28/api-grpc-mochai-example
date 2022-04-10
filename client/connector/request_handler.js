const GRPCClient = require('../helpers/grpc_client.js');
const PROTO_PATH = 'client/helpers/testing.proto';
const BASE_URL = 'localhost:50051';

const client = new GRPCClient(PROTO_PATH, 'TestPackage', 'TestService', BASE_URL);
const options = {
	metadata: {}
};

module.exports = { client, options };