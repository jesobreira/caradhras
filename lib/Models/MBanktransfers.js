/**
 * BaaSCaradhrasAPIDocumentationLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of MBanktransfers
 */
class MBanktransfers extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.idOriginAccount = this.constructor.getValue(obj.idOriginAccount);
        this.subIssuerCode = this.constructor.getValue(obj.subIssuerCode);
        this.description = this.constructor.getValue(obj.description);
        this.identificator = this.constructor.getValue(obj.identificator);
        this.beneficiary = this.constructor.getValue(obj.beneficiary);
        this.value = this.constructor.getValue(obj.value);
        this.idIssuer = this.constructor.getValue(obj.idIssuer);
        this.uID = this.constructor.getValue(obj.uID || obj.UID);
        this.date = this.constructor.getValue(obj.date);
        this.transactionCode = this.constructor.getValue(obj.transactionCode);
        this.idAdjustment = this.constructor.getValue(obj.idAdjustment);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'idOriginAccount', realName: 'idOriginAccount' },
            { name: 'subIssuerCode', realName: 'subIssuerCode' },
            { name: 'description', realName: 'description' },
            { name: 'identificator', realName: 'identificator' },
            { name: 'beneficiary', realName: 'beneficiary', type: 'Beneficiary' },
            { name: 'value', realName: 'value' },
            { name: 'idIssuer', realName: 'idIssuer' },
            { name: 'uID', realName: 'UID' },
            { name: 'date', realName: 'date' },
            { name: 'transactionCode', realName: 'transactionCode' },
            { name: 'idAdjustment', realName: 'idAdjustment' },
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

module.exports = MBanktransfers;