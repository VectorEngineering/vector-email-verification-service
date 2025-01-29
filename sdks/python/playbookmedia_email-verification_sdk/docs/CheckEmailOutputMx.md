# CheckEmailOutputMx

Details obtained from querying the mail server's MX records.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accepts_mail** | **bool** | Indicates if the mail server accepts emails. | 
**records** | **List[str]** | List of Fully Qualified Domain Names (FQDN) of the mail server. | 
**type** | **str** | The type of error. | 
**message** | **str** | A human-readable description of the error. | 

## Example

```python
from playbookmedia_email-verification_sdk.models.check_email_output_mx import CheckEmailOutputMx

# TODO update the JSON string below
json = "{}"
# create an instance of CheckEmailOutputMx from a JSON string
check_email_output_mx_instance = CheckEmailOutputMx.from_json(json)
# print the JSON string representation of the object
print(CheckEmailOutputMx.to_json())

# convert the object into a dict
check_email_output_mx_dict = check_email_output_mx_instance.to_dict()
# create an instance of CheckEmailOutputMx from a dict
check_email_output_mx_from_dict = CheckEmailOutputMx.from_dict(check_email_output_mx_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


