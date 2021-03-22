import {Injectable, Injector} from "@angular/core";
import {Subject} from "rxjs";

@Injectable()
export class TracibilityDataStore {

  public documentList = [];
  public itemArr = [];
  public supplierArr = [];
  public processArr = [];
  public processStepArr = [];
  public placesArr = [];
  private _docListDataStoreUpdate$ = new Subject<string>();

  constructor(
    private injector: Injector
  ){}

  public productList(response: any): void{
    this.documentList = response.ITEM_SUPPLIER_LIST;
    this.docListDataStoreUpdate$.next(null);
  }

  public itemList(response: any): void{
    this.itemArr = response.ITEM_LIST;
    this.docListDataStoreUpdate$.next(null);
  }

  public supplierList(response: any): void{
    this.supplierArr = response.SUPPLIER_LIST;
    this.docListDataStoreUpdate$.next(null);
  }

  public processList(response: any): void{
    this.processArr = response.PROCESS_LIST;
    this.docListDataStoreUpdate$.next(null);
  }

  public processStepList(response: any): void{
    this.processStepArr = response.PLACES_STEP_LIST;
    this.docListDataStoreUpdate$.next(null);
  }

  public placesList(response: any): void{
    this.placesArr = response.PLACES_LIST;
    this.docListDataStoreUpdate$.next(null);
  }

  get docListDataStoreUpdate$(): Subject<string> {
    return this._docListDataStoreUpdate$;
  }

}