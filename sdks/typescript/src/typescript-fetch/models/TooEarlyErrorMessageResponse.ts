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
import type { ErrorResponse } from './ErrorResponse';
import {
  ErrorResponseFromJSON,
  ErrorResponseFromJSONTyped,
  ErrorResponseToJSON,
} from './ErrorResponse';

/**
 * Indicates that the server is unwilling to risk processing a request that might be replayed
 * @export
 * @interface TooEarlyErrorMessageResponse
 */
export interface TooEarlyErrorMessageResponse {
  /**
   *
   * @type {number}
   * @memberof TooEarlyErrorMessageResponse
   */
  code?: number;
  /**
   *
   * @type {string}
   * @memberof TooEarlyErrorMessageResponse
   */
  message?: string;
  /**
   *
   * @type {ErrorResponse}
   * @memberof TooEarlyErrorMessageResponse
   */
  errorResponse?: ErrorResponse;
}

/**
 * Check if a given object implements the TooEarlyErrorMessageResponse interface.
 */
export function instanceOfTooEarlyErrorMessageResponse(
  value: object
): value is TooEarlyErrorMessageResponse {
  return true;
}

export function TooEarlyErrorMessageResponseFromJSON(
  json: any
): TooEarlyErrorMessageResponse {
  return TooEarlyErrorMessageResponseFromJSONTyped(json, false);
}

export function TooEarlyErrorMessageResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): TooEarlyErrorMessageResponse {
  if (json == null) {
    return json;
  }
  return {
    code: json['code'] == null ? undefined : json['code'],
    message: json['message'] == null ? undefined : json['message'],
    errorResponse:
      json['errorResponse'] == null
        ? undefined
        : ErrorResponseFromJSON(json['errorResponse']),
  };
}

export function TooEarlyErrorMessageResponseToJSON(
  value?: TooEarlyErrorMessageResponse | null
): any {
  if (value == null) {
    return value;
  }
  return {
    code: value['code'],
    message: value['message'],
    errorResponse: ErrorResponseToJSON(value['errorResponse']),
  };
}
