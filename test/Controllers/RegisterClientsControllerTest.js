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

const controller = testerlib.RegisterClientsController;
const MEnderecos = testerlib.MEnderecos;
const MEnderecosId = testerlib.MEnderecosId;
const MEnderecosId2 = testerlib.MEnderecosId2;
const MTelefones = testerlib.MTelefones;
const MTelefonesId = testerlib.MTelefonesId;
const MTelefones1 = testerlib.MTelefones1;
const MEnderecosCorrespondenciaId = testerlib.MEnderecosCorrespondenciaId;

describe("RegisterClientsController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * <p>This resource allows to be created a new Address in the database of the Issuer.</p>
<p>A person is allow to register N address but it must have one primary as the correspondance. The flag <code>enderecoCorrespondencia</code> value <code>1</code> indicates the primary address.</p>

     */
    it("should testMEnderecos response", function testMEnderecosTest(done) {
        // parameters for the API call
        let idPessoa = 'Integer -Optional';
        let idTipoEndereco = 'Integer -Optional';
        let cep = 'String (9)-Optional';
        let logradouro = 'String(100) -Optional';
        let numero = 'Integer(20) -Optional';
        let complemento = 'String(30) -Optional';
        let pontoReferencia = 'String (50)-Optional';
        let bairro = 'String(80) -Optional';
        let cidade = 'String(60) -Optional';
        let uf = 'String(2) -Optional';
        let pais = 'String (30)-Optional';
        let authorization = '{{tokenOauth}}';

        controller.createEnderecos(idPessoa, idTipoEndereco, cep, logradouro, numero, complemento, pontoReferencia, bairro, cidade, uf, pais, authorization, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {
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
     * <p>This resource allows to retrieve a determined address using the address id code  (id).</p>

     */
    it("should testMEnderecosIdAddress response", function testMEnderecosIdAddressTest(done) {
        // parameters for the API call
        let authorization = '{{tokenOauth}}';

        controller.getEnderecosIdAddress(authorization, function callback(error, response, context) {
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
  "id": 1197,
  "idPessoa": 9897984,
  "idTipoEndereco": 1,
  "cep": "04472200",
  "logradouro": "Travessa Oceano",
  "numero": 10,
  "complemento": "",
  "pontoReferencia": "",
  "bairro": "Pinheiros",
  "cidade": "Sao Paulo",
  "uf": "SP",
  "pais": "Brasil",
  "dataInclusao": "2019-02-17T22: 55: 00Z",
  "dataUltimaAtualizacao": "2019-02-17T22: 55: 00Z",
  "flagCorrespondencia": true,
  "tempoResidenciaAnos": null,
  "tempoResidenciaMeses": null
}, false, true, false));
            done();
        }).catch(() => undefined);
    });

    /**
     * <p>This resource allows to be listed the addresses in the datababse of the Issuer.</p>

     */
    it("should testMEnderecos1 response", function testMEnderecos1Test(done) {
        // parameters for the API call
        let id = 'Integer (optional)';
        let idPessoa = 'Integer (optional)';
        let sort = 'Array [string] (optional)';
        let page = 'Integer (optional)';
        let limit = 'Integer (Default = 50 / Max = 50) (optional)';
        let idTipoEndereco = 'Integer (optional)';
        let cep = 'String (optional)';
        let logradouro = 'String (optional)';
        let numero = 'Integer (optional)';
        let complemento = 'String (optional)';
        let pontoReferencia = 'String (optional)';
        let bairro = 'String (optional)';
        let cidade = 'String (optional)';
        let uf = 'String (optional)';
        let pais = 'String (optional)';
        let dataInclusao = 'String (optional)';
        let dataUltimaAtualizacao = 'String (optional)';
        let authorization = '{{tokenOauth}}';

        controller.getEnderecos(id, idPessoa, sort, page, limit, idTipoEndereco, cep, logradouro, numero, complemento, pontoReferencia, bairro, cidade, uf, pais, dataInclusao, dataUltimaAtualizacao, authorization, function callback(error, response, context) {
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
  "id": 1197,
  "idPessoa": 9897984,
  "idTipoEndereco": 1,
  "cep": "04472200",
  "logradouro": "Travessa Oceano",
  "numero": 10,
  "complemento": "",
  "pontoReferencia": "",
  "bairro": "Pinheiros",
  "cidade": "Sao Paulo",
  "uf": "SP",
  "pais": "Brasil",
  "dataInclusao": "2019-02-17T22: 55: 00Z",
  "dataUltimaAtualizacao": "2019-02-17T22: 55: 00Z",
  "flagCorrespondencia": true,
  "tempoResidenciaAnos": null,
  "tempoResidenciaMeses": null
}, false, true, false));
            done();
        }).catch(() => undefined);
    });

    /**
     * <p>This resource allows to update a determined address using the address id code (id).</p>

     */
    it("should testMEnderecos2 response", function testMEnderecos2Test(done) {
        // parameters for the API call
        let id = 'Integer - Required';
        let idPessoa = 'Integer - Required';
        let idTipoEndereco = 'Integer - Required';
        let cep = 'String -Optional';
        let logradouro = 'String(100) -Optional';
        let numero = 'Integer -Optional';
        let complemento = 'String -Optional';
        let pontoReferencia = 'String -Optional';
        let bairro = 'String(80) -Optional';
        let cidade = 'String(60) -Optional';
        let uf = 'String(2) -Optional';
        let pais = 'String -Optional';
        let authorization = '{{tokenOauth}}';

        controller.updateEnderecos(id, idPessoa, idTipoEndereco, cep, logradouro, numero, complemento, pontoReferencia, bairro, cidade, uf, pais, authorization, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {
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
     * <p>This method allows to be created a new telephone in the database of the issuer.</p>

     */
    it("should testMTelefones response", function testMTelefonesTest(done) {
        // parameters for the API call
        let idPessoa = 'Integer -Optional';
        let idTipoTelefone = 'Integer-Optional';
        let ddd = 'String (4) -Optional';
        let telefone = 'String (10)-Optional';
        let ramal = 'String (10)-Optional';
        let authorization = '{{tokenOauth}}';

        controller.createTelefones(idPessoa, idTipoTelefone, ddd, telefone, ramal, authorization, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {
  "id": 0,
  "idTipoTelefone": 0,
  "idPessoa": 0,
  "ddd": "string",
  "telefone": "string",
  "ramal": "string",
  "status": 0
}, false, true, false));
            done();
        }).catch(() => undefined);
    });

    /**
     * <p>This method allows to retrieve a determined telephone using its identification code (id).</p>

     */
    it("should testMTelefonesId response", function testMTelefonesIdTest(done) {
        // parameters for the API call
        let authorization = '{{tokenOauth}}';

        controller.getTelefonesId(authorization, function callback(error, response, context) {
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
  "id": 1264,
  "idTipoTelefone": 1,
  "idPessoa": 9897984,
  "ddd": "011",
  "telefone": "987654321",
  "ramal": "",
  "status": 1
}, false, true, false));
            done();
        }).catch(() => undefined);
    });

    /**
     * <p>It lists all phone numbers</p>

     */
    it("should testMTelefones1 response", function testMTelefones1Test(done) {
        // parameters for the API call
        let id = 'Integer (optional)';
        let idpessoa = 'Integer (optional)';
        let idTipoTelefone = 'Integer (optional)';
        let sort = 'Array [string] (optional)';
        let page = 'Integer (optional)';
        let limit = 'Integer (Default = 50 / Max = 50) (optional)';
        let ddd = 'String (optional)';
        let telefone = 'String (optional)';
        let ramal = 'String (optional)';
        let status = 'Integer (optional)';
        let authorization = '{{tokenOauth}}';

        controller.getTelefones(id, idpessoa, idTipoTelefone, sort, page, limit, ddd, telefone, ramal, status, authorization, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {
  "content": [
    {
      "id": 0,
      "idTipoTelefone": 0,
      "idPessoa": 0,
      "ddd": "string",
      "telefone": "string",
      "ramal": "string",
      "status": 0
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
     * <p>This method allows to be updated a determined Telephone in the database of the issuer.</p>

     */
    it("should testMTelefones2 response", function testMTelefones2Test(done) {
        // parameters for the API call
        let id = 'Integer -Required';
        let idTipoTelefone = 'Integer -Optional';
        let ddd = 'String -Optional';
        let telefone = 'String -Optional';
        let ramal = 'String -Optional';
        let authorization = '{{tokenOauth}}';

        controller.updateTelefones(id, idTipoTelefone, ddd, telefone, ramal, authorization, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {
  "id": 0,
  "idTipoTelefone": 0,
  "idPessoa": 0,
  "ddd": "string",
  "telefone": "string",
  "ramal": "string",
  "status": 0
}, false, true, false));
            done();
        }).catch(() => undefined);
    });

});
