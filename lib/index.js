/**
  * @module BaaSCaradhrasAPIDocumentationLib
  *
  * <html><head></head><body><h1 id="welcome-to-caradhras">Welcome to Caradhras</h1> <p>This
  * repository is an API documentation to the Banking as a Service ("BaaS") platform, powered by
  * <strong>DOCK</strong>. The BaaS is a business unit that provides a variety of banking services
  * in a B2B business model, enabling partners (or sub-issuers) to deliver a banking experience to
  * its customers with no need of having a bank license attached, free of bureaucracy. As we
  * usually say: ready to go.</p> <p>The API Platform is called <strong>Caradhras</strong>, in
  * honor of our "cultural stack". Click <a href="https://en.wikipedia.org/wiki/Caradhras">here</a>
  * to find out more information. Caradhras will allow you to access data and different resources
  * through a set of APIs, providing an easy way to manage financial resources from your customers
  * (or account holders).</p> <p>The step-by-step should be to proceed with the download of this
  * API Collection to your <a href="http://www.getpostman.com">Postman</a>, by clicking on the
  * <code>Run in Postman</code> button on the top right of this page.</p> <hr> <h1
  * id="architecture">Architecture</h1> <p>If you are familiar to RESTful orchestrators, Caradhras
  * could be named as a powerful one. It gives access to partners to manage its entire database and
  * be able to manage a wide variety of financial transactions, through a set of REST APIs.</p>
  * <p>Everything starts with a Payment Account. The Payment Account has different alternatives to
  * Cash-in and some others to Cash-Out.</p> <p>Accessing Caradhras, your team will be able to:</p>
  * <ul> <li>Create Individuals in the platform, fully screened by KYC standards</li> <li>Create
  * Payment Accounts for these Individuals, giving them the ability to manage its holdings</li>
  * <li>Create transactions that goes from i) swipe card transactions, ii) payment of bills, iii)
  * pre-paid phone recharge, iv) bank transfers</li> </ul> </body></html>
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const OAuth20Controller = require('./Controllers/OAuth20Controller');
const CompaniesController = require('./Controllers/CompaniesController');
const IndividualsV2Controller = require('./Controllers/IndividualsV2Controller');
const RegisterClientsController = require('./Controllers/RegisterClientsController');
const ControlAccountController = require('./Controllers/ControlAccountController');
const AccountController = require('./Controllers/AccountController');
const BankTransfersController = require('./Controllers/BankTransfersController');
const BoletoController = require('./Controllers/BoletoController');
const CardController = require('./Controllers/CardController');
const DocSelfieValidationController = require('./Controllers/DocSelfieValidationController');
const KYCController = require('./Controllers/KYCController');
const OthersController = require('./Controllers/OthersController');
const P2PTransferController = require('./Controllers/P2PTransferController');
const TollController = require('./Controllers/TollController');
const MDeprecatedPaymentsController = require('./Controllers/MDeprecatedPaymentsController');
const PaymentsV1Controller = require('./Controllers/PaymentsV1Controller');
const MobileRechargesController = require('./Controllers/MobileRechargesController');
const PaymentController = require('./Controllers/PaymentController');
const TransportCardController = require('./Controllers/TransportCardController');
const SingleIssuerForMarketplaceAndExternalAuthorizerClientsOnlyController =
  require('./Controllers/SingleIssuerForMarketplaceAndExternalAuthorizerClientsOnlyController');
const TariffWaivedController = require('./Controllers/TariffWaivedController');
const TransportcardsController = require('./Controllers/TransportcardsController');
const WebhooksController = require('./Controllers/WebhooksController');
const RegulatoryDocumentsController = require('./Controllers/RegulatoryDocumentsController');
const VisaOneClickController = require('./Controllers/VisaOneClickController');
const MOauth2Token = require('./Models/MOauth2Token');
const MRegistrationsrequest = require('./Models/MRegistrationsrequest');
const Company = require('./Models/Company');
const MainPhone = require('./Models/MainPhone');
const Phone = require('./Models/Phone');
const MainAddress = require('./Models/MainAddress');
const Address = require('./Models/Address');
const Partners = require('./Models/Partners');
const Individual = require('./Models/Individual');
const IdentityCard = require('./Models/IdentityCard');
const Address1 = require('./Models/Address1');
const Company1 = require('./Models/Company1');
const ProductSettings = require('./Models/ProductSettings');
const DeviceIdentification = require('./Models/DeviceIdentification');
const MRegistrations = require('./Models/MRegistrations');
const Result = require('./Models/Result');
const HttpsCompaniesHmlCaradhrasIoV1Registrations791d1dbeF6cd48cdA21bDce0dbd83201DocumentsDocumentTypePASSPORT =
  require('./Models/HttpsCompaniesHmlCaradhrasIoV1Registrations791d1dbeF6cd48cdA21bDce0dbd83201DocumentsDocumentTypePASSPORT');
const Result1 = require('./Models/Result1');
const MRegistrationsRegistrationIdRequest = require('./Models/MRegistrationsRegistrationIdRequest');
const MRegistrationsRegistrationId = require('./Models/MRegistrationsRegistrationId');
const MRegisteredCompaniesCompanyIdRequest =
  require('./Models/MRegisteredCompaniesCompanyIdRequest');
const MRegisteredCompanies9914293 = require('./Models/MRegisteredCompanies9914293');
const MRegistrations791d1dbeF6cd48cdA21bDce0dbd83201 =
  require('./Models/MRegistrations791d1dbeF6cd48cdA21bDce0dbd83201');
const Result3 = require('./Models/Result3');
const Company6 = require('./Models/Company6');
const Partners3 = require('./Models/Partners3');
const Individual3 = require('./Models/Individual3');
const MRegistrationsRegistrationIdC6f09995Af8c4e0f89f41beca1da7b5fDocuments =
  require('./Models/MRegistrationsRegistrationIdC6f09995Af8c4e0f89f41beca1da7b5fDocuments');
const Result4 = require('./Models/Result4');
const MRegistrationsStatusesStatus = require('./Models/MRegistrationsStatusesStatus');
const Result5 = require('./Models/Result5');
const Company8 = require('./Models/Company8');
const Address12 = require('./Models/Address12');
const MainPhone12 = require('./Models/MainPhone12');
const Phone12 = require('./Models/Phone12');
const MainAddress12 = require('./Models/MainAddress12');
const Partners4 = require('./Models/Partners4');
const Individual4 = require('./Models/Individual4');
const MainPhone13 = require('./Models/MainPhone13');
const Company9 = require('./Models/Company9');
const Company10 = require('./Models/Company10');
const ProductSettings4 = require('./Models/ProductSettings4');
const TermsAndConditionsTokens = require('./Models/TermsAndConditionsTokens');
const StatusHistory = require('./Models/StatusHistory');
const MRegistrationsCompaniesCNPJPartnersCPF =
  require('./Models/MRegistrationsCompaniesCNPJPartnersCPF');
const Result6 = require('./Models/Result6');
const Partner = require('./Models/Partner');
const MRegisteredCompanies99142931 = require('./Models/MRegisteredCompanies99142931');
const Result7 = require('./Models/Result7');
const MIndividualsAccounts = require('./Models/MIndividualsAccounts');
const Address19 = require('./Models/Address19');
const Phone19 = require('./Models/Phone19');
const MIndividualsrequest = require('./Models/MIndividualsrequest');
const Address20 = require('./Models/Address20');
const Phone20 = require('./Models/Phone20');
const MIndividualsRegisteredUnderContingency =
  require('./Models/MIndividualsRegisteredUnderContingency');
const MIndividuals = require('./Models/MIndividuals');
const Item = require('./Models/Item');
const MIndividualsId = require('./Models/MIndividualsId');
const MIndividualsId1 = require('./Models/MIndividualsId1');
const MIndividualsAccountsAccountIdAdditionalsRequest =
  require('./Models/MIndividualsAccountsAccountIdAdditionalsRequest');
const MEnderecos = require('./Models/MEnderecos');
const MEnderecosId = require('./Models/MEnderecosId');
const MEnderecosId2 = require('./Models/MEnderecosId2');
const MTelefones = require('./Models/MTelefones');
const MTelefonesId = require('./Models/MTelefonesId');
const MTelefones1 = require('./Models/MTelefones1');
const Content = require('./Models/Content');
const MEnderecosCorrespondenciaId = require('./Models/MEnderecosCorrespondenciaId');
const MContasIdVinculosrequest = require('./Models/MContasIdVinculosrequest');
const MContasIdVinculos = require('./Models/MContasIdVinculos');
const MContasVinculosTiposrequest = require('./Models/MContasVinculosTiposrequest');
const MContasIdVinculosTipos = require('./Models/MContasIdVinculosTipos');
const MContasIdAtribuirCartaoPrepagoRequest =
  require('./Models/MContasIdAtribuirCartaoPrepagoRequest');
const MContasIdVinculos1 = require('./Models/MContasIdVinculos1');
const Content1 = require('./Models/Content1');
const MContasIdVinculosTipos1 = require('./Models/MContasIdVinculosTipos1');
const Content2 = require('./Models/Content2');
const MContasId = require('./Models/MContasId');
const MContas = require('./Models/MContas');
const Content3 = require('./Models/Content3');
const MContasId1 = require('./Models/MContasId1');
const MContasIdAccountsAdicionais = require('./Models/MContasIdAccountsAdicionais');
const MContasIdAccountAdicionais = require('./Models/MContasIdAccountAdicionais');
const MContasIdAdicionaisIdPessoaRequest = require('./Models/MContasIdAdicionaisIdPessoaRequest');
const Telefones3 = require('./Models/Telefones3');
const MContasIdAdicionaisIdPessoa = require('./Models/MContasIdAdicionaisIdPessoa');
const MContasIdPessoasIdPessoaPortadoresRequest =
  require('./Models/MContasIdPessoasIdPessoaPortadoresRequest');
const MContasIdBloquear = require('./Models/MContasIdBloquear');
const MContasIdAccountAlterarProdutoRequest =
  require('./Models/MContasIdAccountAlterarProdutoRequest');
const MContasIdTimeline = require('./Models/MContasIdTimeline');
const Content4 = require('./Models/Content4');
const MContasIdTransacoes = require('./Models/MContasIdTransacoes');
const Content5 = require('./Models/Content5');
const MBanktransfers = require('./Models/MBanktransfers');
const Beneficiary = require('./Models/Beneficiary');
const MBanktransfersAccountIdAccount = require('./Models/MBanktransfersAccountIdAccount');
const MBanktransfersAdjustmentIdAdjustment =
  require('./Models/MBanktransfersAdjustmentIdAdjustment');
const MBillet = require('./Models/MBillet');
const MPaymentsliprequest = require('./Models/MPaymentsliprequest');
const PayingSource = require('./Models/PayingSource');
const BankSlip = require('./Models/BankSlip');
const MBoletos = require('./Models/MBoletos');
const Content6 = require('./Models/Content6');
const MContasIdAccountGerarCartaoProvisorio =
  require('./Models/MContasIdAccountGerarCartaoProvisorio');
const MCartoes = require('./Models/MCartoes');
const Content7 = require('./Models/Content7');
const MCartoesIdCard = require('./Models/MCartoesIdCard');
const MCartoesIdCardGerarNovaVia = require('./Models/MCartoesIdCardGerarNovaVia');
const MCartoesIdCardDesbloquearSenhaIncorreta =
  require('./Models/MCartoesIdCardDesbloquearSenhaIncorreta');
const MCartoesIdCardValidarSenha = require('./Models/MCartoesIdCardValidarSenha');
const MCartoesIdCardBloquear = require('./Models/MCartoesIdCardBloquear');
const MCartoesIdCardDesbloquear = require('./Models/MCartoesIdCardDesbloquear');
const MCartoesIdCardCancelar = require('./Models/MCartoesIdCardCancelar');
const MStatusCartoes = require('./Models/MStatusCartoes');
const Content8 = require('./Models/Content8');
const MStatusCatoesIdCard = require('./Models/MStatusCatoesIdCard');
const MCartoesIdAlterarEstagio = require('./Models/MCartoesIdAlterarEstagio');
const MCartoesIdCardValidarCvvRequest = require('./Models/MCartoesIdCardValidarCvvRequest');
const MCartoesLotesCartoesPrePagos = require('./Models/MCartoesLotesCartoesPrePagos');
const MCartoesLotesCartoesPrePagosId = require('./Models/MCartoesLotesCartoesPrePagosId');
const MCartoesIdCardLimitesDisponibilidades =
  require('./Models/MCartoesIdCardLimitesDisponibilidades');
const MCartoesIdCardAtribuirTitular = require('./Models/MCartoesIdCardAtribuirTitular');
const MApiCartoesIdConsultarDadosReais = require('./Models/MApiCartoesIdConsultarDadosReais');
const MCartoesIdConsultarDadosImpressao = require('./Models/MCartoesIdConsultarDadosImpressao');
const DocumentsValidation = require('./Models/DocumentsValidation');
const Result8 = require('./Models/Result8');
const DocumentsValidationRules = require('./Models/DocumentsValidationRules');
const Instructions = require('./Models/Instructions');
const Header = require('./Models/Header');
const ContentType = require('./Models/ContentType');
const Params = require('./Models/Params');
const Person = require('./Models/Person');
const Category = require('./Models/Category');
const Side = require('./Models/Side');
const Body = require('./Models/Body');
const SelfiesValidation = require('./Models/SelfiesValidation');
const SelfiesValidationRules = require('./Models/SelfiesValidationRules');
const Instructions1 = require('./Models/Instructions1');
const Header1 = require('./Models/Header1');
const ContentType1 = require('./Models/ContentType1');
const Params1 = require('./Models/Params1');
const MKnowyourclientPeople = require('./Models/MKnowyourclientPeople');
const BasicData = require('./Models/BasicData');
const Address23 = require('./Models/Address23');
const Phone23 = require('./Models/Phone23');
const Sanctions = require('./Models/Sanctions');
const SanctionsHistory = require('./Models/SanctionsHistory');
const Details = require('./Models/Details');
const Collections = require('./Models/Collections');
const Score = require('./Models/Score');
const OnlineCertificate = require('./Models/OnlineCertificate');
const AdditionalOutputData = require('./Models/AdditionalOutputData');
const MCeps = require('./Models/MCeps');
const MBancos = require('./Models/MBancos');
const Content9 = require('./Models/Content9');
const MBancosrequest = require('./Models/MBancosrequest');
const MBancos1 = require('./Models/MBancos1');
const MBancosIdBank = require('./Models/MBancosIdBank');
const MP2ptransferrequest = require('./Models/MP2ptransferrequest');
const MP2ptransfer = require('./Models/MP2ptransfer');
const MP2ptransferDetailsIdAccount = require('./Models/MP2ptransferDetailsIdAccount');
const MP2ptransferDetailsIdAccount1 = require('./Models/MP2ptransferDetailsIdAccount1');
const MP2ptransferAdjustmentIdAdjustment = require('./Models/MP2ptransferAdjustmentIdAdjustment');
const MTollsRechargesrequest = require('./Models/MTollsRechargesrequest');
const MTollsRecharges = require('./Models/MTollsRecharges');
const MTollsRechargesrequest1 = require('./Models/MTollsRechargesrequest1');
const MTollsRechargesrequest2 = require('./Models/MTollsRechargesrequest2');
const MTollsRecharges34943232 = require('./Models/MTollsRecharges34943232');
const MTollsDownloads34943232 = require('./Models/MTollsDownloads34943232');
const MPaymentsrequest = require('./Models/MPaymentsrequest');
const MPaymentsAccountIdAccount = require('./Models/MPaymentsAccountIdAccount');
const MPaymentsAdjustmentIdAdjustment = require('./Models/MPaymentsAdjustmentIdAdjustment');
const MPaymentsV1 = require('./Models/MPaymentsV1');
const MPaymentV1Schedulerrequest = require('./Models/MPaymentV1Schedulerrequest');
const Payload = require('./Models/Payload');
const MPaymentV1Scheduler = require('./Models/MPaymentV1Scheduler');
const Result10 = require('./Models/Result10');
const Payload1 = require('./Models/Payload1');
const MPaymentsV1Receipts = require('./Models/MPaymentsV1Receipts');
const Item1 = require('./Models/Item1');
const MPaymentsV1Scheduler = require('./Models/MPaymentsV1Scheduler');
const Item2 = require('./Models/Item2');
const MPaymentsV1SchedulerIdSchedule = require('./Models/MPaymentsV1SchedulerIdSchedule');
const MRechargesDealers1 = require('./Models/MRechargesDealers1');
const Dealer = require('./Models/Dealer');
const MRechargesrequest = require('./Models/MRechargesrequest');
const MRecharges2 = require('./Models/MRecharges2');
const Option = require('./Models/Option');
const FixedAmount = require('./Models/FixedAmount');
const MRechargesOrderIdRequest = require('./Models/MRechargesOrderIdRequest');
const MRechargesPedido3 = require('./Models/MRechargesPedido3');
const MRechargesOrderIdConfirmRequest = require('./Models/MRechargesOrderIdConfirmRequest');
const MRechargesOrderIdConfirm = require('./Models/MRechargesOrderIdConfirm');
const MRechargesAccountIdAccount = require('./Models/MRechargesAccountIdAccount');
const MRechargesAdjustmentIdAdjustment = require('./Models/MRechargesAdjustmentIdAdjustment');
const MSingleIssuerPaymentRequest = require('./Models/MSingleIssuerPaymentRequest');
const MRechargesOrderIdConfirmRequest1 = require('./Models/MRechargesOrderIdConfirmRequest1');
const MTransportcardsCardIdSptrans1 = require('./Models/MTransportcardsCardIdSptrans1');
const Product = require('./Models/Product');
const MTransportcardsRecharge2Request = require('./Models/MTransportcardsRecharge2Request');
const MTransportcardsRecharge2 = require('./Models/MTransportcardsRecharge2');
const MTransportcardsRechargeIdRecharge3 = require('./Models/MTransportcardsRechargeIdRecharge3');
const MRateWaivedrequest = require('./Models/MRateWaivedrequest');
const MTransportcardsCardIdSptrans11 = require('./Models/MTransportcardsCardIdSptrans11');
const Product1 = require('./Models/Product1');
const MTransportcardsAccountIdAccount = require('./Models/MTransportcardsAccountIdAccount');
const MRegistration = require('./Models/MRegistration');
const Result11 = require('./Models/Result11');
const RegulatoryDocument = require('./Models/RegulatoryDocument');
const RegistrationTypesType1TypesType2 = require('./Models/RegistrationTypesType1TypesType2');
const Result12 = require('./Models/Result12');
const RegulatoryDocument1 = require('./Models/RegulatoryDocument1');
const MAgreementrequest = require('./Models/MAgreementrequest');
const MOneclickEnrollmentsrequest = require('./Models/MOneclickEnrollmentsrequest');
const SubCampaign = require('./Models/SubCampaign');
const Property = require('./Models/Property');
const Client = require('./Models/Client');
const Card = require('./Models/Card');
const MP2ptransferCustomizedUUIDException =
  require('./Exceptions/MP2ptransferCustomizedUUIDException');
const MP2ptransferBackTransactionUUIDException =
  require('./Exceptions/MP2ptransferBackTransactionUUIDException');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of BaaSCaradhrasAPIDocumentationLib
    Configuration,
    Environments,
    // controllers of BaaSCaradhrasAPIDocumentationLib
    OAuth20Controller,
    CompaniesController,
    IndividualsV2Controller,
    RegisterClientsController,
    ControlAccountController,
    AccountController,
    BankTransfersController,
    BoletoController,
    CardController,
    DocSelfieValidationController,
    KYCController,
    OthersController,
    P2PTransferController,
    TollController,
    MDeprecatedPaymentsController,
    PaymentsV1Controller,
    MobileRechargesController,
    PaymentController,
    TransportCardController,
    SingleIssuerForMarketplaceAndExternalAuthorizerClientsOnlyController,
    TariffWaivedController,
    TransportcardsController,
    WebhooksController,
    RegulatoryDocumentsController,
    VisaOneClickController,
    // models of BaaSCaradhrasAPIDocumentationLib
    MOauth2Token,
    MRegistrationsrequest,
    Company,
    MainPhone,
    Phone,
    MainAddress,
    Address,
    Partners,
    Individual,
    IdentityCard,
    Address1,
    Company1,
    ProductSettings,
    DeviceIdentification,
    MRegistrations,
    Result,
    HttpsCompaniesHmlCaradhrasIoV1Registrations791d1dbeF6cd48cdA21bDce0dbd83201DocumentsDocumentTypePASSPORT,
    Result1,
    MRegistrationsRegistrationIdRequest,
    MRegistrationsRegistrationId,
    MRegisteredCompaniesCompanyIdRequest,
    MRegisteredCompanies9914293,
    MRegistrations791d1dbeF6cd48cdA21bDce0dbd83201,
    Result3,
    Company6,
    Partners3,
    Individual3,
    MRegistrationsRegistrationIdC6f09995Af8c4e0f89f41beca1da7b5fDocuments,
    Result4,
    MRegistrationsStatusesStatus,
    Result5,
    Company8,
    Address12,
    MainPhone12,
    Phone12,
    MainAddress12,
    Partners4,
    Individual4,
    MainPhone13,
    Company9,
    Company10,
    ProductSettings4,
    TermsAndConditionsTokens,
    StatusHistory,
    MRegistrationsCompaniesCNPJPartnersCPF,
    Result6,
    Partner,
    MRegisteredCompanies99142931,
    Result7,
    MIndividualsAccounts,
    Address19,
    Phone19,
    MIndividualsrequest,
    Address20,
    Phone20,
    MIndividualsRegisteredUnderContingency,
    MIndividuals,
    Item,
    MIndividualsId,
    MIndividualsId1,
    MIndividualsAccountsAccountIdAdditionalsRequest,
    MEnderecos,
    MEnderecosId,
    MEnderecosId2,
    MTelefones,
    MTelefonesId,
    MTelefones1,
    Content,
    MEnderecosCorrespondenciaId,
    MContasIdVinculosrequest,
    MContasIdVinculos,
    MContasVinculosTiposrequest,
    MContasIdVinculosTipos,
    MContasIdAtribuirCartaoPrepagoRequest,
    MContasIdVinculos1,
    Content1,
    MContasIdVinculosTipos1,
    Content2,
    MContasId,
    MContas,
    Content3,
    MContasId1,
    MContasIdAccountsAdicionais,
    MContasIdAccountAdicionais,
    MContasIdAdicionaisIdPessoaRequest,
    Telefones3,
    MContasIdAdicionaisIdPessoa,
    MContasIdPessoasIdPessoaPortadoresRequest,
    MContasIdBloquear,
    MContasIdAccountAlterarProdutoRequest,
    MContasIdTimeline,
    Content4,
    MContasIdTransacoes,
    Content5,
    MBanktransfers,
    Beneficiary,
    MBanktransfersAccountIdAccount,
    MBanktransfersAdjustmentIdAdjustment,
    MBillet,
    MPaymentsliprequest,
    PayingSource,
    BankSlip,
    MBoletos,
    Content6,
    MContasIdAccountGerarCartaoProvisorio,
    MCartoes,
    Content7,
    MCartoesIdCard,
    MCartoesIdCardGerarNovaVia,
    MCartoesIdCardDesbloquearSenhaIncorreta,
    MCartoesIdCardValidarSenha,
    MCartoesIdCardBloquear,
    MCartoesIdCardDesbloquear,
    MCartoesIdCardCancelar,
    MStatusCartoes,
    Content8,
    MStatusCatoesIdCard,
    MCartoesIdAlterarEstagio,
    MCartoesIdCardValidarCvvRequest,
    MCartoesLotesCartoesPrePagos,
    MCartoesLotesCartoesPrePagosId,
    MCartoesIdCardLimitesDisponibilidades,
    MCartoesIdCardAtribuirTitular,
    MApiCartoesIdConsultarDadosReais,
    MCartoesIdConsultarDadosImpressao,
    DocumentsValidation,
    Result8,
    DocumentsValidationRules,
    Instructions,
    Header,
    ContentType,
    Params,
    Person,
    Category,
    Side,
    Body,
    SelfiesValidation,
    SelfiesValidationRules,
    Instructions1,
    Header1,
    ContentType1,
    Params1,
    MKnowyourclientPeople,
    BasicData,
    Address23,
    Phone23,
    Sanctions,
    SanctionsHistory,
    Details,
    Collections,
    Score,
    OnlineCertificate,
    AdditionalOutputData,
    MCeps,
    MBancos,
    Content9,
    MBancosrequest,
    MBancos1,
    MBancosIdBank,
    MP2ptransferrequest,
    MP2ptransfer,
    MP2ptransferDetailsIdAccount,
    MP2ptransferDetailsIdAccount1,
    MP2ptransferAdjustmentIdAdjustment,
    MTollsRechargesrequest,
    MTollsRecharges,
    MTollsRechargesrequest1,
    MTollsRechargesrequest2,
    MTollsRecharges34943232,
    MTollsDownloads34943232,
    MPaymentsrequest,
    MPaymentsAccountIdAccount,
    MPaymentsAdjustmentIdAdjustment,
    MPaymentsV1,
    MPaymentV1Schedulerrequest,
    Payload,
    MPaymentV1Scheduler,
    Result10,
    Payload1,
    MPaymentsV1Receipts,
    Item1,
    MPaymentsV1Scheduler,
    Item2,
    MPaymentsV1SchedulerIdSchedule,
    MRechargesDealers1,
    Dealer,
    MRechargesrequest,
    MRecharges2,
    Option,
    FixedAmount,
    MRechargesOrderIdRequest,
    MRechargesPedido3,
    MRechargesOrderIdConfirmRequest,
    MRechargesOrderIdConfirm,
    MRechargesAccountIdAccount,
    MRechargesAdjustmentIdAdjustment,
    MSingleIssuerPaymentRequest,
    MRechargesOrderIdConfirmRequest1,
    MTransportcardsCardIdSptrans1,
    Product,
    MTransportcardsRecharge2Request,
    MTransportcardsRecharge2,
    MTransportcardsRechargeIdRecharge3,
    MRateWaivedrequest,
    MTransportcardsCardIdSptrans11,
    Product1,
    MTransportcardsAccountIdAccount,
    MRegistration,
    Result11,
    RegulatoryDocument,
    RegistrationTypesType1TypesType2,
    Result12,
    RegulatoryDocument1,
    MAgreementrequest,
    MOneclickEnrollmentsrequest,
    SubCampaign,
    Property,
    Client,
    Card,
    // exceptions of BaaSCaradhrasAPIDocumentationLib
    MP2ptransferCustomizedUUIDException,
    MP2ptransferBackTransactionUUIDException,
    APIException,
};

module.exports = initializer;
