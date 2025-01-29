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
 * @interface Dependency
 */
export interface Dependency {
  /**
   *
   * @type {string}
   * @memberof Dependency
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof Dependency
   */
  status?: string;
  /**
   *
   * @type {string}
   * @memberof Dependency
   */
  error?: string;
  /**
   *
   * @type {number}
   * @memberof Dependency
   */
  latency?: number;
}

/**
 * Check if a given object implements the Dependency interface.
 */
export function instanceOfDependency(value: object): value is Dependency {
  return true;
}

export function DependencyFromJSON(json: any): Dependency {
  return DependencyFromJSONTyped(json, false);
}

export function DependencyFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Dependency {
  if (json == null) {
    return json;
  }
  return {
    name: json['name'] == null ? undefined : json['name'],
    status: json['status'] == null ? undefined : json['status'],
    error: json['error'] == null ? undefined : json['error'],
    latency: json['latency'] == null ? undefined : json['latency'],
  };
}

export function DependencyToJSON(value?: Dependency | null): any {
  if (value == null) {
    return value;
  }
  return {
    name: value['name'],
    status: value['status'],
    error: value['error'],
    latency: value['latency'],
  };
}
