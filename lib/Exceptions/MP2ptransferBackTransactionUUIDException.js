/**
 * BaaSCaradhrasAPIDocumentationLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const APIException = require('./APIException');

/**
 * Creates an instance of MP2ptransferBackTransactionUUIDException
 */
class MP2ptransferBackTransactionUUIDException extends APIException {
    /**
     * @constructor
     */
    constructor() {
        super();
        /**
         * TODO: Write general description for this field
         */
        this.transactionUUID = null;

        /**
         * TODO: Write general description for this field
         */
        this.message = null;
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'transactionUUID', realName: 'transactionUUID' },
            { name: 'message', realName: 'message' },
        ]);
    }
}

module.exports = MP2ptransferBackTransactionUUIDException;
