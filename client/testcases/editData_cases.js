const { method } = require('../helpers/method.js');
const { response } = require('../helpers/response_payload.js');

const testcase = {
	description: '@EditData | Testing GRPC',
	method: `${method.main}/${method.sub.editData}`,
	scenario: {
		positive: {
			tag: '@Positive @Positive-EditData',
			expectation: `Should get GRPC response: 0 OK and edit user detail to first name: ${response.editData.positive.firstName}`
		}
	}
};

module.exports = { testcase };