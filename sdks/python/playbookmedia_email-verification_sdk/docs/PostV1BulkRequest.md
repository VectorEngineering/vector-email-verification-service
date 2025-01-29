# PostV1BulkRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input** | **List[str]** | A list of emails to verify. | 
**webhook** | [**TaskWebhook**](TaskWebhook.md) |  | [optional] 

## Example

```python
from playbookmedia_email-verification_sdk.models.post_v1_bulk_request import PostV1BulkRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PostV1BulkRequest from a JSON string
post_v1_bulk_request_instance = PostV1BulkRequest.from_json(json)
# print the JSON string representation of the object
print(PostV1BulkRequest.to_json())

# convert the object into a dict
post_v1_bulk_request_dict = post_v1_bulk_request_instance.to_dict()
# create an instance of PostV1BulkRequest from a dict
post_v1_bulk_request_from_dict = PostV1BulkRequest.from_dict(post_v1_bulk_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


