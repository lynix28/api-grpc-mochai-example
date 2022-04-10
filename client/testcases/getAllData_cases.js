const { method } = require('../helpers/method.js');

const testcase = {
	description: '@GetAllData | Testing GRPC',
	method: `${method.main}/${method.sub.getAllData}`,
	scenario: {
		positive: {
			tag: '@Positive @Positive-GetAllData',
			expectation: 'Should get GRPC response: 0 OK and get user data list'
		}
	}
};

module.exports = { testcase };