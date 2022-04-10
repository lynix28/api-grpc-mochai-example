const chai = require('chai');
const expect = chai.expect;
const { client, options } = require('../connector/request_handler.js');
const { request } = require('../helpers/request_payload.js');
const { response } = require('../helpers/response_payload.js');
const { testcase } = require('../testcases/getData_cases.js');

describe(`${testcase.description}`, function() {
	describe(`${testcase.method} | ${testcase.scenario.positive.tag} | ${testcase.method}`, function() {
		it(`${testcase.scenario.positive.expectation}`, async function() {
			const result = await client.getDataSync(request.getData.positive, options);
			expect(result.id).to.be.equal(response.getData.positive.id, result.id);
			expect(result.firstName).to.be.equal(response.getData.positive.firstName, result.firstName);
		});
	});
});