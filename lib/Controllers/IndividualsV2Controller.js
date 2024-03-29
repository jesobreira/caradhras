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

class IndividualsV2Controller {
    /**
     * <p>Allow to create the register of a Physical Person, receiving in this operation all the
     * register dates which are necessary for this. Once created, it will allow the method Card
     * Creation for the client and their additionals.</p>
     * <blockquote>
     * <p>Check the documentation <a href="https://s3-sa-east-1.amazonaws.com/baas-docs.caradhras.
     * io/Fields_Register_Client.pdf">here</a> for additional information about
     * <code>identification fields</code>.</p>
     * <p>Check the documentation <a href="https://s3-sa-east-1.amazonaws.com/baas-docs.caradhras.
     * io/StatusCode_individual_account.pdf">here</a> for additional information about <code>Know
     * Your Client errors</code> and <code>errors status code</code>.</p>
     * </blockquote>
     * <blockquote>
     * <p>Check the FAQs below:</p>
     * <ul>
     * <li><a href="https://baas-cdt.zendesk.com/hc/pt-br/articles/360027496192">Why all accounts
     * should have card associated?</a></li>
     * </ul>
     * </blockquote>
     * <p>In some cases, the CPF does not exist in the database, then it is not possible to
     * validate any cadastral information. In order not to impact the user, the registration is
     * accepted even without automatic validation, but is sent for analysis that requires a
     * manual checks and take some action if necessary. In this case, the Partner is always
     * advised.</p>
     *
     * @param {string} contentType TODO: type description here
     * @param {string} authorization TODO: type description here
     * @param {string} body TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createIndividualsAccounts(contentType, authorization, body, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri(_servers.SERVER_3);

        const _pathUrl = '/v2/individuals/accounts';
        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'content-type': 'text/plain; charset=utf-8',
            'Content-Type': contentType,
            Authorization: authorization,
            'user-agent': 'APIMATIC 2.0',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: body,
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
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'MIndividualsAccounts');
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
     * <p>This method allows a new Physical Person to be registered in the Issuer database.</p>
     * <blockquote>
     * <p>Check the documentation <a href="https://s3-sa-east-1.amazonaws.com/baas-docs.caradhras.
     * io/Fields_Register_Client.pdf">here</a> for additional information about
     * <code>identification fields</code>.</p>
     * <p>Check the documentation <a href="https://s3-sa-east-1.amazonaws.com/baas-docs.caradhras.
     * io/StatusCode_individuals.pdf">here</a> for additional information about <code>Know Your
     * Client errors</code> and <code>errors status code</code>.</p>
     * </blockquote>
     * <p>In some cases, the CPF does not exist in the database, then it is not possible to
     * validate any cadastral information. In order not to impact the user, the registration is
     * accepted even without automatic validation, but is sent for analysis that requires a
     * manual checks and take some action if necessary. In this case, the Partner is always
     * advised.</p>
     *
     * @param {string} contentType TODO: type description here
     * @param {string} authorization TODO: type description here
     * @param {MIndividualsrequest} body TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createIndividuals(contentType, authorization, body, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri(_servers.SERVER_3);

        const _pathUrl = '/v2/individuals';
        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'Content-Type': contentType,
            Authorization: authorization,
            'user-agent': 'APIMATIC 2.0',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: _apiHelper.jsonSerialize(body),
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
                    parsed = _baseController.getObjectMapper()
                .mapObject(parsed, 'MIndividualsRegisteredUnderContingency');
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
     * <p>This method allows to list all the People existent in the database of the issuer.</p>
     *
     * @param {string} page TODO: type description here
     * @param {string} limit TODO: type description here
     * @param {string} document TODO: type description here
     * @param {string} authorization TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getIndividuals(page, limit, document, authorization, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri(_servers.SERVER_3);

        const _pathUrl = '/v2/individuals';
        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            page,
            limit,
            document,
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
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'MIndividuals');
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
     * <p>This method allows to be listed a specific person existent in the database of the
     * issuer.</p>
     *
     * @param {string} authorization TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getIndividualsId(authorization, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri(_servers.SERVER_3);

        const _pathUrl = '/v2/individuals/9911807';
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
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'MIndividualsId');
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
     * <p>This method allows to be updated in the base of the issuer a register of a determined
     * Person.</p>
     * <blockquote>
     * <p>Check the documentation <a href="https://s3-sa-east-1.amazonaws.com/baas-docs.caradhras.
     * io/Fields_Register_Client.pdf">here</a> for additional information about
     * <code>identification fields</code>.</p>
     * <p>Check the documentation <a href="https://s3-sa-east-1.amazonaws.com/baas-docs.caradhras.
     * io/StatusCode_individual_account.pdf">here</a> for additional information about <code>Know
     * Your Client errors</code> and <code>errors status code</code>.</p>
     * </blockquote>
     *
     * @param {string} authorization TODO: type description here
     * @param {string} contentType TODO: type description here
     * @param {string} body TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateIndividualsId(authorization, contentType, body, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri(_servers.SERVER_3);

        const _pathUrl = '/v2/individuals/103';
        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'content-type': 'text/plain; charset=utf-8',
            Authorization: authorization,
            'Content-Type': contentType,
            'user-agent': 'APIMATIC 2.0',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'PUT',
            headers: _headers,
            body: body,
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
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'MIndividualsId1');
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
     * <p>Allow to create the register of a Natural Person, receiving in this operation all the
     * register dates which are necessary for this and link it as an additional in a given
     * account</p>
     *
     * @param {string} contentType TODO: type description here
     * @param {string} authorization TODO: type description here
     * @param {MIndividualsAccountsAccountIdAdditionalsRequest} body TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createIndividualsAccountsAccountIdAdditionals(contentType,
        authorization,
        body,
        callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri(_servers.SERVER_3);

        const _pathUrl = '/v2/individuals/accounts/12/additionals';
        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'Content-Type': contentType,
            Authorization: authorization,
            'user-agent': 'APIMATIC 2.0',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: _apiHelper.jsonSerialize(body),
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
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'MIndividualsAccounts');
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
module.exports = IndividualsV2Controller;
