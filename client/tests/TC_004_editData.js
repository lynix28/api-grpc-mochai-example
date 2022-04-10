const chai = require('chai');
const expect = chai.expect;
const { client, options } = require('../connector/request_handler.js');
const { request } = require('../helpers/request_payload.js');
const { response } = require('../helpers/response_payload.js');
const { testcase } = require('../testcases/editData_cases.js');

describe(`${testcase.description}`, function() {
	describe(`${testcase.method} | ${testcase.scenario.positive.tag} | ${testcase.method}`, function() {
		before(async function() {
			const list = await client.getAllDataSync(request.getAllData.positive, options);
			request.editData.positive.id = list.datas[0].id;
		});
        
		it(`${testcase.scenario.positive.expectation}`, async function() {
			const result = await client.editDataSync(request.editData.positive, options);
			expect(result.firstName).to.be.equal(response.editData.positive.firstName, result.firstName);
			expect(result.lastName).to.be.equal(response.editData.positive.lastName, result.lastName);
			expect(result.email).to.be.equal(response.editData.positive.email, result.email);
		});
	});
});