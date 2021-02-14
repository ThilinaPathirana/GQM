import { CacheAtService } from "../cache/cache-at.service";
import { Injectable } from "@angular/core";
import { BoMessageGroups } from "../../app-constants/enums/bo-message-groups.enum";
import { BoMessageTypes } from "../../app-constants/enums/bo-message-types.enum";
import { ATCacheTypes } from "../../app-constants/enums/at-cache-type.enum";
import { BackOfficeRequestHandler } from "../communication/ajax/bo-request-handler";
import { Channels } from "../../app-constants/enums/channels.enum";
import { LoggerService } from "../../app-utils/logger.service";
import { DataService } from "../communication/data.service";
import { ScopeDataStore } from "../data-stores/scope-data-store";
import { RequestTypes } from "../../app-constants/enums/request-types.enum";
import { DocumentListDataStore } from "../data-stores/document-list-data-store";
import { ResponseMsgTypes } from "../../app-constants/enums/response-msg-types.enum";
import { DocumentHistoryDataStore } from "../data-stores/document-history-data-store";
import { TracibilityDataStore } from "../data-stores/tracibility-data-store";
import { Subject } from "rxjs";

@Injectable()
export class BackOfficeService {
  private msgGroup;
  private msgType;
  private response;
  private _addDocSubject$ = new Subject<number>();
  private _generateIDSubject$ = new Subject<string>();
  constructor(
    private cache: CacheAtService,
    private loggerService: LoggerService,
    private dataService: DataService,
    private documentListDataStore: DocumentListDataStore,
    private documentHistoryDataStore: DocumentHistoryDataStore,
    private scopeDataStore: ScopeDataStore,
    private tracibilityDataStore: TracibilityDataStore,
  ) {
    this.getResponse();
  }

  public registerUser(data): void {
    this.getBackOfficeData(
      BoMessageGroups.Register,
      BoMessageTypes.Register,
      data,
      ATCacheTypes.NET
    );
  }

  public addScope(data): void {
    this.getBackOfficeData(
      BoMessageGroups.Scope,
      BoMessageTypes.Add_Scope,
      data,
      ATCacheTypes.NET
    );
  }

  public sendCommentEmail(data): void {
    this.getBackOfficeData(
      BoMessageGroups.Email,
      BoMessageTypes.AddComment,
      data,
      ATCacheTypes.NET
    );
  }

  public requestData(requestType: number, data: any): void {
    switch (requestType) {
      case RequestTypes.documentMeta: {
        this.msgGroup = BoMessageGroups.DocumentMeta;
        this.msgType = BoMessageTypes.DocumentMeta;
        break;
      }
      case RequestTypes.documentHistory: {
        this.msgGroup = BoMessageGroups.DocumentMeta;
        this.msgType = BoMessageTypes.DocumentHistory;
        break;
      }
      case RequestTypes.productMeta: {
        this.msgGroup = BoMessageGroups.Tracibility;
        this.msgType = BoMessageTypes.ListProducts;
        break;
      }
      case RequestTypes.itemMeta: {
        this.msgGroup = BoMessageGroups.Tracibility;
        this.msgType = BoMessageTypes.ListItem;
        break;
      }
      case RequestTypes.supplierMeta: {
        this.msgGroup = BoMessageGroups.Tracibility;
        this.msgType = BoMessageTypes.ListSupplier;
        break;
      }
      case RequestTypes.processMeta: {
        this.msgGroup = BoMessageGroups.Tracibility;
        this.msgType = BoMessageTypes.ListProcess;
        break;
      }
      case RequestTypes.processStepMeta: {
        this.msgGroup = BoMessageGroups.Tracibility;
        this.msgType = BoMessageTypes.ListProcessSteps;
        break;
      }
      case RequestTypes.placesMeta: {
        this.msgGroup = BoMessageGroups.Tracibility;
        this.msgType = BoMessageTypes.ListPlaces;
        break;
      }
    }

    this.getBackOfficeData(
      this.msgGroup,
      this.msgType,
      { EXT_FILTER: data, PAGE: 0 },
      ATCacheTypes.NET
    );
  }

  public generateID(data: any): void {
    this.getBackOfficeData(
      BoMessageGroups.DocumentMeta,
      BoMessageTypes.generateID,
      data,
      ATCacheTypes.NET
    );
  }

  public addEditDoc(data: any): void {
    this.getBackOfficeData(
      BoMessageGroups.DocumentMeta,
      BoMessageTypes.AddDoc,
      data,
      ATCacheTypes.NET
    );
  }

  public viewScope(data): void {
    this.getBackOfficeData(
      BoMessageGroups.Scope,
      BoMessageTypes.View_Scope,
      { EXT_FILTER: "", PAGE: 1 },
      ATCacheTypes.NET
    );
  }

