import { AccountCategories } from '../../../app-constants/enums/trade-meta/trade-utils/account-categories.enum';
import { BaseTradeEntity } from './base-trade-entity';
// import { PortfolioEntity } from './portfolio-entity';
import { TransactionPasswordTypes } from '../../../app-constants/enums/trade-meta/trade-utils/transaction-password-types.enum';

export class TradeUserEntity extends BaseTradeEntity {
  private _agreedToStopLossTakeProfit: number;
  private _authStatus: number;
  private _brokerId: string;
  private _brokerInstitutionId: string;
  private _callCenterNumber: string;
  private _cboEnabled: number;
  private _clientVersionMap: { 1: number, 2: number, 3: number, 4: number, 5: number };
  private _clientAccountType: number;
  private _countryCode: string;
  private _customerName: string;
  private _dealerType: number;
  private _encryptedSecurtyToken: string;
  private _failAttempts: number;
  private _gtnSpecialCustomer: number;
  private _institutionId: string;
  private _institutionNumber: number;
  private _internalOrderMatchingAgreementStatus: number;
  private _level2AuthType: number;
  private _loginAlias: string;
  private _lastLoginTime: string;
  private _miniOmsCustomer: number;
  private _subscriptionPackageId: string;
  private _equityEnableExchanges: Array<string> = [];
  private _portfolioDropDownList: Array<{ value: string, viewValue: string }> = [];
  private _autoTradeEnableDropDownList: Array<{ value: string, viewValue: string } > = [];
  private _priceUserName: string;
  private _professionalCategory: number;
  private _rmId: string;
  private _reportUrl: string;
  private _stopLossLimit: number;
  private _serverTime: string;
  private _takeProfitLimit: number;
  private _tradingWindowTypes: {};
  private _tawasulMenuEnable: number;
  private _userId: string;
  private _lowerCaseRequired = false;
  private _upperCaseRequired = false;
  private _numericRequired = false;
  private _specialCharRequired = false;
  private _passwordMinLen = 0;
  private _currencyList: Array<string > = [];
  private _nativeCommunicationChannel: number;
  private _validateTradingPassword = true;
  private _tradingPasswordValidated = false;
  private _saveTradingPassword = false;
  private _tradingPassword: string;
  private _agreementSignStatus = 1;
  private _investmentEnabledExchangeList = [];
  private _investmentEnabledPortfolioList = [];
  private _defaultPortfolio: string;

  constructor(tradeUserData: any) {
    super();
    Object.assign(this, tradeUserData);
  }

  public get investmentEnabledExchangeList (): any[] {
    return this._investmentEnabledExchangeList;
  }

  public get investmentEnabledPortfolioList (): any[] {
    return this._investmentEnabledPortfolioList;
  }

  public set investmentEnabledExchangeList ( value: any[] ) {
    this._investmentEnabledExchangeList = value;
  }

  public set investmentEnabledPortfolioList ( value: any[] ) {
    this._investmentEnabledPortfolioList = value;
  }

  public clearEntity (): void {
    // [Todo] Chandana implement this method
  }

  public get lowerCaseRequired (): boolean {
    return this._lowerCaseRequired;
  }

  public set lowerCaseRequired ( value: boolean ) {
    this._lowerCaseRequired = value;
  }

  public get upperCaseRequired (): boolean {
    return this._upperCaseRequired;
  }

  public set upperCaseRequired ( value: boolean ) {
    this._upperCaseRequired = value;
  }

  public get numericRequired (): boolean {
    return this._numericRequired;
  }

  public set numericRequired ( value: boolean ) {
    this._numericRequired = value;
  }

  public get specialCharRequired (): boolean {
    return this._specialCharRequired;
  }

  public set specialCharRequired ( value: boolean ) {
    this._specialCharRequired = value;
  }

  public get passwordMinLen (): number {
    return this._passwordMinLen;
  }

  public set passwordMinLen ( value: number ) {
    this._passwordMinLen = value;
  }

  public get agreedToStopLossTakeProfit (): number {
    return this._agreedToStopLossTakeProfit;
  }

  public set agreedToStopLossTakeProfit ( value: number ) {
    this._agreedToStopLossTakeProfit = value;
  }

  public get authStatus (): number {
    return this._authStatus;
  }

  public set authStatus ( value: number ) {
    this._authStatus = value;
  }

  public get brokerId (): string {
    return this._brokerId;
  }

  public set brokerId ( value: string ) {
    this._brokerId = value;
  }

  public get brokerInstitutionId (): string {
    return this._brokerInstitutionId;
  }

  public set brokerInstitutionId ( value: string ) {
    this._brokerInstitutionId = value;
  }

  public get callCenterNumber (): string {
    return this._callCenterNumber;
  }

  public set callCenterNumber ( value: string ) {
    this._callCenterNumber = value;
  }

  public get cboEnabled (): number {
    return this._cboEnabled;
  }

  public set cboEnabled ( value: number ) {
    this._cboEnabled = value;
  }

  public get clientVersionMap (): { 1: number; 2: number; 3: number; 4: number; 5: number } {
    return this._clientVersionMap;
  }

  public set clientVersionMap ( value: { 1: number; 2: number; 3: number; 4: number; 5: number } ) {
    this._clientVersionMap = value;
  }

  public get clientAccountType (): number {
    return this._clientAccountType;
  }

  public set clientAccountType ( value: number ) {
    this._clientAccountType = value;
  }

  public get countryCode (): string {
    return this._countryCode;
  }

  public set countryCode ( value: string ) {
    this._countryCode = value;
  }

  public get customerName (): string {
    return this._customerName;
  }

  public set customerName ( value: string ) {
    this._customerName = value;
  }

