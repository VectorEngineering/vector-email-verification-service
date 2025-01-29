# GetV1BulkResults200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**CheckEmailOutput**](CheckEmailOutput.md) |  | 

## Example

```python
from playbookmedia_email-verification_sdk.models.get_v1_bulk_results200_response import GetV1BulkResults200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetV1BulkResults200Response from a JSON string
get_v1_bulk_results200_response_instance = GetV1BulkResults200Response.from_json(json)
# print the JSON string representation of the object
print(GetV1BulkResults200Response.to_json())

# convert the object into a dict
get_v1_bulk_results200_response_dict = get_v1_bulk_results200_response_instance.to_dict()
# create an instance of GetV1BulkResults200Response from a dict
get_v1_bulk_results200_response_from_dict = GetV1BulkResults200Response.from_dict(get_v1_bulk_results200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


