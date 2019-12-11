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

const controller = testerlib.ControlAccountController;
const MContasIdVinculos = testerlib.MContasIdVinculos;
const MContasIdVinculosrequest = testerlib.MContasIdVinculosrequest;
const MContasIdVinculosTipos = testerlib.MContasIdVinculosTipos;
const MContasVinculosTiposrequest = testerlib.MContasVinculosTiposrequest;
const MContasIdAtribuirCartaoPrepagoRequest = testerlib.MContasIdAtribuirCartaoPrepagoRequest;
const MContasIdVinculos1 = testerlib.MContasIdVinculos1;
const MContasIdVinculosTipos1 = testerlib.MContasIdVinculosTipos1;

describe("ControlAccountController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * <p>This feature allows you to register an account and link it with a master account. A master account may have more than one control account linked to it. An account cannot be linked to more than one master account, unless the <code>idTipoVinculo</code> is different.</p>

     */
    it("should testMContasVinculosTipos response", function testMContasVinculosTiposTest(done) {
        // parameters for the API call
        let authorization = '{{tokenOauth}}';
        let contentType = 'application/json';
        let body = baseController.getObjectMapper().mapObject({
  "descricao": "vínculo para controle de contas"
}, 'MContasVinculosTiposrequest');

        controller.createContasVinculosTipos(authorization, contentType, body, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            // test headers
            let headers = [];
            headers['Content-Type'] = null;
            headers['Content-Length'] = null;
            headers['Connection'] = null;
            headers['Date'] = null;
            headers['x-amzn-RequestId'] = null;
            headers['Access-Control-Allow-Origin'] = null;
            headers['Access-Control-Allow-Headers'] = null;
            headers['x-amzn-Remapped-Connection'] = null;
            headers['x-amz-apigw-id'] = null;
            headers['x-amzn-Remapped-Server'] = null;
            headers['Access-Control-Allow-Methods'] = null;
            headers['x-amzn-Remapped-Date'] = null;
            headers['X-Application-Context'] = null;
            headers['Access-Control-Max-Age'] = null;
            headers['Access-Control-Allow-Credentials'] = null;
            headers['X-Cache'] = null;
            headers['Via'] = null;
            headers['X-Amz-Cf-Id'] = null;
            assert.isTrue(TestHelper.areHeadersProperSubsetOf(headers, context.response.headers, true));
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {
  "id": 1,
  "descricao": "vínculo para controle de contas"
}, false, true, false));
            done();
        }).catch(() => undefined);
    });

    /**
     * <p>This feature allows you to list the accounts that are linked to the master account.</p>

     */
    it("should testMContasIdVinculos response", function testMContasIdVinculosTest(done) {
        // parameters for the API call
        let idConta = '';
        let idTipoVinculo = '';
        let authorization = '{{tokenOauth}}';
        let contentType = 'application/json';

        controller.getContasIdVinculos(idConta, idTipoVinculo, authorization, contentType, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            // test headers
            let headers = [];
            headers['Content-Type'] = null;
            headers['Content-Length'] = null;
            headers['Connection'] = null;
            headers['Date'] = null;
            headers['x-amzn-RequestId'] = null;
            headers['Access-Control-Allow-Origin'] = null;
            headers['Access-Control-Allow-Headers'] = null;
            headers['x-amzn-Remapped-Connection'] = null;
            headers['x-amz-apigw-id'] = null;
            headers['x-amzn-Remapped-Server'] = null;
            headers['Access-Control-Allow-Methods'] = null;
            headers['x-amzn-Remapped-Date'] = null;
            headers['X-Application-Context'] = null;
            headers['Access-Control-Max-Age'] = null;
            headers['Access-Control-Allow-Credentials'] = null;
            headers['X-Cache'] = null;
            headers['Via'] = null;
            headers['X-Amz-Cf-Id'] = null;
            assert.isTrue(TestHelper.areHeadersProperSubsetOf(headers, context.response.headers, true));
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {
  "content": [
    {
      "id": 1,
      "idConta": 2,
      "idContaPai": 1,
      "idTipoVinculo": 1
    },
    {
      "id": 3,
      "idConta": 5,
      "idContaPai": 1,
      "idTipoVinculo": 1
    }
  ],
  "first": true,
  "firstPage": true,
  "hasContent": true,
  "hasNextPage": false,
  "hasPreviousPage": false,
  "last": true,
  "nextPage": 0,
  "number": 0,
  "numberOfElements": 2,
  "previousPage": 0,
  "size": 2,
  "totalElements": 2,
  "totalPages": 1
}, false, true, false));
            done();
        }).catch(() => undefined);
    });

    /**
     * <p>This feature allows you to list the accounts that are linked to the master account.</p>

     */
    it("should testMContasIdVinculoTipos response", function testMContasIdVinculoTiposTest(done) {
        // parameters for the API call
        let authorization = '{{tokenOauth}}';
        let contentType = 'application/json';

        controller.getContasIdVinculoTipos(authorization, contentType, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            // test headers
            let headers = [];
            headers['Content-Type'] = null;
            headers['Content-Length'] = null;
            headers['Connection'] = null;
            headers['Date'] = null;
            headers['x-amzn-RequestId'] = null;
            headers['Access-Control-Allow-Origin'] = null;
            headers['Access-Control-Allow-Headers'] = null;
            headers['x-amzn-Remapped-Connection'] = null;
            headers['x-amz-apigw-id'] = null;
            headers['x-amzn-Remapped-Server'] = null;
            headers['Access-Control-Allow-Methods'] = null;
            headers['x-amzn-Remapped-Date'] = null;
            headers['X-Application-Context'] = null;
            headers['Access-Control-Max-Age'] = null;
            headers['Access-Control-Allow-Credentials'] = null;
            headers['X-Cache'] = null;
            headers['Via'] = null;
            headers['X-Amz-Cf-Id'] = null;
            assert.isTrue(TestHelper.areHeadersProperSubsetOf(headers, context.response.headers, true));
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {
  "content": [
    {
      "id": 1,
      "descricao": "Vínculo para controle de contas"
    }
  ],
  "first": true,
  "firstPage": true,
  "hasContent": true,
  "hasNextPage": false,
  "hasPreviousPage": false,
  "last": true,
  "nextPage": 0,
  "number": 0,
  "numberOfElements": 2,
  "previousPage": 0,
  "size": 2,
  "totalElements": 2,
  "totalPages": 1
}, false, true, false));
            done();
        }).catch(() => undefined);
    });
});