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

const controller = testerlib.OthersController;
const MCeps = testerlib.MCeps;
const MBancos = testerlib.MBancos;
const MBancos1 = testerlib.MBancos1;
const MBancosrequest = testerlib.MBancosrequest;
const MBancosIdBank = testerlib.MBancosIdBank;

describe("OthersController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * <p>This resource allows consulting addresses through the CEP.</p>

     */
    it("should testMCeps response", function testMCepsTest(done) {
        // parameters for the API call
        let cEP = 'String - Required';
        let contentType = 'application/json';
        let authorization = '{{tokenOauth}}';

        controller.getCeps(cEP, contentType, authorization, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {
  "tempoResidenciaAnos": 0,
  "tempoResidenciaMeses": 0,
  "id": 0,
  "idPessoa": 0,
  "idTipoEndereco": 0,
  "cep": "string",
  "logradouro": "string",
  "numero": 0,
  "complemento": "string",
  "pontoReferencia": "string",
  "bairro": "string",
  "cidade": "string",
  "uf": "string",
  "pais": "string",
  "dataInclusao": "string",
  "dataUltimaAtualizacao": "string",
  "flagCorrespondencia": false
}, false, true, false));
            done();
        }).catch(() => undefined);
    });

    /**
     * <p>This resource lists all banks available for bank transfers.</p>

     */
    it("should testMBancos response", function testMBancosTest(done) {
        // parameters for the API call
        let page = 'Integer - Opitional';
        let contentType = 'application/json';
        let authorization = '{{tokenOauth}}';

        controller.getBancos(page, contentType, authorization, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {
  "content": [
    {
      "id": 0,
      "nome": "string",
      "descricao": "string",
      "digitoBanco": "string",
      "ispb": "string"
    }
  ],
  "first": true,
  "firstPage": true,
  "hasContent": true,
  "hasNextPage": true,
  "hasPreviousPage": true,
  "last": true,
  "nextPage": 0,
  "number": 0,
  "numberOfElements": 0,
  "previousPage": 0,
  "size": 0,
  "totalElements": 0,
  "totalPages": 0
}, false, true, false));
            done();
        }).catch(() => undefined);
    });

    /**
     * <p>Resource to save a new bank.</p>

     */
    it("should testMBancos1 response", function testMBancos1Test(done) {
        // parameters for the API call
        let contentType = 'application/json';
        let authorization = '{{tokenOauth}}';
        let body = baseController.getObjectMapper().mapObject({
  "nome": "string",
  "descricao": "string",
  "digitoBanco": "string",
  "codigoBanco": 0,
  "ispb": "string"
}, 'MBancosrequest');

        controller.createBancos(contentType, authorization, body, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {
  "id": 0,
  "nome": "string",
  "descricao": "string",
  "digitoBanco": "string",
  "ispb": "string"
}, false, true, false));
            done();
        }).catch(() => undefined);
    });

    /**
     * <p>This method allows to search a determined Bank starting from your ID code.</p>

     */
    it("should testMBancosIdBank response", function testMBancosIdBankTest(done) {
        controller.getBancosIdBank(function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {
  "id": 0,
  "nome": "string",
  "descricao": "string",
  "digitoBanco": "string",
  "ispb": "string"
}, false, true, false));
            done();
        }).catch(() => undefined);
    });
});