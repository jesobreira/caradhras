/**
 * BaaSCaradhrasAPIDocumentationLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const servers = require('./Servers');
const environments = require('./Environments');
const apiHelper = require('./APIHelper');

const environmentsMap = [];

environmentsMap[environments.PRODUCTION] = [];

environmentsMap[environments.PRODUCTION][servers.SERVER_1] = 'https://auth.hml.caradhras.io/oauth2';
environmentsMap[environments.PRODUCTION][servers.SERVER_2] =
    'https://companies.hml.caradhras.io/v1';
environmentsMap[environments.PRODUCTION][servers.SERVER_3] = 'https://api.hml.caradhras.io';
environmentsMap[environments.PRODUCTION][servers.SERVER_4] =
    'http://api.hml.caradhras.io/contas/{id}/pessoas/{idPessoa}';
environmentsMap[environments.PRODUCTION][servers.SERVER_5] = 'https://tolls/recharges';
environmentsMap[environments.PRODUCTION][servers.SERVER_6] = 'https://payments.hml.caradhras.io';
environmentsMap[environments.PRODUCTION][servers.SERVER_7] = 'https://regdocs.hml.caradhras.io/v1';
environmentsMap[environments.PRODUCTION][servers.SERVER_8] = 'https://oneclick.caradhras.io/v1';

const Configuration = {
    // TODO: Replace the Username with an appropriate value
    username: 'TODO: Replace',

    // TODO: Replace the Password with an appropriate value
    password: 'TODO: Replace',

    /**
     * id
     * @type {string}
     */
    id: 'DefaultParameterValue',

    /**
     * idPessoa
     * @type {string}
     */
    idPessoa: 'DefaultParameterValue',

    /**
     * Current API environment
     * @type {string}
     */
    currentEnvironment: environments.PRODUCTION,

    /**
     * Get base URI for a server in the current API environment
     * @param  {string|null} server Server name
     * @return {string}             Base URI for server
     */
    getBaseUri(server) {
        const url = environmentsMap[this.currentEnvironment][server || servers.SERVER_1];
        const urlParams = {
            id: this.id,
            idPessoa: this.idPessoa,
        };
        return apiHelper.appendUrlWithTemplateParameters(url, urlParams);
    },
};

module.exports = Configuration;
