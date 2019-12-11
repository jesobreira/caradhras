/**
 * BaaSCaradhrasAPIDocumentationLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of MContasIdAccountsAdicionais
 */
class MContasIdAccountsAdicionais extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.idConta = this.constructor.getValue(obj.idConta);
        this.idPessoa = this.constructor.getValue(obj.idPessoa);
        this.nome = this.constructor.getValue(obj.nome);
        this.nomeImpresso = this.constructor.getValue(obj.nomeImpresso);
        this.idEstadoCivil = this.constructor.getValue(obj.idEstadoCivil);
        this.idProfissao = this.constructor.getValue(obj.idProfissao);
        this.idNacionalidade = this.constructor.getValue(obj.idNacionalidade);
        this.idParentesco = this.constructor.getValue(obj.idParentesco);
        this.email = this.constructor.getValue(obj.email);
        this.dataCadastroPortador = this.constructor.getValue(obj.dataCadastroPortador);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'idConta', realName: 'idConta' },
            { name: 'idPessoa', realName: 'idPessoa' },
            { name: 'nome', realName: 'nome' },
            { name: 'nomeImpresso', realName: 'nomeImpresso' },
            { name: 'idEstadoCivil', realName: 'idEstadoCivil' },
            { name: 'idProfissao', realName: 'idProfissao' },
            { name: 'idNacionalidade', realName: 'idNacionalidade' },
            { name: 'idParentesco', realName: 'idParentesco' },
            { name: 'email', realName: 'email' },
            { name: 'dataCadastroPortador', realName: 'dataCadastroPortador' },
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

module.exports = MContasIdAccountsAdicionais;