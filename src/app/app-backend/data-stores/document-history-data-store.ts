import {Injectable, Injector} from "@angular/core";
import {Subject} from "rxjs";

@Injectable()
export class DocumentHistoryDataStore {

  public historyList = [];
  private _docHistoryDataStoreUpdate$ = new Subject<string>();

  constructor(
    private injector: Injector
  ){}

  public updateDocumentHistoryStore(response:any): void{
    this.historyList = response.DOC_HISTORY_LIST;
    this._docHistoryDataStoreUpdate$.next(null);

  }


  public get docHistoryDataStoreUpdate$(): Subject<string> {
    return this._docHistoryDataStoreUpdate$;
  }
}
