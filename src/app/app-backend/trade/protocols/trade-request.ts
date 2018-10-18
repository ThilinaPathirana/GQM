import { ConOrderCategories } from '../../../app-constants/enums/trade-meta/trade-utils/con-order-categories.enum';
import { ConOrderStatusTypes } from '../../../app-constants/enums/trade-meta/trade-utils/con-order-status-types.enum';
import { ConditionTypes } from '../../../app-constants/enums/trade-meta/trade-utils/condition-types.enum';
// import { DeviceChannel } from '../../../app-constants/enums/device-channel.enum';
export class TradeRequest<G, T> {

  // Header
  private _messageGroup: G;
  private _messageType: T;
  private _language: string;
  private _sessionId: string;
  private _channelId: number;
  private _clientVersion: string;
  private _userId: string;

  // Authentication
  private _loginName: string;
  private _encodingType: string;
  private _password: any;
  private _masterAccountNumber: string;
  private _oldLoginPassword: string;
  private _newLoginPassword: string;
  private _oldTransactionPassword: string;
  private _newTransactionPassword: string;
  private _changePasswordType: number;
  private _level2Password: string;
  private _level2PasswordType: number;
  private _isAuthRequest: boolean;

  // wealth portfolio
  private _securityAccountNumberList: Array<string>;


  get messageGroup(): G {
    return this._messageGroup;
  }

  set messageGroup(value: G) {
    this._messageGroup = value;
  }

  get messageType(): T {
    return this._messageType;
  }

  set messageType(value: T) {
    this._messageType = value;
  }

  get language(): string {
    return this._language;
  }

  set language(value: string) {
    this._language = value;
  }

  get sessionId(): string {
    return this._sessionId;
  }

  set sessionId(value: string) {
    this._sessionId = value;
  }

  get channelId(): number {
    return this._channelId;
  }

  set channelId(value: number) {
    this._channelId = value;
  }

  get clientVersion(): string {
    return this._clientVersion;
  }

  set clientVersion(value: string) {
    this._clientVersion = value;
  }

  get userId(): string {
    return this._userId;
  }

  set userId(value: string) {
    this._userId = value;
  }

  get loginName(): string {
    return this._loginName;
  }

  set loginName(value: string) {
    this._loginName = value;
  }

  get encodingType(): string {
    return this._encodingType;
  }

  set encodingType(value: string) {
    this._encodingType = value;
  }

  get password(): any {
    return this._password;
  }

  set password(value: any) {
    this._password = value;
  }

  get masterAccountNumber(): string {
    return this._masterAccountNumber;
  }

  set masterAccountNumber(value: string) {
    this._masterAccountNumber = value;
  }

  get oldLoginPassword(): string {
    return this._oldLoginPassword;
  }

  set oldLoginPassword(value: string) {
    this._oldLoginPassword = value;
  }

  get newLoginPassword(): string {
    return this._newLoginPassword;
  }

  set newLoginPassword(value: string) {
    this._newLoginPassword = value;
  }

  get oldTransactionPassword(): string {
    return this._oldTransactionPassword;
  }

  set oldTransactionPassword(value: string) {
    this._oldTransactionPassword = value;
  }

  get newTransactionPassword(): string {
    return this._newTransactionPassword;
  }

  set newTransactionPassword(value: string) {
    this._newTransactionPassword = value;
  }

  get changePasswordType(): number {
    return this._changePasswordType;
  }

  set changePasswordType(value: number) {
    this._changePasswordType = value;
  }

  get level2Password(): string {
    return this._level2Password;
  }

  set level2Password(value: string) {
    this._level2Password = value;
  }

  get level2PasswordType(): number {
    return this._level2PasswordType;
  }

  set level2PasswordType(value: number) {
    this._level2PasswordType = value;
  }

  get isAuthRequest(): boolean {
    return this._isAuthRequest;
  }

  set isAuthRequest(value: boolean) {
    this._isAuthRequest = value;
  }

  get securityAccountNumberList(): Array<string> {
    return this._securityAccountNumberList;
  }

  set securityAccountNumberList(value: Array<string>) {
    this._securityAccountNumberList = value;
  }
}
