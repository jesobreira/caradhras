/**
 * BaaSCaradhrasAPIDocumentationLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Details
 */
class Details extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.originalName = this.constructor.getValue(obj.originalName || obj.OriginalName);
        this.sanctionName = this.constructor.getValue(obj.sanctionName || obj.SanctionName);
        this.nationalities = this.constructor.getValue(obj.nationalities || obj.Nationalities);
        this.languageSpoken = this.constructor.getValue(obj.languageSpoken || obj.language_spoken);
        this.height = this.constructor.getValue(obj.height);
        this.eyesColor = this.constructor.getValue(obj.eyesColor || obj.eyes_color);
        this.charges = this.constructor.getValue(obj.charges);
        this.image = this.constructor.getValue(obj.image);
        this.hairColor = this.constructor.getValue(obj.hairColor || obj.hair_color);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'originalName', realName: 'OriginalName' },
            { name: 'sanctionName', realName: 'SanctionName' },
            { name: 'nationalities', realName: 'Nationalities' },
            { name: 'languageSpoken', realName: 'language_spoken' },
            { name: 'height', realName: 'height' },
            { name: 'eyesColor', realName: 'eyes_color' },
            { name: 'charges', realName: 'charges' },
            { name: 'image', realName: 'image' },
            { name: 'hairColor', realName: 'hair_color' },
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

module.exports = Details;
