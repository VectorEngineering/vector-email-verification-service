/* tslint:disable */
/* eslint-disable */
/**
 * Reacher
 * ### What is Reacher?  Reacher is a robust, open-source email verification API service available as both a SaaS and self-hosted solution.
 *
 * The version of the OpenAPI document: 0.10.0
 * Contact: amaury@reacher.email
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * A summary of the processed emails.
 * @export
 * @interface GetV1Bulk200ResponseSummary
 */
export interface GetV1Bulk200ResponseSummary {
    /**
     * The number of emails where `is_reachable` is "safe".
     * @type {number}
     * @memberof GetV1Bulk200ResponseSummary
     */
    total_safe: number;
    /**
     * The number of emails where `is_reachable` is "invalid".
     * @type {number}
     * @memberof GetV1Bulk200ResponseSummary
     */
    total_invalid: number;
    /**
     * The number of emails where `is_reachable` is "risky".
     * @type {number}
     * @memberof GetV1Bulk200ResponseSummary
     */
    total_risky: number;
    /**
     * The number of emails where `is_reachable` is "unknown".
     * @type {number}
     * @memberof GetV1Bulk200ResponseSummary
     */
    total_unknown: number;
}

/**
 * Check if a given object implements the GetV1Bulk200ResponseSummary interface.
 */
export function instanceOfGetV1Bulk200ResponseSummary(value: object): value is GetV1Bulk200ResponseSummary {
    if (!('total_safe' in value) || value['total_safe'] === undefined) return false;
    if (!('total_invalid' in value) || value['total_invalid'] === undefined) return false;
    if (!('total_risky' in value) || value['total_risky'] === undefined) return false;
    if (!('total_unknown' in value) || value['total_unknown'] === undefined) return false;
    return true;
}

export function GetV1Bulk200ResponseSummaryFromJSON(json: any): GetV1Bulk200ResponseSummary {
    return GetV1Bulk200ResponseSummaryFromJSONTyped(json, false);
}

export function GetV1Bulk200ResponseSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetV1Bulk200ResponseSummary {
    if (json == null) {
        return json;
    }
    return {
        
        'total_safe': json['total_safe'],
        'total_invalid': json['total_invalid'],
        'total_risky': json['total_risky'],
        'total_unknown': json['total_unknown'],
    };
}

export function GetV1Bulk200ResponseSummaryToJSON(json: any): GetV1Bulk200ResponseSummary {
    return GetV1Bulk200ResponseSummaryToJSONTyped(json, false);
}

export function GetV1Bulk200ResponseSummaryToJSONTyped(value?: GetV1Bulk200ResponseSummary | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'total_safe': value['total_safe'],
        'total_invalid': value['total_invalid'],
        'total_risky': value['total_risky'],
        'total_unknown': value['total_unknown'],
    };
}

