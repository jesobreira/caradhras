/**
 * BaaSCaradhrasAPIDocumentationLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of MContasIdAccountGerarCartaoProvisorio
 */
class MContasIdAccountGerarCartaoProvisorio extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.flagVirtual = this.constructor.getValue(obj.flagVirtual);
        this.idConta = this.constructor.getValue(obj.idConta);
        this.idPessoa = this.constructor.getValue(obj.idPessoa);
        this.idCartao = this.constructor.getValue(obj.idCartao);
        this.numeroCartao = this.constructor.getValue(obj.numeroCartao);
        this.nomePlastico = this.constructor.getValue(obj.nomePlastico);
        this.dataValidade = this.constructor.getValue(obj.dataValidade);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'flagVirtual', realName: 'flagVirtual' },
            { name: 'idConta', realName: 'idConta' },
            { name: 'idPessoa', realName: 'idPessoa' },
            { name: 'idCartao', realName: 'idCartao' },
            { name: 'numeroCartao', realName: 'numeroCartao' },
            { name: 'nomePlastico', realName: 'nomePlastico' },
            { name: 'dataValidade', realName: 'dataValidade' },
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

module.exports = MContasIdAccountGerarCartaoProvisorio;