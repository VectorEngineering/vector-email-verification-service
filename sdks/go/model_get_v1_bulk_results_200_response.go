/*
Reacher

### What is Reacher?  Reacher is a robust, open-source email verification API service available as both a SaaS and self-hosted solution.

API version: 0.10.0
Contact: amaury@reacher.email
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
	"bytes"
	"fmt"
)

// checks if the GetV1BulkResults200Response type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GetV1BulkResults200Response{}

// GetV1BulkResults200Response struct for GetV1BulkResults200Response
type GetV1BulkResults200Response struct {
	Results CheckEmailOutput `json:"results"`
}

type _GetV1BulkResults200Response GetV1BulkResults200Response

// NewGetV1BulkResults200Response instantiates a new GetV1BulkResults200Response object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGetV1BulkResults200Response(results CheckEmailOutput) *GetV1BulkResults200Response {
	this := GetV1BulkResults200Response{}
	this.Results = results
	return &this
}

// NewGetV1BulkResults200ResponseWithDefaults instantiates a new GetV1BulkResults200Response object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGetV1BulkResults200ResponseWithDefaults() *GetV1BulkResults200Response {
	this := GetV1BulkResults200Response{}
	return &this
}

// GetResults returns the Results field value
func (o *GetV1BulkResults200Response) GetResults() CheckEmailOutput {
	if o == nil {
		var ret CheckEmailOutput
		return ret
	}

	return o.Results
}

// GetResultsOk returns a tuple with the Results field value
// and a boolean to check if the value has been set.
func (o *GetV1BulkResults200Response) GetResultsOk() (*CheckEmailOutput, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Results, true
}

// SetResults sets field value
func (o *GetV1BulkResults200Response) SetResults(v CheckEmailOutput) {
	o.Results = v
}

func (o GetV1BulkResults200Response) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GetV1BulkResults200Response) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["results"] = o.Results
	return toSerialize, nil
}

func (o *GetV1BulkResults200Response) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"results",
	}

	allProperties := make(map[string]interface{})

	err = json.Unmarshal(data, &allProperties)

	if err != nil {
		return err;
	}

	for _, requiredProperty := range(requiredProperties) {
		if _, exists := allProperties[requiredProperty]; !exists {
			return fmt.Errorf("no value given for required property %v", requiredProperty)
		}
	}

	varGetV1BulkResults200Response := _GetV1BulkResults200Response{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varGetV1BulkResults200Response)

	if err != nil {
		return err
	}

	*o = GetV1BulkResults200Response(varGetV1BulkResults200Response)

	return err
}

type NullableGetV1BulkResults200Response struct {
	value *GetV1BulkResults200Response
	isSet bool
}

func (v NullableGetV1BulkResults200Response) Get() *GetV1BulkResults200Response {
	return v.value
}

func (v *NullableGetV1BulkResults200Response) Set(val *GetV1BulkResults200Response) {
	v.value = val
	v.isSet = true
}

func (v NullableGetV1BulkResults200Response) IsSet() bool {
	return v.isSet
}

func (v *NullableGetV1BulkResults200Response) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGetV1BulkResults200Response(val *GetV1BulkResults200Response) *NullableGetV1BulkResults200Response {
	return &NullableGetV1BulkResults200Response{value: val, isSet: true}
}

func (v NullableGetV1BulkResults200Response) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGetV1BulkResults200Response) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


