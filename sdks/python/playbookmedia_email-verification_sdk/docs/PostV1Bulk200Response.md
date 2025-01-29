# PostV1Bulk200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_id** | **int** | The unique ID generated for this bulk verification job. Use this &#x60;job_id&#x60; to query the progress or results of the bulk verification. | 

## Example

```python
from playbookmedia_email-verification_sdk.models.post_v1_bulk200_response import PostV1Bulk200Response

# TODO update the JSON string below
json = "{}"
# create an instance of PostV1Bulk200Response from a JSON string
post_v1_bulk200_response_instance = PostV1Bulk200Response.from_json(json)
# print the JSON string representation of the object
print(PostV1Bulk200Response.to_json())

# convert the object into a dict
post_v1_bulk200_response_dict = post_v1_bulk200_response_instance.to_dict()
# create an instance of PostV1Bulk200Response from a dict
post_v1_bulk200_response_from_dict = PostV1Bulk200Response.from_dict(post_v1_bulk200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


