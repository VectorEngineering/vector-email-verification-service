# TaskWebhook

Optional webhook configuration for sending email verification results during bulk verification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**on_each_email** | [**Webhook**](Webhook.md) |  | [optional] 

## Example

```python
from playbookmedia_email-verification_sdk.models.task_webhook import TaskWebhook

# TODO update the JSON string below
json = "{}"
# create an instance of TaskWebhook from a JSON string
task_webhook_instance = TaskWebhook.from_json(json)
# print the JSON string representation of the object
print(TaskWebhook.to_json())

# convert the object into a dict
task_webhook_dict = task_webhook_instance.to_dict()
# create an instance of TaskWebhook from a dict
task_webhook_from_dict = TaskWebhook.from_dict(task_webhook_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


