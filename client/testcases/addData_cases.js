const { method } = require('../helpers/method.js');
const { response } = require('../helpers/response_payload.js');

const testcase = {
	description: '@AddData | Testing GRPC',
	method: `${method.main}/${method.sub.addData}`,
	scenario: {
		positive: {
			tag: '@Positive @Positive-AddData',
			expectation: `Should get GRPC response: 0 OK and add new data user with first name: ${response.addData.positive.firstName}`
		}
	}
};

module.exports = { testcase };