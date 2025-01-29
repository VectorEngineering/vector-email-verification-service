# SyntaxDetails

Validation of the email address syntax.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **str** | The domain part of the email address. | 
**is_valid_syntax** | **bool** | Indicates if the email address syntax is valid. | 
**username** | **str** | The username part of the email address. | 

## Example

```python
from playbookmedia_email-verification_sdk.models.syntax_details import SyntaxDetails

# TODO update the JSON string below
json = "{}"
# create an instance of SyntaxDetails from a JSON string
syntax_details_instance = SyntaxDetails.from_json(json)
# print the JSON string representation of the object
print(SyntaxDetails.to_json())

# convert the object into a dict
syntax_details_dict = syntax_details_instance.to_dict()
# create an instance of SyntaxDetails from a dict
syntax_details_from_dict = SyntaxDetails.from_dict(syntax_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


