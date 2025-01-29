# playbookmedia_email-verification_sdk.DefaultApi

All URIs are relative to *https://api.reacher.email*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_v1_bulk**](DefaultApi.md#get_v1_bulk) | **GET** /v1/bulk/{job_id} | /v1/bulk/{job_id}
[**get_v1_bulk_results**](DefaultApi.md#get_v1_bulk_results) | **GET** /v1/bulk/{job_id}/results | Retrieve bulk verification results
[**post_v0_check_email**](DefaultApi.md#post_v0_check_email) | **POST** /v0/check_email | /v0/check_email
[**post_v1_bulk**](DefaultApi.md#post_v1_bulk) | **POST** /v1/bulk | /v1/bulk
[**post_v1_check_email**](DefaultApi.md#post_v1_check_email) | **POST** /v1/check_email | /v1/check_email


# **get_v1_bulk**
> GetV1Bulk200Response get_v1_bulk(job_id)

/v1/bulk/{job_id}

Retrieve the progress of a bulk verification job.

### Example

* Api Key Authentication (Authorization):

```python
import playbookmedia_email-verification_sdk
from playbookmedia_email-verification_sdk.models.get_v1_bulk200_response import GetV1Bulk200Response
from playbookmedia_email-verification_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.reacher.email
# See configuration.py for a list of all supported configuration parameters.
configuration = playbookmedia_email-verification_sdk.Configuration(
    host = "https://api.reacher.email"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with playbookmedia_email-verification_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = playbookmedia_email-verification_sdk.DefaultApi(api_client)
    job_id = 56 # int | The unique bulk verification job ID

    try:
        # /v1/bulk/{job_id}
        api_response = api_instance.get_v1_bulk(job_id)
        print("The response of DefaultApi->get_v1_bulk:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_v1_bulk: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_id** | **int**| The unique bulk verification job ID | 

### Return type

[**GetV1Bulk200Response**](GetV1Bulk200Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_v1_bulk_results**
> GetV1BulkResults200Response get_v1_bulk_results(job_id, limit=limit, offset=offset)

Retrieve bulk verification results

Retrieve the results of a bulk verification job. This endpoint will return an error if the job is still running. Please query `GET /v1/bulk/{job_id}` first to check the job's progress.

### Example

* Api Key Authentication (Authorization):

```python
import playbookmedia_email-verification_sdk
from playbookmedia_email-verification_sdk.models.get_v1_bulk_results200_response import GetV1BulkResults200Response
from playbookmedia_email-verification_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.reacher.email
# See configuration.py for a list of all supported configuration parameters.
configuration = playbookmedia_email-verification_sdk.Configuration(
    host = "https://api.reacher.email"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with playbookmedia_email-verification_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = playbookmedia_email-verification_sdk.DefaultApi(api_client)
    job_id = 'job_id_example' # str | The unique bulk verification job ID
    limit = 50 # int | The number of results to return. (optional) (default to 50)
    offset = 56 # int | The offset from which to return the results, equivalent to the number of elements in the array to skip. (optional)

    try:
        # Retrieve bulk verification results
        api_response = api_instance.get_v1_bulk_results(job_id, limit=limit, offset=offset)
        print("The response of DefaultApi->get_v1_bulk_results:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_v1_bulk_results: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_id** | **str**| The unique bulk verification job ID | 
 **limit** | **int**| The number of results to return. | [optional] [default to 50]
 **offset** | **int**| The offset from which to return the results, equivalent to the number of elements in the array to skip. | [optional] 

### Return type

[**GetV1BulkResults200Response**](GetV1BulkResults200Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_v0_check_email**
> CheckEmailOutput post_v0_check_email(authorization, check_email_request=check_email_request)

/v0/check_email

**Sunset notice: please use `/v1/check_email` instead.** Both endpoints accept the same input arguments and return the same output; only their internal implementation differs. Perform a comprehensive verification of an email address. Unlike the `/v1/check_email` endpoint, this endpoint performs an email verification immediately, without considering the Reacher server's throttling, concurrency, and other configurations. As such, this endpoint is slightly riskier than `/v1/check_email`, as the Reacher server's IP reputation can be impacted if this endpoint is called too frequently.

### Example

* Api Key Authentication (Authorization):

```python
import playbookmedia_email-verification_sdk
from playbookmedia_email-verification_sdk.models.check_email_output import CheckEmailOutput
from playbookmedia_email-verification_sdk.models.check_email_request import CheckEmailRequest
from playbookmedia_email-verification_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.reacher.email
# See configuration.py for a list of all supported configuration parameters.
configuration = playbookmedia_email-verification_sdk.Configuration(
    host = "https://api.reacher.email"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with playbookmedia_email-verification_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = playbookmedia_email-verification_sdk.DefaultApi(api_client)
    authorization = 'authorization_example' # str | Your personal Reacher API key
    check_email_request = playbookmedia_email-verification_sdk.CheckEmailRequest() # CheckEmailRequest | Request object containing all parameters necessary for an email verification. (optional)

    try:
        # /v0/check_email
        api_response = api_instance.post_v0_check_email(authorization, check_email_request=check_email_request)
        print("The response of DefaultApi->post_v0_check_email:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->post_v0_check_email: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Your personal Reacher API key | 
 **check_email_request** | [**CheckEmailRequest**](CheckEmailRequest.md)| Request object containing all parameters necessary for an email verification. | [optional] 

### Return type

[**CheckEmailOutput**](CheckEmailOutput.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_v1_bulk**
> PostV1Bulk200Response post_v1_bulk(post_v1_bulk_request=post_v1_bulk_request)

/v1/bulk

Initiate a bulk email verification.

### Example

* Api Key Authentication (Authorization):

```python
import playbookmedia_email-verification_sdk
from playbookmedia_email-verification_sdk.models.post_v1_bulk200_response import PostV1Bulk200Response
from playbookmedia_email-verification_sdk.models.post_v1_bulk_request import PostV1BulkRequest
from playbookmedia_email-verification_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.reacher.email
# See configuration.py for a list of all supported configuration parameters.
configuration = playbookmedia_email-verification_sdk.Configuration(
    host = "https://api.reacher.email"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with playbookmedia_email-verification_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = playbookmedia_email-verification_sdk.DefaultApi(api_client)
    post_v1_bulk_request = playbookmedia_email-verification_sdk.PostV1BulkRequest() # PostV1BulkRequest |  (optional)

    try:
        # /v1/bulk
        api_response = api_instance.post_v1_bulk(post_v1_bulk_request=post_v1_bulk_request)
        print("The response of DefaultApi->post_v1_bulk:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->post_v1_bulk: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **post_v1_bulk_request** | [**PostV1BulkRequest**](PostV1BulkRequest.md)|  | [optional] 

### Return type

[**PostV1Bulk200Response**](PostV1Bulk200Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_v1_check_email**
> CheckEmailOutput post_v1_check_email(check_email_request=check_email_request)

/v1/check_email

Perform a comprehensive verification of an email address. This endpoint supersedes the previous `/v0/check_email` endpoint, maintaining the same input and output format. Unlike the `/v0/check_email` endpoint, the new `/v1/check_email` endpoint queues the email for verification, and the Reacher server processes the queue based on its configuration settings such as throttle and concurrency.

### Example

* Api Key Authentication (Authorization):

```python
import playbookmedia_email-verification_sdk
from playbookmedia_email-verification_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.reacher.email
# See configuration.py for a list of all supported configuration parameters.
configuration = playbookmedia_email-verification_sdk.Configuration(
    host = "https://api.reacher.email"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with playbookmedia_email-verification_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = playbookmedia_email-verification_sdk.DefaultApi(api_client)
    check_email_request = {'key': playbookmedia_email-verification_sdk.CheckEmailRequest()} # CheckEmailRequest | Request object containing all parameters necessary for an email verification. (optional)

    try:
        # /v1/check_email
        api_response = api_instance.post_v1_check_email(check_email_request=check_email_request)
        print("The response of DefaultApi->post_v1_check_email:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->post_v1_check_email: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **check_email_request** | [**CheckEmailRequest**](CheckEmailRequest.md)| Request object containing all parameters necessary for an email verification. | [optional] 

### Return type

[**CheckEmailOutput**](CheckEmailOutput.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

