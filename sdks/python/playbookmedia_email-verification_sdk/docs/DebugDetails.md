# DebugDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_time** | **str** | The timestamp when the email verification started. | 
**end_time** | **str** | The timestamp when the email verification ended. | 
**duration** | [**Duration**](Duration.md) |  | 
**server_name** | **str** | The name of the server that performed the verification. | 
**smtp** | [**DebugDetailsSmtp**](DebugDetailsSmtp.md) |  | 

## Example

```python
from playbookmedia_email-verification_sdk.models.debug_details import DebugDetails

# TODO update the JSON string below
json = "{}"
# create an instance of DebugDetails from a JSON string
debug_details_instance = DebugDetails.from_json(json)
# print the JSON string representation of the object
print(DebugDetails.to_json())

# convert the object into a dict
debug_details_dict = debug_details_instance.to_dict()
# create an instance of DebugDetails from a dict
debug_details_from_dict = DebugDetails.from_dict(debug_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


