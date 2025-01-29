# SmtpDetails

Results from SMTP connection attempts to the mail server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_connect_smtp** | **bool** | Indicates if the mail exchanger can be contacted successfully. | 
**has_full_inbox** | **bool** | Indicates if the mailbox is full. | 
**is_catch_all** | **bool** | Indicates if the email address is a catch-all address. | 
**is_deliverable** | **bool** | Indicates if an email sent to this address is deliverable. | 
**is_disabled** | **bool** | Indicates if the email address has been disabled by the provider. | 

## Example

```python
from playbookmedia_email-verification_sdk.models.smtp_details import SmtpDetails

# TODO update the JSON string below
json = "{}"
# create an instance of SmtpDetails from a JSON string
smtp_details_instance = SmtpDetails.from_json(json)
# print the JSON string representation of the object
print(SmtpDetails.to_json())

# convert the object into a dict
smtp_details_dict = smtp_details_instance.to_dict()
# create an instance of SmtpDetails from a dict
smtp_details_from_dict = SmtpDetails.from_dict(smtp_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


