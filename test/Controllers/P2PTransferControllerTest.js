/**
 * BaaSCaradhrasAPIDocumentationLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const chai = require('chai');
const assert = chai.assert;
const TestHelper = require("../TestHelper");
const APIHelper = require("../../lib/APIHelper");
const testerlib = require("../../lib");
const testConfiguration = require("../TestBootstrap");
const baseController = require("../../lib/Controllers/BaseController");

const controller = testerlib.P2PTransferController;
const MP2ptransfer = testerlib.MP2ptransfer;
const MP2ptransferrequest = testerlib.MP2ptransferrequest;
const MP2ptransferDetailsIdAccount = testerlib.MP2ptransferDetailsIdAccount;
const MP2ptransferDetailsIdAccount1 = testerlib.MP2ptransferDetailsIdAccount1;
const MP2ptransferAdjustmentIdAdjustment = testerlib.MP2ptransferAdjustmentIdAdjustment;

describe("P2PTransferController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * <p>P2P transfer</p>

     */
    it("should testMP2ptransfer response", function testMP2ptransferTest(done) {
        // parameters for the API call
        let authorization = '{{tokenOauth}}';
        let contentType = 'application/json';
        let backTransactionUUID = 'true or false';
        let transactionUUID = 'Customized UUID';
        let body = baseController.getObjectMapper().mapObject({
  "originalAccount": 10057584,
  "destinationAccount": 18,
  "amount": 14.08,
  "description": "P2P Transfer Description"
}, 'MP2ptransferrequest');

        controller.createP2ptransfer(authorization, contentType, backTransactionUUID, transactionUUID, body, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            // test headers
            let headers = [];
            headers['Content-Type'] = null;
            headers['Content-Length'] = null;
            headers['Connection'] = null;
            headers['Date'] = null;
            headers['x-amzn-RequestId'] = null;
            headers['x-amzn-Remapped-Content-Length'] = null;
            headers['x-amz-apigw-id'] = null;
            headers['X-Amzn-Trace-Id'] = null;
            headers['X-Cache'] = null;
            headers['Via'] = null;
            headers['X-Amz-Cf-Id'] = null;
            assert.isTrue(TestHelper.areHeadersProperSubsetOf(headers, context.response.headers, true));
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {
  "transactionCode": "354106927-6263-866296868 405793-568091-766016",
  "originalAccount": 10057584,
  "destinationAccount": 18,
  "amount": 14.08,
  "transactionDate": "2019-06-27T16: 36: 20.243",
  "description": "P2P Transfer Description",
  "idAdjustment": 22865,
  "idIssuer": 103,
  "idAdjustmentDestination": 22867
}, false, true, false));
            done();
        }).catch(() => undefined);
    });

    /**
     * <p>Find a p2pTransfer recipient by the idAccount</p>

     */
    it("should testMP2ptransferDetailsIdAccount response", function testMP2ptransferDetailsIdAccountTest(done) {
        // parameters for the API call
        let idAccount = 10057584;
        let contentType = 'application/json';
        let authorization = '{{tokenOauth}}';

        controller.getP2ptransferDetailsIdAccount(idAccount, contentType, authorization, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            // test headers
            let headers = [];
            headers['Content-Type'] = null;
            headers['Content-Length'] = null;
            headers['Connection'] = null;
            headers['Date'] = null;
            headers['x-amzn-RequestId'] = null;
            headers['Content-Encoding'] = null;
            headers['x-amz-apigw-id'] = null;
            headers['X-Amzn-Trace-Id'] = null;
            headers['X-Cache'] = null;
            headers['Via'] = null;
            headers['X-Amz-Cf-Id'] = null;
            assert.isTrue(TestHelper.areHeadersProperSubsetOf(headers, context.response.headers, true));
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isArrayOfJsonObjectsProperSubsetOf(context.response.body, [
  {
    "id": 83313,
    "transactionCode": "222324791-3349-172121486 344648-478826-520103",
    "originalAccount": 10057584,
    "destinationAccount": 18,
    "amount": "54.38",
    "date": "2019-02-25T23: 00: 28.615",
    "description": "P2P Transfer Description - 54.38",
    "idAdjustment": 6419,
    "idIssuer": 103,
    "transactionTariffCode": ""
  },
  {
    "id": 82580,
    "transactionCode": "130632081-9812-349054473 063670-675406-986278",
    "originalAccount": 10057584,
    "destinationAccount": 18,
    "amount": "14.08",
    "date": "2019-02-18T22: 58: 08.743",
    "description": "P2P Transfer Description",
    "idAdjustment": 6237,
    "idIssuer": 103,
    "transactionTariffCode": ""
  }
], false, true, false));
            done();
        }).catch(() => undefined);
    });

    /**
     * <p>Find a p2pTransfer by its transactionUUID</p>

     */
    it("should testMP2ptransferTransactionUUID response", function testMP2ptransferTransactionUUIDTest(done) {
        // parameters for the API call
        let contentType = 'application/json';
        let authorization = '{{tokenOauth}}';

        controller.getP2ptransferTransactionUUID(contentType, authorization, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            // test headers
            let headers = [];
            headers['Content-Type'] = null;
            headers['Content-Length'] = null;
            headers['Connection'] = null;
            headers['Date'] = null;
            headers['x-amzn-RequestId'] = null;
            headers['Content-Encoding'] = null;
            headers['x-amz-apigw-id'] = null;
            headers['X-Amzn-Trace-Id'] = null;
            headers['X-Cache'] = null;
            headers['Via'] = null;
            headers['X-Amz-Cf-Id'] = null;
            assert.isTrue(TestHelper.areHeadersProperSubsetOf(headers, context.response.headers, true));
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {
  "transactionUUID": "050c60dc-b1be-48ae-bb4d-042ad8082708",
  "transactionCode": "111562861-3257-697113182 959797-657597-535172",
  "originalAccount": 10057584,
  "destinationAccount": 18,
  "amount": 140000000.08,
  "transactionDate": "2019-10-04T20: 16: 11.617",
  "description": "Description P2P",
  "idAdjustment": 0,
  "idIssuer": 109,
  "status": "DENIED",
  "cause": "SALDO INSUFICIENTE NA CONTA PARA REALIZAR A TRANSFERÊNCIA.",
  "idAdjustmentDestination": 0
}, false, true, false));
            done();
        }).catch(() => undefined);
    });

    /**
     * <p>Find a p2pTransfer recipient by the idAccount</p>

     */
    it("should testMP2ptransfer1 response", function testMP2ptransfer1Test(done) {
        // parameters for the API call
        let originalAccount = 18;
        let destinationAccount = 15;
        let amount = 10;
        let initialDate = '2019-08-29 15:58:01';
        let finalDate = '2019-08-29 16:04:01';
        let status = 'APPROVED';
        let sortField = 'initialDate';
        let order = 'DESC';
        let pagination = 0;
        let amountPerPage = 1;
        let contentType = 'application/json';
        let authorization = '{{tokenOauth}}';

        controller.getP2ptransfer(originalAccount, destinationAccount, amount, initialDate, finalDate, status, sortField, order, pagination, amountPerPage, contentType, authorization, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            // test headers
            let headers = [];
            headers['Content-Type'] = null;
            headers['Content-Length'] = null;
            headers['Connection'] = null;
            headers['Date'] = null;
            headers['x-amzn-RequestId'] = null;
            headers['Content-Encoding'] = null;
            headers['x-amz-apigw-id'] = null;
            headers['X-Amzn-Trace-Id'] = null;
            headers['X-Cache'] = null;
            headers['Via'] = null;
            headers['X-Amz-Cf-Id'] = null;
            assert.isTrue(TestHelper.areHeadersProperSubsetOf(headers, context.response.headers, true));
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {
  "transactionUUID": "050c60dc-b1be-48ae-bb4d-042ad8082708",
  "transactionCode": "111562861-3257-697113182 959797-657597-535172",
  "originalAccount": 10057584,
  "destinationAccount": 18,
  "amount": 140000000.08,
  "transactionDate": "2019-10-04T20: 16: 11.617",
  "description": "Description P2P",
  "idAdjustment": 0,
  "idIssuer": 109,
  "status": "DENIED",
  "cause": "SALDO INSUFICIENTE NA CONTA PARA REALIZAR A TRANSFERÊNCIA.",
  "idAdjustmentDestination": 0
}, false, true, false));
            done();
        }).catch(() => undefined);
    });

    /**
     * <p>Find a p2pTransfer recipient by the idAdjustment. </p>
<p><code>idAdjustment</code>: referred as an unique number in the /transacoes or /timeline endpoints as the <code>ìdEventoAjuste</code></p>

     */
    it("should testMP2ptransferAdjustmentIdAdjustment response", function testMP2ptransferAdjustmentIdAdjustmentTest(done) {
        // parameters for the API call
        let contentType = 'application/json';
        let authorization = '{{tokenOauth}}';

        controller.getP2ptransferAdjustmentIdAdjustment(contentType, authorization, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            // test headers
            let headers = [];
            headers['Content-Type'] = null;
            headers['Content-Length'] = null;
            headers['Connection'] = null;
            headers['Date'] = null;
            headers['x-amzn-RequestId'] = null;
            headers['x-amzn-Remapped-Content-Length'] = null;
            headers['x-amz-apigw-id'] = null;
            headers['X-Amzn-Trace-Id'] = null;
            headers['X-Cache'] = null;
            headers['Via'] = null;
            headers['X-Amz-Cf-Id'] = null;
            assert.isTrue(TestHelper.areHeadersProperSubsetOf(headers, context.response.headers, true));
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {
  "id": 83313,
  "transactionCode": "222324791-3349-172121486 344648-478826-520103",
  "originalAccount": 10057584,
  "destinationAccount": 18,
  "amount": "54.38",
  "date": "2019-02-25T23: 00: 28.615+00: 00",
  "description": "P2P Transfer Description - 54.38",
  "idAdjustment": 6419,
  "idIssuer": 103,
  "tpAdjustment": "D",
  "transactionTariffCode": ""
}, false, true, false));
            done();
        }).catch(() => undefined);
    });
});