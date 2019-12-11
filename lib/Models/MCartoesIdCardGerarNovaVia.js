/**
 * BaaSCaradhrasAPIDocumentationLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of MCartoesIdCardGerarNovaVia
 */
class MCartoesIdCardGerarNovaVia extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.idConta = this.constructor.getValue(obj.idConta);
        this.idPessoa = this.constructor.getValue(obj.idPessoa);
        this.idCartao = this.constructor.getValue(obj.idCartao);
        this.idBandeira = this.constructor.getValue(obj.idBandeira);
        this.idTipoCartao = this.constructor.getValue(obj.idTipoCartao);
        this.numeroCartao = this.constructor.getValue(obj.numeroCartao);
        this.nomePlastico = this.constructor.getValue(obj.nomePlastico);
        this.cvv2 = this.constructor.getValue(obj.cvv2);
        this.dataGeracao = this.constructor.getValue(obj.dataGeracao);
        this.dataValidade = this.constructor.getValue(obj.dataValidade);
        this.nomeOrigemComercial = this.constructor.getValue(obj.nomeOrigemComercial);
        this.nomeEmpresa = this.constructor.getValue(obj.nomeEmpresa);
        this.numeroAgencia = this.constructor.getValue(obj.numeroAgencia);
        this.numeroContaCorente = this.constructor.getValue(obj.numeroContaCorente);
        this.nomeEmpresaBeneficio = this.constructor.getValue(obj.nomeEmpresaBeneficio);
        this.cpf = this.constructor.getValue(obj.cpf);
        this.tipoPortador = this.constructor.getValue(obj.tipoPortador);
        this.nomeEmpregador = this.constructor.getValue(obj.nomeEmpregador);
        this.trilha1 = this.constructor.getValue(obj.trilha1);
        this.trilha2 = this.constructor.getValue(obj.trilha2);
        this.trilhaCVV1 = this.constructor.getValue(obj.trilhaCVV1);
        this.trilhaCVV2 = this.constructor.getValue(obj.trilhaCVV2);
        this.flagVirtual = this.constructor.getValue(obj.flagVirtual);
        this.numeroCartaoHash = this.constructor.getValue(obj.numeroCartaoHash);
        this.idImagem = this.constructor.getValue(obj.idImagem);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'idConta', realName: 'idConta' },
            { name: 'idPessoa', realName: 'idPessoa' },
            { name: 'idCartao', realName: 'idCartao' },
            { name: 'idBandeira', realName: 'idBandeira' },
            { name: 'idTipoCartao', realName: 'idTipoCartao' },
            { name: 'numeroCartao', realName: 'numeroCartao' },
            { name: 'nomePlastico', realName: 'nomePlastico' },
            { name: 'cvv2', realName: 'cvv2' },
            { name: 'dataGeracao', realName: 'dataGeracao' },
            { name: 'dataValidade', realName: 'dataValidade' },
            { name: 'nomeOrigemComercial', realName: 'nomeOrigemComercial' },
            { name: 'nomeEmpresa', realName: 'nomeEmpresa' },
            { name: 'numeroAgencia', realName: 'numeroAgencia' },
            { name: 'numeroContaCorente', realName: 'numeroContaCorente' },
            { name: 'nomeEmpresaBeneficio', realName: 'nomeEmpresaBeneficio' },
            { name: 'cpf', realName: 'cpf' },
            { name: 'tipoPortador', realName: 'tipoPortador' },
            { name: 'nomeEmpregador', realName: 'nomeEmpregador' },
            { name: 'trilha1', realName: 'trilha1' },
            { name: 'trilha2', realName: 'trilha2' },
            { name: 'trilhaCVV1', realName: 'trilhaCVV1' },
            { name: 'trilhaCVV2', realName: 'trilhaCVV2' },
            { name: 'flagVirtual', realName: 'flagVirtual' },
            { name: 'numeroCartaoHash', realName: 'numeroCartaoHash' },
            { name: 'idImagem', realName: 'idImagem' },
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

module.exports = MCartoesIdCardGerarNovaVia;