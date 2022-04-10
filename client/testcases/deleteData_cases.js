const { method } = require('../helpers/method.js');

const testcase = {
	description: '@DeleteData | Testing GRPC',
	method: `${method.main}/${method.sub.deleteData}`,
	scenario: {
		positive: {
			tag: '@Positive @Positive-DeleteData',
			expectation: 'Should get GRPC response: 0 OK'
		}
	}
};

module.exports = { testcase };