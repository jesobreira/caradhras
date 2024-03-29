/**
 * BaaSCaradhrasAPIDocumentationLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of MCartoes
 */
class MCartoes extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.content = this.constructor.getValue(obj.content);
        this.first = this.constructor.getValue(obj.first);
        this.firstPage = this.constructor.getValue(obj.firstPage);
        this.hasContent = this.constructor.getValue(obj.hasContent);
        this.hasNextPage = this.constructor.getValue(obj.hasNextPage);
        this.hasPreviousPage = this.constructor.getValue(obj.hasPreviousPage);
        this.last = this.constructor.getValue(obj.last);
        this.nextPage = this.constructor.getValue(obj.nextPage);
        this.number = this.constructor.getValue(obj.number);
        this.numberOfElements = this.constructor.getValue(obj.numberOfElements);
        this.previousPage = this.constructor.getValue(obj.previousPage);
        this.size = this.constructor.getValue(obj.size);
        this.totalElements = this.constructor.getValue(obj.totalElements);
        this.totalPages = this.constructor.getValue(obj.totalPages);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'content', realName: 'content', array: true, type: 'Content7' },
            { name: 'first', realName: 'first' },
            { name: 'firstPage', realName: 'firstPage' },
            { name: 'hasContent', realName: 'hasContent' },
            { name: 'hasNextPage', realName: 'hasNextPage' },
            { name: 'hasPreviousPage', realName: 'hasPreviousPage' },
            { name: 'last', realName: 'last' },
            { name: 'nextPage', realName: 'nextPage' },
            { name: 'number', realName: 'number' },
            { name: 'numberOfElements', realName: 'numberOfElements' },
            { name: 'previousPage', realName: 'previousPage' },
            { name: 'size', realName: 'size' },
            { name: 'totalElements', realName: 'totalElements' },
            { name: 'totalPages', realName: 'totalPages' },
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

module.exports = MCartoes;
