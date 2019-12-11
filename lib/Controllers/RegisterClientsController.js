/**
 * BaaSCaradhrasAPIDocumentationLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const _request = require('../Http/Client/RequestClient');
const _configuration = require('../configuration');
const _servers = require('../Servers');
const _apiHelper = require('../APIHelper');
const _baseController = require('./BaseController');

class RegisterClientsController {
    /**
     * <p>This resource allows to be created a new Address in the database of the Issuer.</p>
     * <p>A person is allow to register N address but it must have one primary as the
     * correspondance. The flag <code>enderecoCorrespondencia</code> value <code>1</code>
     * indicates the primary address.</p>
     *
     * @param {string} idPessoa TODO: type description here
     * @param {string} idTipoEndereco TODO: type description here
     * @param {string} cep TODO: type description here
     * @param {string} logradouro TODO: type description here
     * @param {string} numero TODO: type description here
     * @param {string} complemento TODO: type description here
     * @param {string} pontoReferencia TODO: type description here
     * @param {string} bairro TODO: type description here
     * @param {string} cidade TODO: type description here
     * @param {string} uf TODO: type description here
     * @param {string} pais TODO: type description here
     * @param {string} authorization TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createEnderecos(idPessoa,
        idTipoEndereco,
        cep,
        logradouro,
        numero,
        complemento,
        pontoReferencia,
        bairro,
        cidade,
        uf,
        pais,
        authorization,
        callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri(_servers.SERVER_3);

        const _pathUrl = '/enderecos';
        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            idPessoa,
            idTipoEndereco,
            cep,
            logradouro,
            numero,
            complemento,
            pontoReferencia,
            bairro,
            cidade,
            uf,
            pais,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            Authorization: authorization,
            'user-agent': 'APIMATIC 2.0',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    let parsed = JSON.parse(_response.body);
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'MEnderecos');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * <p>This resource allows to retrieve a determined address using the address id code  (id).
     * </p>
     *
     * @param {string} authorization TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getEnderecosIdAddress(authorization, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri(_servers.SERVER_3);

        const _pathUrl = '/enderecos/1197';
        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            Authorization: authorization,
            'user-agent': 'APIMATIC 2.0',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    let parsed = JSON.parse(_response.body);
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'MEnderecosId');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * <p>This resource allows to be listed the addresses in the datababse of the Issuer.</p>
     *
     * @param {string} id TODO: type description here
     * @param {string} idPessoa TODO: type description here
     * @param {string} sort TODO: type description here
     * @param {string} page TODO: type description here
     * @param {string} limit TODO: type description here
     * @param {string} idTipoEndereco TODO: type description here
     * @param {string} cep TODO: type description here
     * @param {string} logradouro TODO: type description here
     * @param {string} numero TODO: type description here
     * @param {string} complemento TODO: type description here
     * @param {string} pontoReferencia TODO: type description here
     * @param {string} bairro TODO: type description here
     * @param {string} cidade TODO: type description here
     * @param {string} uf TODO: type description here
     * @param {string} pais TODO: type description here
     * @param {string} dataInclusao TODO: type description here
     * @param {string} dataUltimaAtualizacao TODO: type description here
     * @param {string} authorization TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getEnderecos(id,
        idPessoa,
        sort,
        page,
        limit,
        idTipoEndereco,
        cep,
        logradouro,
        numero,
        complemento,
        pontoReferencia,
        bairro,
        cidade,
        uf,
        pais,
        dataInclusao,
        dataUltimaAtualizacao,
        authorization,
        callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri(_servers.SERVER_3);

        const _pathUrl = '/enderecos';
        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            id,
            idPessoa,
            sort,
            page,
            limit,
            idTipoEndereco,
            cep,
            logradouro,
            numero,
            complemento,
            pontoReferencia,
            bairro,
            cidade,
            uf,
            pais,
            dataInclusao,
            dataUltimaAtualizacao,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            Authorization: authorization,
            'user-agent': 'APIMATIC 2.0',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    let parsed = JSON.parse(_response.body);
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'MEnderecosId');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * <p>This resource allows to update a determined address using the address id code (id).
     * </p>
     *
     * @param {string} id TODO: type description here
     * @param {string} idPessoa TODO: type description here
     * @param {string} idTipoEndereco TODO: type description here
     * @param {string} cep TODO: type description here
     * @param {string} logradouro TODO: type description here
     * @param {string} numero TODO: type description here
     * @param {string} complemento TODO: type description here
     * @param {string} pontoReferencia TODO: type description here
     * @param {string} bairro TODO: type description here
     * @param {string} cidade TODO: type description here
     * @param {string} uf TODO: type description here
     * @param {string} pais TODO: type description here
     * @param {string} authorization TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateEnderecos(id,
        idPessoa,
        idTipoEndereco,
        cep,
        logradouro,
        numero,
        complemento,
        pontoReferencia,
        bairro,
        cidade,
        uf,
        pais,
        authorization,
        callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri(_servers.SERVER_3);

        const _pathUrl = '/enderecos';
        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            id,
            idPessoa,
            idTipoEndereco,
            cep,
            logradouro,
            numero,
            complemento,
            pontoReferencia,
            bairro,
            cidade,
            uf,
            pais,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            Authorization: authorization,
            'user-agent': 'APIMATIC 2.0',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'PUT',
            headers: _headers,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    let parsed = JSON.parse(_response.body);
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'MEnderecosId2');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * <p>This method allows to be created a new telephone in the database of the issuer.</p>
     *
     * @param {string} idPessoa TODO: type description here
     * @param {string} idTipoTelefone TODO: type description here
     * @param {string} ddd TODO: type description here
     * @param {string} telefone TODO: type description here
     * @param {string} ramal TODO: type description here
     * @param {string} authorization TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createTelefones(idPessoa,
        idTipoTelefone,
        ddd,
        telefone,
        ramal,
        authorization,
        callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri(_servers.SERVER_3);

        const _pathUrl = '/telefones';
        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            idPessoa,
            idTipoTelefone,
            ddd,
            telefone,
            ramal,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            Authorization: authorization,
            'user-agent': 'APIMATIC 2.0',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    let parsed = JSON.parse(_response.body);
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'MTelefones');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * <p>This method allows to retrieve a determined telephone using its identification code
     * (id).</p>
     *
     * @param {string} authorization TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getTelefonesId(authorization, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri(_servers.SERVER_3);

        const _pathUrl = '/telefones/1264';
        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            Authorization: authorization,
            'user-agent': 'APIMATIC 2.0',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    let parsed = JSON.parse(_response.body);
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'MTelefonesId');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * <p>It lists all phone numbers</p>
     *
     * @param {string} id TODO: type description here
     * @param {string} idpessoa TODO: type description here
     * @param {string} idTipoTelefone TODO: type description here
     * @param {string} sort TODO: type description here
     * @param {string} page TODO: type description here
     * @param {string} limit TODO: type description here
     * @param {string} ddd TODO: type description here
     * @param {string} telefone TODO: type description here
     * @param {string} ramal TODO: type description here
     * @param {string} status TODO: type description here
     * @param {string} authorization TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getTelefones(id,
        idpessoa,
        idTipoTelefone,
        sort,
        page,
        limit,
        ddd,
        telefone,
        ramal,
        status,
        authorization,
        callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri(_servers.SERVER_3);

        const _pathUrl = '/telefones';
        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            id,
            idpessoa,
            idTipoTelefone,
            sort,
            page,
            limit,
            ddd,
            telefone,
            ramal,
            status,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            Authorization: authorization,
            'user-agent': 'APIMATIC 2.0',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    let parsed = JSON.parse(_response.body);
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'MTelefones1');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * <p>This method allows to be updated a determined Telephone in the database of the issuer.
     * </p>
     *
     * @param {string} id TODO: type description here
     * @param {string} idTipoTelefone TODO: type description here
     * @param {string} ddd TODO: type description here
     * @param {string} telefone TODO: type description here
     * @param {string} ramal TODO: type description here
     * @param {string} authorization TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateTelefones(id, idTipoTelefone, ddd, telefone, ramal, authorization, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri(_servers.SERVER_3);

        const _pathUrl = '/telefones';
        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            id,
            idTipoTelefone,
            ddd,
            telefone,
            ramal,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            Authorization: authorization,
            'user-agent': 'APIMATIC 2.0',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'PUT',
            headers: _headers,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    let parsed = JSON.parse(_response.body);
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'MTelefones');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * <p>This method allows the mailing address of a given account to be updated to the mailing
     * address informed.</p>
     *
     * @param {string} idConta TODO: type description here
     * @param {string} authorization TODO: type description here
     * @param {string} idAddress TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateEnderecosIdAddressAlterarEnderecoCorrespondencia(idConta,
        authorization,
        idAddress,
        callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri(_servers.SERVER_3);

        let _pathUrl = '/enderecos/{idAddress}/alterar-endereco-correspondencia';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            idAddress,
        });

        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            idConta,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            Authorization: authorization,
            'user-agent': 'APIMATIC 2.0',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'PUT',
            headers: _headers,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    let parsed = JSON.parse(_response.body);
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'MEnderecosCorrespondenciaId');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
}
module.exports = RegisterClientsController;