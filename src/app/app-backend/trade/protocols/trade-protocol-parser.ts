import { TradeResponseTypes, tradeResponseTags } from './trade-response-tags';

import { LoggerService } from '../../../app-utils/logger.service';
import { TradeResponse } from './trade-response';

export class TradeProtocolParser {

  protected loggerService;

  constructor(logger: LoggerService) {
    this.loggerService = logger;
  }

  public processAjaxTradeResponse(response: string): TradeResponse {
    let processedResponse: TradeResponse;
    try {
      processedResponse = this.buildTradeResponse(response);
    } catch (error) {
      this.loggerService.logError('Error occured while json parsing trade response', 'TradeProtocolParser', error);
    }
    return processedResponse;
  }

  public processTradeResponse(response: string): TradeResponse {
    let processedResponse: TradeResponse;
    try {
      const jsonParsedResponse = JSON.parse(response);
      processedResponse = this.buildTradeResponse(jsonParsedResponse);
    } catch (error) {
      this.loggerService.logError('Error occured while json parsing trade response', 'TradeProtocolParser', error);
    }
    return processedResponse;
  }

  protected buildTradeResponse(response: any): TradeResponse {
    return new TradeResponse({ header: this.convertHeader(response.HED), data: this.convertBody(response.DAT) });
  }

  private convertHeader(header: object): object {
    let headerObject = {};

    try {
      headerObject = this.convert(header);
    } catch (error) {
      this.loggerService.logError('Error occured while converting trade response header', 'TradeProtocolParser', error);
    }
    return headerObject;
  }

  private convertBody(body: object): object {
    let bodyObject = {};

    try {
      bodyObject = this.convert(body);
    } catch (error) {
      this.loggerService.logError('Error occured while converting trade response body', 'TradeProtocolParser', error);
    }
    return bodyObject;
  }

  private convert(res: object): object {
    const convertedResponse = {};
    try {
      for (const field in res) {
        if (res.hasOwnProperty(field)) {
          const responseTag = tradeResponseTags[field];
          if (responseTag) { // add only know reponse tags
            if (responseTag.type === TradeResponseTypes.verThreeDataArray) {
              convertedResponse[responseTag.tag] = this.convertVersionThreeArray(res[field], res[responseTag.header]);
            } else if (responseTag.type === TradeResponseTypes.verThreeDataString) {
              convertedResponse[responseTag.tag] = this.convertVersionThreeString(res[field], res[responseTag.header]);
            } else if (responseTag.type === TradeResponseTypes.array) {
              convertedResponse[responseTag.tag] = this.convertArray(res[field]);
            } else if (responseTag.type === TradeResponseTypes.json) {
              convertedResponse[responseTag.tag] = this.convert(res[field]);
            } else {
              convertedResponse[responseTag.tag] = this.convertStringToValues(res[field], responseTag.type);
            }
          }
        }
      }
    } catch (error) {
      this.loggerService.logError('Error occured while converting trade response body', 'TradeProtocolParser', error);
    }
    return convertedResponse;
  }

  private convertArray(resArray: any[]): any[] {
    const result = [];
    try {
      if (resArray.length > 0) {
        for (let i = 0; i < resArray.length; i++) {
          if (typeof resArray[i] === 'object') {
            result[i] = this.convert(resArray[i]);
          } else {
            result[i] = resArray[i];
          }
        }
      }
    } catch (error) {
      this.loggerService.logError('Error occured while converting an array in trade response body', 'TradeProtocolParser', error);
    }
    return result;
  }

  private convertVersionThreeString(data: string, header: string): {} {
    const headerArray = header.split('|');
    const dataArray = data.split('|');
    const recordObj = {};

    for (let j = 0; j < dataArray.length; j++) {
      const field = tradeResponseTags[headerArray[j]];
      if (field) {
        recordObj[field.tag] = this.convertStringToValues(dataArray[j], field.type);
      }
    }
    return recordObj;
  }

  private convertVersionThreeArray(dataArray: any[], header: string): {} {
    const result = [];
    const headerArray = header.split('|');

    if (dataArray.length > 0 && headerArray.length > 0) {
      for (let i = 0; i < dataArray.length; i++) {
        const recordArray = dataArray[i].split('|');
        const recordObj = {};

        for (let j = 0; j < recordArray.length; j++) {
          const field = tradeResponseTags[headerArray[j]];
          if (field) {
            recordObj[field.tag] = this.convertStringToValues(recordArray[j], field.type);
          }
        }

        result.push(recordObj);
      }
    }

    return result;
  }

  private convertStringToValues(strVal: string, type?: number): string | number | boolean {
    let parsedVal;
    if (!type || type === TradeResponseTypes.string) {
      parsedVal = strVal;
    } else if (type === TradeResponseTypes.boolean) {
      parsedVal = JSON.parse(strVal) ? true : false;
    } else {
      try {
        parsedVal = JSON.parse(strVal);
      } catch (e) {
        parsedVal = strVal;
      }
    }
    return parsedVal;
  }

}
