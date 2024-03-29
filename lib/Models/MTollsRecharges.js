/**
 * BaaSCaradhrasAPIDocumentationLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of MTollsRecharges
 */
class MTollsRecharges extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.transactionCode = this.constructor.getValue(obj.transactionCode);
        this.chargeDate = this.constructor.getValue(obj.chargeDate);
        this.cryptogram = this.constructor.getValue(obj.cryptogram);
        this.transactionNumber = this.constructor.getValue(obj.transactionNumber);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'transactionCode', realName: 'transactionCode' },
            { name: 'chargeDate', realName: 'chargeDate' },
            { name: 'cryptogram', realName: 'cryptogram' },
            { name: 'transactionNumber', realName: 'transactionNumber' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = MTollsRecharges;
