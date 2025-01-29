# DebugDetailsSmtp

SMTP details used for debugging, including the verification method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**verif_method** | [**VerifMethod**](VerifMethod.md) |  | [optional] 

## Example

```python
from playbookmedia_email-verification_sdk.models.debug_details_smtp import DebugDetailsSmtp

# TODO update the JSON string below
json = "{}"
# create an instance of DebugDetailsSmtp from a JSON string
debug_details_smtp_instance = DebugDetailsSmtp.from_json(json)
# print the JSON string representation of the object
print(DebugDetailsSmtp.to_json())

# convert the object into a dict
debug_details_smtp_dict = debug_details_smtp_instance.to_dict()
# create an instance of DebugDetailsSmtp from a dict
debug_details_smtp_from_dict = DebugDetailsSmtp.from_dict(debug_details_smtp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


