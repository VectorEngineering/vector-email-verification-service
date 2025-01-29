# GetV1Bulk200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_id** | **int** |  | 
**created_at** | **datetime** | The date and time when the bulk verification job was created. | 
**finished_at** | **datetime** | If the bulk verification job is completed, the date and time when it was finished. | [optional] 
**total_records** | **int** | The number of emails to verify in the bulk verification job. | 
**total_processed** | **int** | The number of emails that have been verified at the time of the query. | 
**summary** | [**GetV1Bulk200ResponseSummary**](GetV1Bulk200ResponseSummary.md) |  | 
**job_status** | **str** | The status of the job, either \&quot;Running\&quot; or \&quot;Completed\&quot;. | 

## Example

```python
from playbookmedia_email-verification_sdk.models.get_v1_bulk200_response import GetV1Bulk200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetV1Bulk200Response from a JSON string
get_v1_bulk200_response_instance = GetV1Bulk200Response.from_json(json)
# print the JSON string representation of the object
print(GetV1Bulk200Response.to_json())

# convert the object into a dict
get_v1_bulk200_response_dict = get_v1_bulk200_response_instance.to_dict()
# create an instance of GetV1Bulk200Response from a dict
get_v1_bulk200_response_from_dict = GetV1Bulk200Response.from_dict(get_v1_bulk200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


