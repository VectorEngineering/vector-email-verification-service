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
import type { Webhook } from './Webhook';
import {
    WebhookFromJSON,
    WebhookFromJSONTyped,
    WebhookToJSON,
    WebhookToJSONTyped,
} from './Webhook';

/**
 * Optional webhook configuration for sending email verification results during bulk verification.
 * @export
 * @interface TaskWebhook
 */
export interface TaskWebhook {
    /**
     * 
     * @type {Webhook}
     * @memberof TaskWebhook
     */
    on_each_email?: Webhook;
}

/**
 * Check if a given object implements the TaskWebhook interface.
 */
export function instanceOfTaskWebhook(value: object): value is TaskWebhook {
    return true;
}

export function TaskWebhookFromJSON(json: any): TaskWebhook {
    return TaskWebhookFromJSONTyped(json, false);
}

export function TaskWebhookFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskWebhook {
    if (json == null) {
        return json;
    }
    return {
        
        'on_each_email': json['on_each_email'] == null ? undefined : WebhookFromJSON(json['on_each_email']),
    };
}

export function TaskWebhookToJSON(json: any): TaskWebhook {
    return TaskWebhookToJSONTyped(json, false);
}

export function TaskWebhookToJSONTyped(value?: TaskWebhook | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'on_each_email': WebhookToJSON(value['on_each_email']),
    };
}

