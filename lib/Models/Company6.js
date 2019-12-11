/**
 * BaaSCaradhrasAPIDocumentationLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Company6
 */
class Company6 extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.stateRegistration = this.constructor.getValue(obj.stateRegistration);
        this.partnerChangeInLastTwelveMonths =
          this.constructor.getValue(obj.partnerChangeInLastTwelveMonths);
        this.cnaes = this.constructor.getValue(obj.cnaes);
        this.addresses = this.constructor.getValue(obj.addresses);
        this.establishmentDate = this.constructor.getValue(obj.establishmentDate);
        this.mainPhone = this.constructor.getValue(obj.mainPhone);
        this.legalStatus = this.constructor.getValue(obj.legalStatus);
        this.phones = this.constructor.getValue(obj.phones);
        this.mainAddress = this.constructor.getValue(obj.mainAddress);
        this.nationalRegistration = this.constructor.getValue(obj.nationalRegistration);
        this.establishmentFormat = this.constructor.getValue(obj.establishmentFormat);
        this.legalName = this.constructor.getValue(obj.legalName);
        this.tradeName = this.constructor.getValue(obj.tradeName);
        this.revenue = this.constructor.getValue(obj.revenue);
        this.partners = this.constructor.getValue(obj.partners);
        this.legalNature = this.constructor.getValue(obj.legalNature);
        this.email = this.constructor.getValue(obj.email);
        this.mainCnae = this.constructor.getValue(obj.mainCnae);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'stateRegistration', realName: 'stateRegistration' },
            {
                name: 'partnerChangeInLastTwelveMonths',
                realName: 'partnerChangeInLastTwelveMonths',
            },
            { name: 'cnaes', realName: 'cnaes', array: true },
            { name: 'addresses', realName: 'addresses', array: true, type: 'Address' },
            { name: 'establishmentDate', realName: 'establishmentDate' },
            { name: 'mainPhone', realName: 'mainPhone', type: 'MainPhone' },
            { name: 'legalStatus', realName: 'legalStatus' },
            { name: 'phones', realName: 'phones', array: true, type: 'Phone' },
            { name: 'mainAddress', realName: 'mainAddress', type: 'MainAddress' },
            { name: 'nationalRegistration', realName: 'nationalRegistration' },
            { name: 'establishmentFormat', realName: 'establishmentFormat' },
            { name: 'legalName', realName: 'legalName' },
            { name: 'tradeName', realName: 'tradeName' },
            { name: 'revenue', realName: 'revenue' },
            { name: 'partners', realName: 'partners', type: 'Partners3' },
            { name: 'legalNature', realName: 'legalNature' },
            { name: 'email', realName: 'email' },
            { name: 'mainCnae', realName: 'mainCnae' },
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

module.exports = Company6;