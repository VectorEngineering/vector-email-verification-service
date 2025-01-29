# GetV1Bulk200ResponseSummary

A summary of the processed emails.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_safe** | **int** | The number of emails where &#x60;is_reachable&#x60; is \&quot;safe\&quot;. | 
**total_invalid** | **int** | The number of emails where &#x60;is_reachable&#x60; is \&quot;invalid\&quot;. | 
**total_risky** | **int** | The number of emails where &#x60;is_reachable&#x60; is \&quot;risky\&quot;. | 
**total_unknown** | **int** | The number of emails where &#x60;is_reachable&#x60; is \&quot;unknown\&quot;. | 

## Example

```python
from playbookmedia_email-verification_sdk.models.get_v1_bulk200_response_summary import GetV1Bulk200ResponseSummary

# TODO update the JSON string below
json = "{}"
# create an instance of GetV1Bulk200ResponseSummary from a JSON string
get_v1_bulk200_response_summary_instance = GetV1Bulk200ResponseSummary.from_json(json)
# print the JSON string representation of the object
print(GetV1Bulk200ResponseSummary.to_json())

# convert the object into a dict
get_v1_bulk200_response_summary_dict = get_v1_bulk200_response_summary_instance.to_dict()
# create an instance of GetV1Bulk200ResponseSummary from a dict
get_v1_bulk200_response_summary_from_dict = GetV1Bulk200ResponseSummary.from_dict(get_v1_bulk200_response_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


