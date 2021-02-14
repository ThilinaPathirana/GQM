import {Injectable, Injector} from "@angular/core";
import {Subject} from "rxjs";


@Injectable()
export class DocumentListDataStore {

  public documentList = [];
  private _docListDataStoreUpdate$ = new Subject<string>();

  constructor(
    private injector: Injector
  ){}

  public updateDocumentList(response: any): void{
    this.documentList = response.DOC_LIST;
    this.docListDataStoreUpdate$.next(null);

  }


  get docListDataStoreUpdate$(): Subject<string> {
    return this._docListDataStoreUpdate$;
  }

}
