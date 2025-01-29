# CoreError

Details of an error encountered during the verification process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of error. | 
**message** | **str** | A human-readable description of the error. | 

## Example

```python
from playbookmedia_email-verification_sdk.models.core_error import CoreError

# TODO update the JSON string below
json = "{}"
# create an instance of CoreError from a JSON string
core_error_instance = CoreError.from_json(json)
# print the JSON string representation of the object
print(CoreError.to_json())

# convert the object into a dict
core_error_dict = core_error_instance.to_dict()
# create an instance of CoreError from a dict
core_error_from_dict = CoreError.from_dict(core_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


