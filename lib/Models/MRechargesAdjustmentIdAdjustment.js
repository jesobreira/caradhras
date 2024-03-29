/**
 * BaaSCaradhrasAPIDocumentationLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of MRechargesAdjustmentIdAdjustment
 */
class MRechargesAdjustmentIdAdjustment extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.id = this.constructor.getValue(obj.id);
        this.accountId = this.constructor.getValue(obj.accountId);
        this.ddd = this.constructor.getValue(obj.ddd);
        this.phoneNumber = this.constructor.getValue(obj.phoneNumber);
        this.dealerCode = this.constructor.getValue(obj.dealerCode);
        this.amount = this.constructor.getValue(obj.amount);
        this.amountKey = this.constructor.getValue(obj.amountKey);
        this.idAdjustment = this.constructor.getValue(obj.idAdjustment);
        this.orderId = this.constructor.getValue(obj.orderId);
        this.transactionCode = this.constructor.getValue(obj.transactionCode);
        this.rechargeDate = this.constructor.getValue(obj.rechargeDate);
        this.idIssuer = this.constructor.getValue(obj.idIssuer);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'id', realName: 'id' },
            { name: 'accountId', realName: 'accountId' },
            { name: 'ddd', realName: 'ddd' },
            { name: 'phoneNumber', realName: 'phoneNumber' },
            { name: 'dealerCode', realName: 'dealerCode' },
            { name: 'amount', realName: 'amount' },
            { name: 'amountKey', realName: 'amountKey' },
            { name: 'idAdjustment', realName: 'idAdjustment' },
            { name: 'orderId', realName: 'orderId' },
            { name: 'transactionCode', realName: 'transactionCode' },
            { name: 'rechargeDate', realName: 'rechargeDate' },
            { name: 'idIssuer', realName: 'idIssuer' },
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

module.exports = MRechargesAdjustmentIdAdjustment;
