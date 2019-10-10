import {Injectable, Injector} from "@angular/core";
import {Subject} from "rxjs";

export interface ScopeEntity {
  system: string;
  company: string;

}

@Injectable()
export class ScopeDataStore {
  public scopeData = [];
  private _scopeStoreUpdate$ = new Subject<string>();

  constructor(
    private injector: Injector
  ){

  }

  public updateScopeData(response: any): void{
    this.scopeData = response;
    this._scopeStoreUpdate$.next(null);
  }

  public get scopeStoreUpdate$(): Subject<string> {
    return this._scopeStoreUpdate$;
  }




}
