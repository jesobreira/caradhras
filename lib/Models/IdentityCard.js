/**
 * BaaSCaradhrasAPIDocumentationLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of IdentityCard
 */
class IdentityCard extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.number = this.constructor.getValue(obj.number);
        this.dispatcher = this.constructor.getValue(obj.dispatcher);
        this.federativeUnit = this.constructor.getValue(obj.federativeUnit);
        this.emissionDate = this.constructor.getValue(obj.emissionDate);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'number', realName: 'number' },
            { name: 'dispatcher', realName: 'dispatcher' },
            { name: 'federativeUnit', realName: 'federativeUnit' },
            { name: 'emissionDate', realName: 'emissionDate' },
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

module.exports = IdentityCard;