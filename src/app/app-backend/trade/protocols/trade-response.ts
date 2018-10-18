export class TradeResponse {
  private _header: any;
  private _data: any;

  constructor(body: { header: any, data: any }) {
    this._data = body.data;
    this._header = body.header;
  }

  public get header(): any {
    return this._header;
  }

  public get data(): any {
    return this._data;
  }
}
