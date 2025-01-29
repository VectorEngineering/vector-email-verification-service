# MxDetails

Details about the mail server's MX records.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accepts_mail** | **bool** | Indicates if the mail server accepts emails. | 
**records** | **List[str]** | List of Fully Qualified Domain Names (FQDN) of the mail server. | 

## Example

```python
from playbookmedia_email-verification_sdk.models.mx_details import MxDetails

# TODO update the JSON string below
json = "{}"
# create an instance of MxDetails from a JSON string
mx_details_instance = MxDetails.from_json(json)
# print the JSON string representation of the object
print(MxDetails.to_json())

# convert the object into a dict
mx_details_dict = mx_details_instance.to_dict()
# create an instance of MxDetails from a dict
mx_details_from_dict = MxDetails.from_dict(mx_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


