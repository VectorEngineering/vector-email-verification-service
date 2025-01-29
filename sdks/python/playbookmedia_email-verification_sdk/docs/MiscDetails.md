# MiscDetails

Additional information about the email account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_disposable** | **bool** | Indicates if the email address is from a known disposable email provider. | 
**is_role_account** | **bool** | Indicates if the email address is a role-based account. | 
**gravatar_url** | **str** | URL to the Gravatar profile picture associated with the email, if available and requested. | [optional] 
**is_b2c** | **bool** | Is this a B2C email address? | 

## Example

```python
from playbookmedia_email-verification_sdk.models.misc_details import MiscDetails

# TODO update the JSON string below
json = "{}"
# create an instance of MiscDetails from a JSON string
misc_details_instance = MiscDetails.from_json(json)
# print the JSON string representation of the object
print(MiscDetails.to_json())

# convert the object into a dict
misc_details_dict = misc_details_instance.to_dict()
# create an instance of MiscDetails from a dict
misc_details_from_dict = MiscDetails.from_dict(misc_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


