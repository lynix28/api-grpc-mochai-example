const chai = require('chai');
const expect = chai.expect;
const { client, options } = require('../connector/request_handler.js');
const { request } = require('../helpers/request_payload.js');
const { response } = require('../helpers/response_payload.js');
const { testcase } = require('../testcases/deleteData_cases.js');

describe(`${testcase.description}`, function() {
	describe(`${testcase.method} | ${testcase.scenario.positive.tag} | ${testcase.method}`, function() {
		before(async function() {
			const list = await client.getAllDataSync(request.getAllData.positive, options);
			request.deleteData.positive.id = list.datas[2].id;
			response.deleteData.positive.before = list.datas.length;
		});
		it(`${testcase.scenario.positive.expectation}`, async function() {
			await client.deleteDataSync(request.deleteData.positive, options);

			const listAfter = await client.getAllDataSync(request.getAllData.positive, options);
			response.deleteData.positive.after = listAfter.datas.length;
			expect(listAfter.datas.length).to.be.greaterThan(response.deleteData.positive.min);
			expect(listAfter.datas.length).to.be.lessThan(response.deleteData.positive.max);
			expect(response.deleteData.positive.after).to.be.equal(response.deleteData.positive.after);
		});
	});
});