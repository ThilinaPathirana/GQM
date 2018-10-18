import { userSettings } from '../../app-config/user-settings';

export class UserState {

  private static instance: UserState;
  private _isAuthenticated = false;
  private _isTradeAuthenticated = false;
  private _isPriceAuthenticated = false;
  private _isMetaAuthenticated = false;
  private _isValidSession = false;

  private _exchangeList: Array<string> = [];
  private _nonVirtualExchangeList: Array<string> = [];
  private _defaultExchangeList: Array<string> = [];
  private _delayedExchangeList: Array<string> = [];
  private _level1ExchangeList: Array<string> = [];
  private _level2ExchangeList: Array<string> = [];
  private _newsProviders: Array<string> = [];

  private _defaultExchange: string;
  private _defaultSymbol: { exchangeCode: string, symbolCode: string };
  private _defaultStoreSymbol: { exchangeCode: string, symbolCode: string };
  // private _cacheService: CacheService;
  private exchangeConfigMap: any = {};
  private tradeDetails = {};
  private priceDetails = {};
  private backOfficeDetails = {};
  private isEmailVerified = false;
  private isMobileVerified = false;

  public static getInstance (): UserState {
    UserState.instance = UserState.instance || new UserState ();
    return UserState.instance;
  }

  constructor () {
    if ( UserState.instance ) {
      throw new Error ( 'Error: Instantiation failed: Use SingletonClass.getInstance() instead of new.' );
    }
  }

  public clearInstance (): void {
    this.isAuthenticated = false;
    this.isTradeAuthenticated = false;
    this.isPriceAuthenticated = false;
    this.isMetaAuthenticated = false;
    this.priceDetails = {};
    this.tradeDetails = {};
    this.backOfficeDetails = {};

    this._exchangeList = [];
    this._nonVirtualExchangeList = [];
    this._delayedExchangeList = [];
    this._newsProviders = [];
    this._defaultExchangeList = [];
    this._level1ExchangeList = [];
    this._level2ExchangeList = [];

    this.defaultExchange = null;
    this.exchangeConfigMap = {};
    this.isEmailVerified = false;
    this.isMobileVerified = false;
  }


  public getTradeDetails (): any {
    return this.tradeDetails;
  }

  public getPriceDetails (): any {
    return this.priceDetails;
  }

  public isDelayedExchange ( exgCode: string ): boolean {
    if ( this.delayedExchangeList.length === 0 ) {
      return false;
    }

    return this.delayedExchangeList.findIndex ( x => x === exgCode ) !== - 1;
  }

  public isLevelOneExchange ( exgCode: string ): boolean {
    if ( this.level1ExchangeList.length === 0 ) {
      return false;
    }

    return this.level1ExchangeList.findIndex ( x => x === exgCode ) !== - 1;
  }

  public isLevelTwoExchange ( exgCode: string ): boolean {
    if ( this.level2ExchangeList.length === 0 ) {
      return false;
    }

    return this.level2ExchangeList.findIndex ( x => x === exgCode ) !== - 1;
  }

  public setTadeValues ( values: Object = {} ): void {
    Object.assign ( this.tradeDetails , values );
  }

  public setBackOfficeValues ( values: Object = {} ): void {
    Object.assign ( this.backOfficeDetails , values );
  }

  public get isAuthenticated (): boolean {
    return this._isAuthenticated;
  }

  public set isAuthenticated ( value: boolean ) {
    this._isAuthenticated = value;
  }

  public get isValidSession (): boolean {
    return this._isValidSession;
  }

  public set isValidSession ( value: boolean ) {
    this._isValidSession = value;
  }


  public get isTradeAuthenticated(): boolean {
    return this._isTradeAuthenticated;
  }

  public set isTradeAuthenticated ( value: boolean ) {
    this._isTradeAuthenticated = value;
  }

  public get isPriceAuthenticated (): boolean {
    return this._isPriceAuthenticated;
  }

  public set isPriceAuthenticated ( value: boolean ) {
    this._isPriceAuthenticated = value;
  }

  public get isMetaAuthenticated (): boolean {
    return this._isMetaAuthenticated;
  }

  public set isMetaAuthenticated ( value: boolean ) {
    this._isMetaAuthenticated = value;
  }

  public get exchangeList (): Array<string> {
    return this._exchangeList;
  }

  public get defaultExchangeList (): Array<string> {
    return this._defaultExchangeList;
  }

  public get delayedExchangeList (): Array<string> {
    return this._delayedExchangeList;
  }

  public get nonVirtualExchangeList (): Array<string> {
    return this._nonVirtualExchangeList;
  }

  public set nonVirtualExchangeList ( value: Array<string> ) {
    this._nonVirtualExchangeList = value;
  }

  public get level1ExchangeList (): Array<string> {
    return this._level1ExchangeList;
  }

  public get level2ExchangeList (): Array<string> {
    return this._level2ExchangeList;
  }

  public get newsProviders (): Array<string> {
    return this._newsProviders;
  }


  public set defaultExchange ( value: string ) {
    this._defaultExchange = value;
  }

}
