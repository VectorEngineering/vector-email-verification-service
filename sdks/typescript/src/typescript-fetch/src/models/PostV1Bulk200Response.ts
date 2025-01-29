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
 * 
 * @export
 * @interface PostV1Bulk200Response
 */
export interface PostV1Bulk200Response {
    /**
     * The unique ID generated for this bulk verification job. Use this `job_id` to query the progress or results of the bulk verification.
     * @type {number}
     * @memberof PostV1Bulk200Response
     */
    job_id: number;
}

/**
 * Check if a given object implements the PostV1Bulk200Response interface.
 */
export function instanceOfPostV1Bulk200Response(value: object): value is PostV1Bulk200Response {
    if (!('job_id' in value) || value['job_id'] === undefined) return false;
    return true;
}

export function PostV1Bulk200ResponseFromJSON(json: any): PostV1Bulk200Response {
    return PostV1Bulk200ResponseFromJSONTyped(json, false);
}

export function PostV1Bulk200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostV1Bulk200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'job_id': json['job_id'],
    };
}

export function PostV1Bulk200ResponseToJSON(json: any): PostV1Bulk200Response {
    return PostV1Bulk200ResponseToJSONTyped(json, false);
}

export function PostV1Bulk200ResponseToJSONTyped(value?: PostV1Bulk200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'job_id': value['job_id'],
    };
}

