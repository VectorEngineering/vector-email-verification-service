# CheckEmailOutputSmtp

Results from connecting to the mail server via SMTP.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_connect_smtp** | **bool** | Indicates if the mail exchanger can be contacted successfully. | 
**has_full_inbox** | **bool** | Indicates if the mailbox is full. | 
**is_catch_all** | **bool** | Indicates if the email address is a catch-all address. | 
**is_deliverable** | **bool** | Indicates if an email sent to this address is deliverable. | 
**is_disabled** | **bool** | Indicates if the email address has been disabled by the provider. | 
**type** | **str** | The type of error. | 
**message** | **str** | A human-readable description of the error. | 

## Example

```python
from playbookmedia_email-verification_sdk.models.check_email_output_smtp import CheckEmailOutputSmtp

# TODO update the JSON string below
json = "{}"
# create an instance of CheckEmailOutputSmtp from a JSON string
check_email_output_smtp_instance = CheckEmailOutputSmtp.from_json(json)
# print the JSON string representation of the object
print(CheckEmailOutputSmtp.to_json())

# convert the object into a dict
check_email_output_smtp_dict = check_email_output_smtp_instance.to_dict()
# create an instance of CheckEmailOutputSmtp from a dict
check_email_output_smtp_from_dict = CheckEmailOutputSmtp.from_dict(check_email_output_smtp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


