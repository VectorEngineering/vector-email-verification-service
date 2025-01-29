# CheckEmailRequest

A request object to perform an email verification. The `to_email` field is required, all other fields are optional.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from_email** | **str** | In the SMTP connection, the FROM email address. | [optional] 
**to_email** | **str** | The email address to check. | 
**hello_name** | **str** | In the SMTP connection, the EHLO hostname. | [optional] 
**proxy** | [**CheckEmailInputProxy**](CheckEmailInputProxy.md) |  | [optional] 
**smtp_port** | **float** | SMTP port to use for email validation. Defaults to 25, but 465, 587, and 2525 are sometimes also used. | [optional] 
**gmail_verif_method** | [**GmailVerifMethod**](GmailVerifMethod.md) |  | [optional] 
**hotmailb2b_verif_method** | [**HotmailB2BVerifMethod**](HotmailB2BVerifMethod.md) |  | [optional] 
**hotmailb2c_verif_method** | [**HotmailB2CVerifMethod**](HotmailB2CVerifMethod.md) |  | [optional] 
**yahoo_verif_method** | [**YahooVerifMethod**](YahooVerifMethod.md) |  | [optional] 
**check_gravatar** | **bool** | Whether to check if a Gravatar image exists for the given email. | [optional] 

## Example

```python
from playbookmedia_email-verification_sdk.models.check_email_request import CheckEmailRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CheckEmailRequest from a JSON string
check_email_request_instance = CheckEmailRequest.from_json(json)
# print the JSON string representation of the object
print(CheckEmailRequest.to_json())

# convert the object into a dict
check_email_request_dict = check_email_request_instance.to_dict()
# create an instance of CheckEmailRequest from a dict
check_email_request_from_dict = CheckEmailRequest.from_dict(check_email_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


