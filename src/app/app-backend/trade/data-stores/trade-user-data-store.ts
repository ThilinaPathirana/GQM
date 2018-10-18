import { BaseTradeDataStore } from './base-trade-data-store';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TradeResponse } from '../protocols/trade-response';
import { TradeUserEntity } from '../business-entities/trade-user-entity';

@Injectable()
export class TradeUserDataStore extends BaseTradeDataStore {

  private _userEntity: TradeUserEntity;
  private _isPaswordComlexityLoaded = false;
  private _userName;
  private _loginPassword;
  private _tradePassword;
  private $tradePasswordValidate = new Subject ();
  private _subscriptionPackageData;
  private _subscriptionExchangeList;
  private $subscriptionDataLoaded = new Subject<any> ();
  private _packageDescription;
  private _packageId;
  private _isNewServiceCampaignAvailable = false;

  constructor () {
    super ();
    this.userEntity = new TradeUserEntity ( {} );
  }

  public get packageDescription (): number {
    return this._packageDescription;
  }

  public get packageId (): string {
    return this._packageId;
  }

  public set packageId ( value: string ) {
    this._packageId = value;
  }

  public getDataLoadedObserver (): Subject<any> {
    return this.$subscriptionDataLoaded;
  }

  public get subscriptionExchangeList (): any {
    return this._subscriptionExchangeList;
  }

  public set subscriptionExchangeList ( value: any ) {
    this._subscriptionExchangeList = value;
  }

  public get subscriptionPackageData (): any {
    return this._subscriptionPackageData;
  }

  public set subscriptionPackageData ( value: any ) {
    this._subscriptionPackageData = value;
  }

  public get userEntity (): TradeUserEntity {
    return this._userEntity;
  }

  public set userEntity ( value: TradeUserEntity ) {
    this._userEntity = value;
  }

  public get isPaswordComlexityLoaded (): boolean {
    return this._isPaswordComlexityLoaded;
  }

  public set isPaswordComlexityLoaded ( value: boolean ) {
    this._isPaswordComlexityLoaded = value;
  }

  public get userName (): string {
    return this._userName;
  }

  public set userName ( value: string ) {
    this._userName = value;
  }

  public get loginPassword (): string {
    return this._loginPassword;
  }

  public set loginPassword ( value: string ) {
    this._loginPassword = value;
  }

  public get tradePassword (): string {
    return this._tradePassword;
  }

  public set tradePassword ( value: string ) {
    this._tradePassword = value;
  }

  public updateCustomer ( customerData: TradeResponse ): void {
    this.userEntity.setValues ( customerData[ 'data' ] );
  }

  public getInvestmentSecurityAccountList (): string {
    let secAccountNumList = '';
    for (let a = 0; a < this.userEntity.investmentEnabledPortfolioList.length; a ++) {
      secAccountNumList = [ this.userEntity.investmentEnabledPortfolioList[ a ] , secAccountNumList ].join ( ',' );
    }
    return secAccountNumList;
  }

  public getInstitutionID (): string {
    return this.userEntity.institutionId;
  }

  public updateTransactionPasswordValidity ( customerData: TradeResponse ): void {
    if (customerData.data.level2AuthStatus === 1) {
      this.userEntity.tradingPasswordValidated = true;
      this.$tradePasswordValidate.next ( {
        validTradePassword: true ,
      } );
    } else {
      this.userEntity.tradingPasswordValidated = false;
      this.$tradePasswordValidate.next ( {
        validTradePassword: false ,
      } );
    }

  }

  public getPasswordValidateNotify (): Subject<any> {
    return this.$tradePasswordValidate;
  }

  public updateExchangeSubscription ( response: TradeResponse ): void {
    this._subscriptionPackageData = response.data.subscriptionPackageList;
    for (const item of this._subscriptionPackageData) {
      if (item.subscriptionPackageId === this._userEntity.subscriptionPackageId) {
        this._subscriptionExchangeList = item.exchangeAccountList;
        this._packageDescription = item.description;
        this._packageId = item.subscriptionPackageId;
      }
    }
    this.$subscriptionDataLoaded.next ( 1 );
  }

  public get isNewServiceCampaignAvailable (): boolean {
    return this._isNewServiceCampaignAvailable;
  }

  public set isNewServiceCampaignAvailable ( value: boolean ) {
    this._isNewServiceCampaignAvailable = value;
  }

}
