# CheckEmailInputProxy

Proxy configuration for email verification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** | The proxy host address. | 
**port** | **int** | The proxy port number. | 
**username** | **str** | Username for proxy authentication. | [optional] 
**password** | **str** | Password for proxy authentication. | [optional] 

## Example

```python
from playbookmedia_email-verification_sdk.models.check_email_input_proxy import CheckEmailInputProxy

# TODO update the JSON string below
json = "{}"
# create an instance of CheckEmailInputProxy from a JSON string
check_email_input_proxy_instance = CheckEmailInputProxy.from_json(json)
# print the JSON string representation of the object
print(CheckEmailInputProxy.to_json())

# convert the object into a dict
check_email_input_proxy_dict = check_email_input_proxy_instance.to_dict()
# create an instance of CheckEmailInputProxy from a dict
check_email_input_proxy_from_dict = CheckEmailInputProxy.from_dict(check_email_input_proxy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


