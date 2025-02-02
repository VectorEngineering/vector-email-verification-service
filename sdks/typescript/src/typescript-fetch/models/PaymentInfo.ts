/* tslint:disable */
/* eslint-disable */
/**
 * Lead Scraping Service API
 * Vector Lead Scraping Service API - Manages Lead Scraping Jobs
 *
 * The version of the OpenAPI document: 1.0
 * Contact: yoanyomba@vector.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 *
 * @export
 * @interface PaymentInfo
 */
export interface PaymentInfo {
  /**
   *
   * @type {number}
   * @memberof PaymentInfo
   */
  amountDue?: number;
  /**
   *
   * @type {string}
   * @memberof PaymentInfo
   */
  currency?: string;
  /**
   *
   * @type {Date}
   * @memberof PaymentInfo
   */
  dueDate?: Date;
  /**
   *
   * @type {string}
   * @memberof PaymentInfo
   */
  paymentUrl?: string;
}

/**
 * Check if a given object implements the PaymentInfo interface.
 */
export function instanceOfPaymentInfo(value: object): value is PaymentInfo {
  return true;
}

export function PaymentInfoFromJSON(json: any): PaymentInfo {
  return PaymentInfoFromJSONTyped(json, false);
}

export function PaymentInfoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PaymentInfo {
  if (json == null) {
    return json;
  }
  return {
    amountDue: json['amountDue'] == null ? undefined : json['amountDue'],
    currency: json['currency'] == null ? undefined : json['currency'],
    dueDate: json['dueDate'] == null ? undefined : new Date(json['dueDate']),
    paymentUrl: json['paymentUrl'] == null ? undefined : json['paymentUrl'],
  };
}

export function PaymentInfoToJSON(value?: PaymentInfo | null): any {
  if (value == null) {
    return value;
  }
  return {
    amountDue: value['amountDue'],
    currency: value['currency'],
    dueDate:
      value['dueDate'] == null ? undefined : value['dueDate'].toISOString(),
    paymentUrl: value['paymentUrl'],
  };
}
