/**
 * BaaSCaradhrasAPIDocumentationLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of MPaymentsV1
 */
class MPaymentsV1 extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.idAccount = this.constructor.getValue(obj.idAccount);
        this.idAdjustment = this.constructor.getValue(obj.idAdjustment);
        this.barCodeNumber = this.constructor.getValue(obj.barCodeNumber);
        this.dueDate = this.constructor.getValue(obj.dueDate);
        this.description = this.constructor.getValue(obj.description);
        this.assignor = this.constructor.getValue(obj.assignor);
        this.assignorDocument = this.constructor.getValue(obj.assignorDocument);
        this.discount = this.constructor.getValue(obj.discount);
        this.interest = this.constructor.getValue(obj.interest);
        this.fine = this.constructor.getValue(obj.fine);
        this.amount = this.constructor.getValue(obj.amount);
        this.transactionCode = this.constructor.getValue(obj.transactionCode);
        this.transactionDate = this.constructor.getValue(obj.transactionDate);
        this.idPaymentConfirmation = this.constructor.getValue(obj.idPaymentConfirmation);
        this.status = this.constructor.getValue(obj.status);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'idAccount', realName: 'idAccount' },
            { name: 'idAdjustment', realName: 'idAdjustment' },
            { name: 'barCodeNumber', realName: 'barCodeNumber' },
            { name: 'dueDate', realName: 'dueDate' },
            { name: 'description', realName: 'description' },
            { name: 'assignor', realName: 'assignor' },
            { name: 'assignorDocument', realName: 'assignorDocument' },
            { name: 'discount', realName: 'discount' },
            { name: 'interest', realName: 'interest' },
            { name: 'fine', realName: 'fine' },
            { name: 'amount', realName: 'amount' },
            { name: 'transactionCode', realName: 'transactionCode' },
            { name: 'transactionDate', realName: 'transactionDate' },
            { name: 'idPaymentConfirmation', realName: 'idPaymentConfirmation' },
            { name: 'status', realName: 'status' },
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

module.exports = MPaymentsV1;
