/**
 * BaaSCaradhrasAPIDocumentationLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of FixedAmount
 */
class FixedAmount extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.message = this.constructor.getValue(obj.message);
        this.amountKey = this.constructor.getValue(obj.amountKey || obj.amount_key);
        this.bonusInPercentage =
          this.constructor.getValue(obj.bonusInPercentage
     || obj.bonus_in_percentage);
        this.bonus = this.constructor.getValue(obj.bonus);
        this.paymentAmount = this.constructor.getValue(obj.paymentAmount || obj.payment_amount);
        this.bonusCategory = this.constructor.getValue(obj.bonusCategory || obj.bonus_category);
        this.expiryDate = this.constructor.getValue(obj.expiryDate || obj.expiry_date);
        this.bonusExpiryDate =
          this.constructor.getValue(obj.bonusExpiryDate
     || obj.bonus_expiry_date);
        this.amount = this.constructor.getValue(obj.amount);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'message', realName: 'message' },
            { name: 'amountKey', realName: 'amount_key' },
            { name: 'bonusInPercentage', realName: 'bonus_in_percentage' },
            { name: 'bonus', realName: 'bonus' },
            { name: 'paymentAmount', realName: 'payment_amount' },
            { name: 'bonusCategory', realName: 'bonus_category' },
            { name: 'expiryDate', realName: 'expiry_date' },
            { name: 'bonusExpiryDate', realName: 'bonus_expiry_date' },
            { name: 'amount', realName: 'amount' },
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

module.exports = FixedAmount;
