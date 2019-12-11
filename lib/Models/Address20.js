/**
 * BaaSCaradhrasAPIDocumentationLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Address20
 */
class Address20 extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.idAddressType = this.constructor.getValue(obj.idAddressType);
        this.zipCode = this.constructor.getValue(obj.zipCode);
        this.street = this.constructor.getValue(obj.street);
        this.number = this.constructor.getValue(obj.number);
        this.complement = this.constructor.getValue(obj.complement);
        this.neighborhood = this.constructor.getValue(obj.neighborhood);
        this.city = this.constructor.getValue(obj.city);
        this.federativeUnit = this.constructor.getValue(obj.federativeUnit);
        this.country = this.constructor.getValue(obj.country);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'idAddressType', realName: 'idAddressType' },
            { name: 'zipCode', realName: 'zipCode' },
            { name: 'street', realName: 'street' },
            { name: 'number', realName: 'number' },
            { name: 'complement', realName: 'complement' },
            { name: 'neighborhood', realName: 'neighborhood' },
            { name: 'city', realName: 'city' },
            { name: 'federativeUnit', realName: 'federativeUnit' },
            { name: 'country', realName: 'country' },
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

module.exports = Address20;