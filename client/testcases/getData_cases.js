const { method } = require('../helpers/method.js');
const { response } = require('../helpers/response_payload.js');

const testcase = {
	description: '@GetData | Testing GRPC',
	method: `${method.main}/${method.sub.getData}`,
	scenario: {
		positive: {
			tag: '@Positive @Positive-GetData',
			expectation: `Should get GRPC response: 0 OK and get data user id: ${response.getData.positive.id}`
		}
	}
};

module.exports = { testcase };