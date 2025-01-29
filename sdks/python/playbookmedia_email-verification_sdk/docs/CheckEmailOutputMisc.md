# CheckEmailOutputMisc

Additional information about the email account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_disposable** | **bool** | Indicates if the email address is from a known disposable email provider. | 
**is_role_account** | **bool** | Indicates if the email address is a role-based account. | 
**gravatar_url** | **str** | URL to the Gravatar profile picture associated with the email, if available and requested. | [optional] 
**is_b2c** | **bool** | Is this a B2C email address? | 
**type** | **str** | The type of error. | 
**message** | **str** | A human-readable description of the error. | 

## Example

```python
from playbookmedia_email-verification_sdk.models.check_email_output_misc import CheckEmailOutputMisc

# TODO update the JSON string below
json = "{}"
# create an instance of CheckEmailOutputMisc from a JSON string
check_email_output_misc_instance = CheckEmailOutputMisc.from_json(json)
# print the JSON string representation of the object
print(CheckEmailOutputMisc.to_json())

# convert the object into a dict
check_email_output_misc_dict = check_email_output_misc_instance.to_dict()
# create an instance of CheckEmailOutputMisc from a dict
check_email_output_misc_from_dict = CheckEmailOutputMisc.from_dict(check_email_output_misc_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