  public getResponse(): any {
    this.dataService.getAjaxResponseSteam().subscribe((data) => {
      if (data) {
        const msgType = data.response.HED.MSG_TYP;
        const msgGrp = data.response.HED.MSG_GRP;
        const responseData = data.response.DAT;
        switch (msgGrp) {
          case BoMessageGroups.DocumentMeta: {
            switch (msgType) {
              case ResponseMsgTypes.DocumentList: {
                this.documentListDataStore.updateDocumentList(responseData);
                break;
              }
              case ResponseMsgTypes.DocHistory: {
                this.documentHistoryDataStore.updateDocumentHistoryStore(
                  responseData
                );
                break;
              }
              case ResponseMsgTypes.GenerateID: {
                this._generateIDSubject$.next(data.response.DAT.KEY);
                break;
              }
              case ResponseMsgTypes.AddDoc: {
                this._addDocSubject$.next(data.response.DAT.ACT_STATUS);
                break;
              }
            }
          }
          case BoMessageGroups.Tracibility: {
            switch(msgType) {
              case ResponseMsgTypes.ProductList: {
                this.tracibilityDataStore.productList(responseData);
                break;
              }
              case ResponseMsgTypes.ItemList: {
                this.tracibilityDataStore.itemList(responseData);
                break;
              }
              case ResponseMsgTypes.SupplierList: {
                this.tracibilityDataStore.supplierList(responseData);
                break;
              }
              case ResponseMsgTypes.ProcessList: {
                this.tracibilityDataStore.processList(responseData);
                break;
              }
              case ResponseMsgTypes.ProcessStepList: {
                this.tracibilityDataStore.processStepList(responseData);
                break;
              }
              case ResponseMsgTypes.PlacesList: {
                this.tracibilityDataStore.placesList(responseData);
                break;
              }
            }
          }
        }
      }
    });
    return true;
  }

  public addProcessStep(data): void {
    this.getBackOfficeData(
      BoMessageGroups.Tracibility,
      BoMessageTypes.AddProcessStep,
      data,
      ATCacheTypes.NET
    );
  }

  public supplierRegistration(data): void {
    this.getBackOfficeData(
      BoMessageGroups.Tracibility,
      BoMessageTypes.AddSupplier,
      data,
      ATCacheTypes.NET
    );
  }

  public suppliersProduct(data): void {
    this.getBackOfficeData(
      BoMessageGroups.Tracibility,
      BoMessageTypes.AddSupplierProduct,
      data,
      ATCacheTypes.NET
    );
  }

  public addProcess(data): void {
    this.getBackOfficeData(
      BoMessageGroups.Tracibility,
      BoMessageTypes.AddProcess,
      data,
      ATCacheTypes.NET
    );
  }

  public label(data): void {
    this.getBackOfficeData(
      BoMessageGroups.Tracibility,
      BoMessageTypes.Label,
      data,
      ATCacheTypes.NET
    );
  }

  public addItem(data): void {
    this.getBackOfficeData(
      BoMessageGroups.Tracibility,
      BoMessageTypes.AddItem,
      data,
      ATCacheTypes.NET
    );
  }

  /**
   * Generate back office ajax request and send request using caching service
   *
   * @param {BoMessageGroups} group - request header message group
   * @param {BoMessageTypes} type - request header message type
   * @param {JSON} data - request data in json format
   * @param {ATCacheTypes} cacheType - request sending cache mode
   * @returns {JSON} admin terminal back office service response data
   */
  public getBackOfficeData(
    group: BoMessageGroups,
    type: BoMessageTypes,
    data: any,
    cacheType: ATCacheTypes
  ): Promise<any> {
    const requestMeta = {
      group,
      type,
      data,
      cacheType,
    };
    return this.sendBackOfficeRequest(requestMeta);
  }
  /**
   * Process server response before pass into the application
   *
   * @param {JSON} boResponse - server response which need to process
   */
  private processBackOfficeData(boResponse: any): void {
    // this.loggerService.logInfo(boResponse.toString(), 'BoService');
    // Validate for invalid session responses
  }

  /**
   * Send back office ajax request via cache layer and send back the server response
   *
   * @param {any} data - back office request meta data for generate the request
   * @returns {any} back office response for the request
   */
  private sendBackOfficeRequest(data: {
    group: BoMessageGroups;
    type: BoMessageTypes;
    data: any;
    cacheType: ATCacheTypes;
  }): Promise<any> {
    const request = BackOfficeRequestHandler.getRequest(
      data.group,
      data.type,
      data.data,
      data.cacheType
    );

    const cacheRequest = {
      channel: Channels.BackOffice,
      auth: false,
      data: BackOfficeRequestHandler.getAjaxAtRequest(request), // for ajax
    };
    return this.cache.ajaxGet(this.cache.generateGetATRequest(cacheRequest)); // for ajax
  }

  get addDocSubject$(): Subject<number> {
    return this._addDocSubject$;
  }

  get generateIDSubject$(): Subject<string> {
    return this._generateIDSubject$;
  }
}
