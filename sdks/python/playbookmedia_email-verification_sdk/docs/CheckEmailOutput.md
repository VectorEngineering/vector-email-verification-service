# CheckEmailOutput

The result of the email verification process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input** | **str** | The email address that was verified. | 
**is_reachable** | [**Reachable**](Reachable.md) |  | 
**misc** | [**CheckEmailOutputMisc**](CheckEmailOutputMisc.md) |  | 
**mx** | [**CheckEmailOutputMx**](CheckEmailOutputMx.md) |  | 
**smtp** | [**CheckEmailOutputSmtp**](CheckEmailOutputSmtp.md) |  | 
**syntax** | [**SyntaxDetails**](SyntaxDetails.md) |  | 
**debug** | [**DebugDetails**](DebugDetails.md) |  | [optional] 

## Example

```python
from playbookmedia_email-verification_sdk.models.check_email_output import CheckEmailOutput

# TODO update the JSON string below
json = "{}"
# create an instance of CheckEmailOutput from a JSON string
check_email_output_instance = CheckEmailOutput.from_json(json)
# print the JSON string representation of the object
print(CheckEmailOutput.to_json())

# convert the object into a dict
check_email_output_dict = check_email_output_instance.to_dict()
# create an instance of CheckEmailOutput from a dict
check_email_output_from_dict = CheckEmailOutput.from_dict(check_email_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


