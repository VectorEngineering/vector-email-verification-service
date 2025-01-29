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

/**
 * - NO_NOT_FOUND_ERROR: Default value as per proto3 convention
 *  - UNDEFINED_ENDPOINT: Endpoint errors
 *
 * Requested endpoint doesn't exist
 *  - UNIMPLEMENTED: Endpoint not implemented
 *  - STORE_ID_NOT_FOUND: Resource errors
 *
 * Requested store ID doesn't exist
 *  - USER_NOT_FOUND: Requested user doesn't exist
 *  - RESOURCE_NOT_FOUND: Generic resource not found
 *  - TENANT_NOT_FOUND: Requested tenant doesn't exist
 * @export
 */
export const NotFoundErrorCode = {
  NoNotFoundError: 'NO_NOT_FOUND_ERROR',
  UndefinedEndpoint: 'UNDEFINED_ENDPOINT',
  Unimplemented: 'UNIMPLEMENTED',
  StoreIdNotFound: 'STORE_ID_NOT_FOUND',
  UserNotFound: 'USER_NOT_FOUND',
  ResourceNotFound: 'RESOURCE_NOT_FOUND',
  TenantNotFound: 'TENANT_NOT_FOUND',
} as const;
export type NotFoundErrorCode =
  (typeof NotFoundErrorCode)[keyof typeof NotFoundErrorCode];

export function instanceOfNotFoundErrorCode(value: any): boolean {
  for (const key in NotFoundErrorCode) {
    if (Object.prototype.hasOwnProperty.call(NotFoundErrorCode, key)) {
      if (
        (NotFoundErrorCode as Record<string, NotFoundErrorCode>)[key] === value
      ) {
        return true;
      }
    }
  }
  return false;
}

export function NotFoundErrorCodeFromJSON(json: any): NotFoundErrorCode {
  return NotFoundErrorCodeFromJSONTyped(json, false);
}

export function NotFoundErrorCodeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): NotFoundErrorCode {
  return json as NotFoundErrorCode;
}

export function NotFoundErrorCodeToJSON(value?: NotFoundErrorCode | null): any {
  return value as any;
}
