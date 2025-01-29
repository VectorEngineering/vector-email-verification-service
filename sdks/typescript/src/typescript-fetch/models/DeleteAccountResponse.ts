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
 * @interface DeleteAccountResponse
 */
export interface DeleteAccountResponse {
  /**
   *
   * @type {boolean}
   * @memberof DeleteAccountResponse
   */
  success?: boolean;
}

/**
 * Check if a given object implements the DeleteAccountResponse interface.
 */
export function instanceOfDeleteAccountResponse(
  value: object
): value is DeleteAccountResponse {
  return true;
}

export function DeleteAccountResponseFromJSON(
  json: any
): DeleteAccountResponse {
  return DeleteAccountResponseFromJSONTyped(json, false);
}

export function DeleteAccountResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DeleteAccountResponse {
  if (json == null) {
    return json;
  }
  return {
    success: json['success'] == null ? undefined : json['success'],
  };
}

export function DeleteAccountResponseToJSON(
  value?: DeleteAccountResponse | null
): any {
  if (value == null) {
    return value;
  }
  return {
    success: value['success'],
  };
}
