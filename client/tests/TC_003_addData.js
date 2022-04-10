const chai = require('chai');
const expect = chai.expect;
const { client, options } = require('../connector/request_handler.js');
const { request } = require('../helpers/request_payload.js');
const { response } = require('../helpers/response_payload.js');
const { testcase } = require('../testcases/addData_cases.js');

describe(`${testcase.description}`, function() {
	describe(`${testcase.method} | ${testcase.scenario.positive.tag} | ${testcase.method}`, function() {
		it(`${testcase.scenario.positive.expectation}`, async function() {
			const result = await client.addDataSync(request.addData.positive, options);
			expect(result.firstName).to.be.equal(response.addData.positive.firstName, result.firstName);
			expect(result.lastName).to.be.equal(response.addData.positive.lastName, result.lastName);
			expect(result.email).to.be.equal(response.addData.positive.email, result.email);
		});
	});
});