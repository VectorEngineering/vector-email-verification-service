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
 * The method used for email verification.
 * @export
 * @interface VerifMethod
 */
export interface VerifMethod {
    /**
     * The method used for the email verification.
     * @type {string}
     * @memberof VerifMethod
     */
    type: VerifMethodTypeEnum;
}


/**
 * @export
 */
export const VerifMethodTypeEnum = {
    Smtp: 'Smtp',
    Headless: 'Headless',
    Api: 'Api',
    Skipped: 'Skipped'
} as const;
export type VerifMethodTypeEnum = typeof VerifMethodTypeEnum[keyof typeof VerifMethodTypeEnum];


/**
 * Check if a given object implements the VerifMethod interface.
 */
export function instanceOfVerifMethod(value: object): value is VerifMethod {
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function VerifMethodFromJSON(json: any): VerifMethod {
    return VerifMethodFromJSONTyped(json, false);
}

export function VerifMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): VerifMethod {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
    };
}

export function VerifMethodToJSON(json: any): VerifMethod {
    return VerifMethodToJSONTyped(json, false);
}

export function VerifMethodToJSONTyped(value?: VerifMethod | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
    };
}

