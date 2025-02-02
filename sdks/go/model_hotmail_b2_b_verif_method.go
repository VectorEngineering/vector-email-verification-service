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
	"fmt"
)

// HotmailB2BVerifMethod Enumeration describing the method used to verify Hotmail B2B emails.
type HotmailB2BVerifMethod string

// List of HotmailB2BVerifMethod
const (
	SMTP HotmailB2BVerifMethod = "Smtp"
)

// All allowed values of HotmailB2BVerifMethod enum
var AllowedHotmailB2BVerifMethodEnumValues = []HotmailB2BVerifMethod{
	"Smtp",
}

func (v *HotmailB2BVerifMethod) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := HotmailB2BVerifMethod(value)
	for _, existing := range AllowedHotmailB2BVerifMethodEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid HotmailB2BVerifMethod", value)
}

// NewHotmailB2BVerifMethodFromValue returns a pointer to a valid HotmailB2BVerifMethod
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewHotmailB2BVerifMethodFromValue(v string) (*HotmailB2BVerifMethod, error) {
	ev := HotmailB2BVerifMethod(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for HotmailB2BVerifMethod: valid values are %v", v, AllowedHotmailB2BVerifMethodEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v HotmailB2BVerifMethod) IsValid() bool {
	for _, existing := range AllowedHotmailB2BVerifMethodEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to HotmailB2BVerifMethod value
func (v HotmailB2BVerifMethod) Ptr() *HotmailB2BVerifMethod {
	return &v
}

type NullableHotmailB2BVerifMethod struct {
	value *HotmailB2BVerifMethod
	isSet bool
}

func (v NullableHotmailB2BVerifMethod) Get() *HotmailB2BVerifMethod {
	return v.value
}

func (v *NullableHotmailB2BVerifMethod) Set(val *HotmailB2BVerifMethod) {
	v.value = val
	v.isSet = true
}

func (v NullableHotmailB2BVerifMethod) IsSet() bool {
	return v.isSet
}

func (v *NullableHotmailB2BVerifMethod) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHotmailB2BVerifMethod(val *HotmailB2BVerifMethod) *NullableHotmailB2BVerifMethod {
	return &NullableHotmailB2BVerifMethod{value: val, isSet: true}
}

func (v NullableHotmailB2BVerifMethod) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHotmailB2BVerifMethod) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

