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
import type { ScrapingJob } from './ScrapingJob';
import {
  ScrapingJobFromJSON,
  ScrapingJobFromJSONTyped,
  ScrapingJobToJSON,
} from './ScrapingJob';

/**
 * Account represents a user account within the workspace service.
 * It serves as the top-level container for all user-specific workspaces and settings.
 *
 * Key features:
 * - Unique identification via Auth0
 * - Organization and tenant context
 * - Audit timestamps
 * - Associated scraping jobs
 *
 * Database considerations:
 * - Uses GORM for ORM mapping
 * - Includes indexes for efficient querying
 * - Supports soft deletes via deleted_at
 *
 * Usage example:
 * ```go
 * account := &Account{
 *     AuthPlatformUserId: "auth0|123",
 *     OrgId: "org_123",
 *     TenantId: "tenant_456",
 * }
 * ```
 * @export
 * @interface Account
 */
export interface Account {
  /**
   *
   * @type {string}
   * @memberof Account
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof Account
   */
  authPlatformUserId?: string;
  /**
   *
   * @type {string}
   * @memberof Account
   */
  orgId?: string;
  /**
   *
   * @type {string}
   * @memberof Account
   */
  tenantId?: string;
  /**
   *
   * @type {string}
   * @memberof Account
   */
  email?: string;
  /**
   *
   * @type {Date}
   * @memberof Account
   */
  lastModifiedAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof Account
   */
  deletedAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof Account
   */
  createdAt?: Date;
  /**
   *
   * @type {Array<ScrapingJob>}
   * @memberof Account
   */
  scrapingJobs?: Array<ScrapingJob>;
}

/**
 * Check if a given object implements the Account interface.
 */
export function instanceOfAccount(value: object): value is Account {
  return true;
}

export function AccountFromJSON(json: any): Account {
  return AccountFromJSONTyped(json, false);
}

export function AccountFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Account {
  if (json == null) {
    return json;
  }
  return {
    id: json['id'] == null ? undefined : json['id'],
    authPlatformUserId:
      json['authPlatformUserId'] == null
        ? undefined
        : json['authPlatformUserId'],
    orgId: json['orgId'] == null ? undefined : json['orgId'],
    tenantId: json['tenantId'] == null ? undefined : json['tenantId'],
    email: json['email'] == null ? undefined : json['email'],
    lastModifiedAt:
      json['lastModifiedAt'] == null
        ? undefined
        : new Date(json['lastModifiedAt']),
    deletedAt:
      json['deletedAt'] == null ? undefined : new Date(json['deletedAt']),
    createdAt:
      json['createdAt'] == null ? undefined : new Date(json['createdAt']),
    scrapingJobs:
      json['scrapingJobs'] == null
        ? undefined
        : (json['scrapingJobs'] as Array<any>).map(ScrapingJobFromJSON),
  };
}

export function AccountToJSON(value?: Account | null): any {
  if (value == null) {
    return value;
  }
  return {
    id: value['id'],
    authPlatformUserId: value['authPlatformUserId'],
    orgId: value['orgId'],
    tenantId: value['tenantId'],
    email: value['email'],
    lastModifiedAt:
      value['lastModifiedAt'] == null
        ? undefined
        : value['lastModifiedAt'].toISOString(),
    deletedAt:
      value['deletedAt'] == null ? undefined : value['deletedAt'].toISOString(),
    createdAt:
      value['createdAt'] == null ? undefined : value['createdAt'].toISOString(),
    scrapingJobs:
      value['scrapingJobs'] == null
        ? undefined
        : (value['scrapingJobs'] as Array<any>).map(ScrapingJobToJSON),
  };
}
