const chai = require('chai');
const expect = chai.expect;
const { client, options } = require('../connector/request_handler.js');
const { request } = require('../helpers/request_payload.js');
const { response } = require('../helpers/response_payload.js');
const { testcase } = require('../testcases/getAllData_cases.js');

describe(`${testcase.description}`, function () {
	describe(`${testcase.method} | ${testcase.scenario.positive.tag} | ${testcase.method}`, function () {
		it(`${testcase.scenario.positive.expectation}`, async function () {
			const result = await client.getAllDataSync(request.getAllData, options);
			expect(result.datas.length).to.be.greaterThan(response.getAllData.positive.count, result.datas.length);
		});
	});
});