  public get dealerType (): number {
    return this._dealerType;
  }

  public set dealerType ( value: number ) {
    this._dealerType = value;
  }

  public get encryptedSecurtyToken (): string {
    return this._encryptedSecurtyToken;
  }

  public set encryptedSecurtyToken ( value: string ) {
    this._encryptedSecurtyToken = value;
  }

  public get failAttempts (): number {
    return this._failAttempts;
  }

  public set failAttempts ( value: number ) {
    this._failAttempts = value;
  }

  public get gtnSpecialCustomer (): number {
    return this._gtnSpecialCustomer;
  }

  public set gtnSpecialCustomer ( value: number ) {
    this._gtnSpecialCustomer = value;
  }

  public get institutionId (): string {
    return this._institutionId;
  }

  public set institutionId ( value: string ) {
    this._institutionId = value;
  }

  public get institutionNumber (): number {
    return this._institutionNumber;
  }

  public set institutionNumber ( value: number ) {
    this._institutionNumber = value;
  }

  public get internalOrderMatchingAgreementStatus (): number {
    return this._internalOrderMatchingAgreementStatus;
  }

  public set internalOrderMatchingAgreementStatus ( value: number ) {
    this._internalOrderMatchingAgreementStatus = value;
  }

  public get level2AuthType (): number {
    return this._level2AuthType;
  }

  public set level2AuthType ( value: number ) {
    this._level2AuthType = value;
  }

  public get loginAlias (): string {
    return this._loginAlias;
  }

  public set loginAlias ( value: string ) {
    this._loginAlias = value;
  }

  public get lastLoginTime (): string {
    return this._lastLoginTime;
  }

  public set lastLoginTime ( value: string ) {
    this._lastLoginTime = value;
  }

  public get miniOmsCustomer (): number {
    return this._miniOmsCustomer;
  }

  public set miniOmsCustomer ( value: number ) {
    this._miniOmsCustomer = value;
  }

  public get subscriptionPackageId (): string {
    return this._subscriptionPackageId;
  }

  public set subscriptionPackageId ( value: string ) {
    this._subscriptionPackageId = value;
  }

  // public get portfolioList(): string[] {
  // 	return this._portfolioList;
  // }
  //
  // public set portfolioList(value: string[]) {
  // 	for (let i = 0; i < value.length; i++) {
  // 		const portfolio = value[i];
  // 		this._portfolioList.push(portfolio['securityAccountNumber']);
  // 	}
  // }

  public get portfolioDropDownList (): Array<{ value: string, viewValue: string }> {
    return this._portfolioDropDownList;
  }

  public get currencyList (): Array<string> {
    return this._currencyList;
  }

  public get priceUserName (): string {
    return this._priceUserName;
  }

  public set priceUserName ( value: string ) {
    this._priceUserName = value;
  }

  public get professionalCategory (): number {
    return this._professionalCategory;
  }

  public set professionalCategory ( value: number ) {
    this._professionalCategory = value;
  }

  public get rmId (): string {
    return this._rmId;
  }

  public set rmId ( value: string ) {
    this._rmId = value;
  }

  public get reportUrl (): string {
    return this._reportUrl;
  }

  public set reportUrl ( value: string ) {
    this._reportUrl = value;
  }

  public get stopLossLimit (): number {
    return this._stopLossLimit;
  }

  public set stopLossLimit ( value: number ) {
    this._stopLossLimit = value;
  }

  public get serverTime (): string {
    return this._serverTime;
  }

  public set serverTime ( value: string ) {
    this._serverTime = value;
  }

  public get takeProfitLimit (): number {
    return this._takeProfitLimit;
  }

  public set takeProfitLimit ( value: number ) {
    this._takeProfitLimit = value;
  }

  public get tradingWindowTypes (): {} {
    return this._tradingWindowTypes;
  }

  public set tradingWindowTypes ( value: {} ) {
    this._tradingWindowTypes = value;
  }

  public get tawasulMenuEnable (): number {
    return this._tawasulMenuEnable;
  }

  public set tawasulMenuEnable ( value: number ) {
    this._tawasulMenuEnable = value;
  }

  public get userId (): string {
    return this._userId;
  }

  public set userId ( value: string ) {
    this._userId = value;
  }

  public get nativeCommunicationChannel (): number {
    return this._nativeCommunicationChannel;
  }

  public set nativeCommunicationChannel ( value: number ) {
    this._nativeCommunicationChannel = value;
  }

  public set tradingPasswordValidated ( value: boolean ) {
    this._tradingPasswordValidated = value;
  }

  public get saveTradingPassword (): boolean {
    return this._saveTradingPassword;
  }

  public set saveTradingPassword ( value: boolean ) {
    this._saveTradingPassword = value;
  }

  public get equityEnableExchanges (): Array<string> {
    return this._equityEnableExchanges;
  }

  public get validateTradingPassword (): boolean {
    switch (this.level2AuthType) {
      case TransactionPasswordTypes.NONE:
        return false;
      case TransactionPasswordTypes.ONCE:
        return ! this._tradingPasswordValidated;
      default:
        return true;
    }
  }

  public get tradingPassword (): string {
    return this._tradingPassword;
  }

  public set tradingPassword ( value: string ) {
    this._tradingPassword = value;
  }

  public get agreementSignStatus (): number {
    return this._agreementSignStatus;
  }

  public set agreementSignStatus ( value: number ) {
    this._agreementSignStatus = value;
  }

  public get defaultPortfolio (): string {
    return this._defaultPortfolio;
  }

  public set defaultPortfolio ( value: string ) {
    this._defaultPortfolio = value;
  }

  public setValues ( values: Object = {} ): void {
    Object.assign (this , values);
  }
}
