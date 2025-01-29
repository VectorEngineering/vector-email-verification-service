# VerifMethod

The method used for email verification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The method used for the email verification. | 

## Example

```python
from playbookmedia_email-verification_sdk.models.verif_method import VerifMethod

# TODO update the JSON string below
json = "{}"
# create an instance of VerifMethod from a JSON string
verif_method_instance = VerifMethod.from_json(json)
# print the JSON string representation of the object
print(VerifMethod.to_json())

# convert the object into a dict
verif_method_dict = verif_method_instance.to_dict()
# create an instance of VerifMethod from a dict
verif_method_from_dict = VerifMethod.from_dict(verif_method_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


