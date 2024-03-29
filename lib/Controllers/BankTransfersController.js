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

class BankTransfersController {
    /**
     * <p>Creates a bank transfer request.</p>
     * <blockquote>
     * <p>Check the documentation <a href="https://s3-sa-east-1.amazonaws.com/baas-docs.caradhras.
     * io/StatusCode_BankTransfer.pdf">here</a> for additional information about BankTransfer
     * errors status code.</p>
     * </blockquote>
     *
     * @param {string} contentType TODO: type description here
     * @param {string} authorization TODO: type description here
     * @param {string} body TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createSingleIssuerBanktransfers(contentType, authorization, body, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri(_servers.SERVER_3);

        const _pathUrl = '/single-issuer/banktransfer/transfer';
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
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'MBanktransfers');
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
     * <p>List all banktransfer recipient by the idAccount</p>
     * <blockquote>
     * <p>Check the documentation <a href="https://s3-sa-east-1.amazonaws.com/baas-docs.caradhras.
     * io/StatusCode_BankTransfer.pdf">here</a> for additional information about
     * <code>StatusTransfer</code> and <code>BankTransfer errors status code</code>.</p>
     * </blockquote>
     *
     * @param {string} contentType TODO: type description here
     * @param {string} authorization TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getSingleIssuerBanktransfersAccount(contentType, authorization, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri(_servers.SERVER_3);

        const _pathUrl = '/single-issuer/banktransfers/account';
        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'Content-Type': contentType,
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
                    parsed = parsed.map(model =>
                        _baseController.getObjectMapper().mapObject(model, 'MBanktransfersAccountIdAccount'));
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
module.exports = BankTransfersController;
