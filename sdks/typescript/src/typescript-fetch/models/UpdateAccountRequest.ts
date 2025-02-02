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
import type { Account } from './Account';
import {
  AccountFromJSON,
  AccountFromJSONTyped,
  AccountToJSON,
} from './Account';

/**
 *
 * @export
 * @interface UpdateAccountRequest
 */
export interface UpdateAccountRequest {
  /**
   *
   * @type {Account}
   * @memberof UpdateAccountRequest
   */
  account?: Account;
}

/**
 * Check if a given object implements the UpdateAccountRequest interface.
 */
export function instanceOfUpdateAccountRequest(
  value: object
): value is UpdateAccountRequest {
  return true;
}

export function UpdateAccountRequestFromJSON(json: any): UpdateAccountRequest {
  return UpdateAccountRequestFromJSONTyped(json, false);
}

export function UpdateAccountRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateAccountRequest {
  if (json == null) {
    return json;
  }
  return {
    account:
      json['account'] == null ? undefined : AccountFromJSON(json['account']),
  };
}

export function UpdateAccountRequestToJSON(
  value?: UpdateAccountRequest | null
): any {
  if (value == null) {
    return value;
  }
  return {
    account: AccountToJSON(value['account']),
  };
}
