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

const controller = testerlib.BankTransfersController;
const MBanktransfers = testerlib.MBanktransfers;
const MBanktransfersAccountIdAccount = testerlib.MBanktransfersAccountIdAccount;

describe("BankTransfersController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * <p>Creates a bank transfer request.</p>
<blockquote>
<p>Check the documentation <a href="https://s3-sa-east-1.amazonaws.com/baas-docs.caradhras.io/StatusCode_BankTransfer.pdf">here</a> for additional information about BankTransfer errors status code.</p>
</blockquote>

     */
    it("should testMSingleIssuerBanktransfers response", function testMSingleIssuerBanktransfersTest(done) {
        // parameters for the API call
        let contentType = 'application/json';
        let authorization = '{{tokenOauth}}';
        let body = '{\n    "idOriginAccount": 10057584, \n    "identificator": 123, \n    Required - Identifier is free and can be filled with a number from 1 to 9 characters for the internal control of the SE\n    "subIssuerCode": "103", \n    Optional - Add the sub issuer number \n    This number shoud be consulted with the CDT project leader\n    "description": "Transferbank Description", \n    "beneficiary": {\n        "type": "fisico", \n        (type = “fisico” for PP, “juridico” for LP)\n        "docIdCpfCnpjEinSSN": 47989793091, \n        Add cpf (if type = \'fisico\') or cnpj (if type = \'juridico\')\n        "name": "Jose da Silva Neves", \n        "bankId": 237, \n        Add the bank\'s identification code according to FEBRABAN\n        "agency": 2309, \n        "agencyDigit": "", \n        "account": 121084, \n        "accountDigit": "8", \n        "accountType": "cc"\n        (accountType = "cc" for checking account, "pp" for savings account)\n    }, \n    "value": 5.55\n}\n\n\n\n';

        controller.createSingleIssuerBanktransfers(contentType, authorization, body, function callback(error, response, context) {
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
  "idOriginAccount": 10057584,
  "subIssuerCode": "103",
  "description": "Transferbank Description",
  "identificator": 123,
  "beneficiary": {
    "type": "fisico",
    "docIdCpfCnpjEinSSN": 47989793091,
    "name": "Jose da Silva Neves",
    "bankId": 237,
    "agency": 2309,
    "agencyDigit": "",
    "account": 121084,
    "accountDigit": "8",
    "accountType": "cc"
  },
  "value": 5.55,
  "idIssuer": 103,
  "UID": "103.cb1e1991-33b7-11e9-9111-02dec2710755",
  "date": "2019-02-18T17: 00: 12.585",
  "transactionCode": "769982744-9673-993539822 040370-459208-055886",
  "idAdjustment": 6229
}, false, true, false));
            done();
        }).catch(() => undefined);
    });

    /**
     * <p>List all banktransfer recipient by the idAccount</p>
<blockquote>
<p>Check the documentation <a href="https://s3-sa-east-1.amazonaws.com/baas-docs.caradhras.io/StatusCode_BankTransfer.pdf">here</a> for additional information about <code>StatusTransfer</code> and <code>BankTransfer errors status code</code>.</p>
</blockquote>

     */
    it("should testMSingleIssuerBanktransfersAccount response", function testMSingleIssuerBanktransfersAccountTest(done) {
        // parameters for the API call
        let contentType = 'application/json';
        let authorization = '{{tokenOauth}}';

        controller.getSingleIssuerBanktransfersAccount(contentType, authorization, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            // test headers
            let headers = [];
            headers['Content-Type'] = null;
            headers['Content-Length'] = null;
            headers['Connection'] = null;
            headers['Date'] = null;
            headers['x-amzn-RequestId'] = null;
            headers['x-amz-apigw-id'] = null;
            headers['X-Amzn-Trace-Id'] = null;
            headers['X-Cache'] = null;
            headers['Via'] = null;
            headers['X-Amz-Cf-Id'] = null;
            assert.isTrue(TestHelper.areHeadersProperSubsetOf(headers, context.response.headers, true));
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isArrayOfJsonObjectsProperSubsetOf(context.response.body, [
  {
    "id": 133642,
    "idAdjustment": 6403,
    "transactionCode": "981437625-2796-842582345 608030-281448-844182",
    "idIssuer": 103,
    "description": "Transferbank Description",
    "idOriginAccount": 10057584,
    "value": 5.55,
    "typeAccountFavored": "fisico",
    "nameFavored": "Jose da Silva Neves",
    "bankFavored": 237,
    "agencyFavored": 2309,
    "digitAgencyFavored": " ",
    "accountFavored": 121084,
    "digitAccountFavored": "8",
    "cnabFileName": "TED.JSON.20190225.153717.00047989793091",
    "statusTransfer": "WAITING_PROCESSING",
    "tariffCode": "",
    "transferenceDate": "2019-02-25T12: 37: 17.468",
    "transferSuccess": null,
    "codStatusTransfer": "-1",
    "uid": "103.3b3fa762-3913-11e9-9176-3e02b378094b",
    "cpfCnpjFavored": 47989793091
  },
  {
    "id": 133631,
    "idAdjustment": 6229,
    "transactionCode": "769982744-9673-993539822 040370-459208-055886",
    "idIssuer": 103,
    "description": "Transferbank Description",
    "idOriginAccount": 10057584,
    "value": 5.55,
    "typeAccountFavored": "fisico",
    "nameFavored": "Jose da Silva Neves",
    "bankFavored": 237,
    "agencyFavored": 2309,
    "digitAgencyFavored": " ",
    "accountFavored": 121084,
    "digitAccountFavored": "8",
    "cnabFileName": "TED.JSON.20190218.200009.00047989793091",
    "statusTransfer": "WAITING_PROCESSING",
    "tariffCode": "",
    "transferenceDate": "2019-02-18T17: 00: 12.585",
    "transferSuccess": null,
    "codStatusTransfer": "-1",
    "uid": "103.cb1e1991-33b7-11e9-9111-02dec2710755",
    "cpfCnpjFavored": 47989793091
  }
], false, true, false));
            done();
        }).catch(() => undefined);
    });
});