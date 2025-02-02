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

// checks if the CheckEmailInputProxy type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CheckEmailInputProxy{}

// CheckEmailInputProxy Proxy configuration for email verification.
type CheckEmailInputProxy struct {
	// The proxy host address.
	Host string `json:"host"`
	// The proxy port number.
	Port int32 `json:"port"`
	// Username for proxy authentication.
	Username *string `json:"username,omitempty"`
	// Password for proxy authentication.
	Password *string `json:"password,omitempty"`
}

type _CheckEmailInputProxy CheckEmailInputProxy

// NewCheckEmailInputProxy instantiates a new CheckEmailInputProxy object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCheckEmailInputProxy(host string, port int32) *CheckEmailInputProxy {
	this := CheckEmailInputProxy{}
	this.Host = host
	this.Port = port
	return &this
}

// NewCheckEmailInputProxyWithDefaults instantiates a new CheckEmailInputProxy object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCheckEmailInputProxyWithDefaults() *CheckEmailInputProxy {
	this := CheckEmailInputProxy{}
	return &this
}

// GetHost returns the Host field value
func (o *CheckEmailInputProxy) GetHost() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Host
}

// GetHostOk returns a tuple with the Host field value
// and a boolean to check if the value has been set.
func (o *CheckEmailInputProxy) GetHostOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Host, true
}

// SetHost sets field value
func (o *CheckEmailInputProxy) SetHost(v string) {
	o.Host = v
}

// GetPort returns the Port field value
func (o *CheckEmailInputProxy) GetPort() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Port
}

// GetPortOk returns a tuple with the Port field value
// and a boolean to check if the value has been set.
func (o *CheckEmailInputProxy) GetPortOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Port, true
}

// SetPort sets field value
func (o *CheckEmailInputProxy) SetPort(v int32) {
	o.Port = v
}

// GetUsername returns the Username field value if set, zero value otherwise.
func (o *CheckEmailInputProxy) GetUsername() string {
	if o == nil || IsNil(o.Username) {
		var ret string
		return ret
	}
	return *o.Username
}

// GetUsernameOk returns a tuple with the Username field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CheckEmailInputProxy) GetUsernameOk() (*string, bool) {
	if o == nil || IsNil(o.Username) {
		return nil, false
	}
	return o.Username, true
}

// HasUsername returns a boolean if a field has been set.
func (o *CheckEmailInputProxy) HasUsername() bool {
	if o != nil && !IsNil(o.Username) {
		return true
	}

	return false
}

// SetUsername gets a reference to the given string and assigns it to the Username field.
func (o *CheckEmailInputProxy) SetUsername(v string) {
	o.Username = &v
}

// GetPassword returns the Password field value if set, zero value otherwise.
func (o *CheckEmailInputProxy) GetPassword() string {
	if o == nil || IsNil(o.Password) {
		var ret string
		return ret
	}
	return *o.Password
}

// GetPasswordOk returns a tuple with the Password field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CheckEmailInputProxy) GetPasswordOk() (*string, bool) {
	if o == nil || IsNil(o.Password) {
		return nil, false
	}
	return o.Password, true
}

// HasPassword returns a boolean if a field has been set.
func (o *CheckEmailInputProxy) HasPassword() bool {
	if o != nil && !IsNil(o.Password) {
		return true
	}

	return false
}

// SetPassword gets a reference to the given string and assigns it to the Password field.
func (o *CheckEmailInputProxy) SetPassword(v string) {
	o.Password = &v
}

func (o CheckEmailInputProxy) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CheckEmailInputProxy) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["host"] = o.Host
	toSerialize["port"] = o.Port
	if !IsNil(o.Username) {
		toSerialize["username"] = o.Username
	}
	if !IsNil(o.Password) {
		toSerialize["password"] = o.Password
	}
	return toSerialize, nil
}

func (o *CheckEmailInputProxy) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"host",
		"port",
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

	varCheckEmailInputProxy := _CheckEmailInputProxy{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varCheckEmailInputProxy)

	if err != nil {
		return err
	}

	*o = CheckEmailInputProxy(varCheckEmailInputProxy)

	return err
}

type NullableCheckEmailInputProxy struct {
	value *CheckEmailInputProxy
	isSet bool
}

func (v NullableCheckEmailInputProxy) Get() *CheckEmailInputProxy {
	return v.value
}

func (v *NullableCheckEmailInputProxy) Set(val *CheckEmailInputProxy) {
	v.value = val
	v.isSet = true
}

func (v NullableCheckEmailInputProxy) IsSet() bool {
	return v.isSet
}

func (v *NullableCheckEmailInputProxy) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCheckEmailInputProxy(val *CheckEmailInputProxy) *NullableCheckEmailInputProxy {
	return &NullableCheckEmailInputProxy{value: val, isSet: true}
}

func (v NullableCheckEmailInputProxy) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCheckEmailInputProxy) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


