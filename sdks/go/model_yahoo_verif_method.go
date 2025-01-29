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

// YahooVerifMethod Enumeration describing the method used to verify Yahoo emails.
type YahooVerifMethod string

// List of YahooVerifMethod
const (
	API YahooVerifMethod = "Api"
	HEADLESS YahooVerifMethod = "Headless"
	SMTP YahooVerifMethod = "Smtp"
)

// All allowed values of YahooVerifMethod enum
var AllowedYahooVerifMethodEnumValues = []YahooVerifMethod{
	"Api",
	"Headless",
	"Smtp",
}

func (v *YahooVerifMethod) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := YahooVerifMethod(value)
	for _, existing := range AllowedYahooVerifMethodEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid YahooVerifMethod", value)
}

// NewYahooVerifMethodFromValue returns a pointer to a valid YahooVerifMethod
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewYahooVerifMethodFromValue(v string) (*YahooVerifMethod, error) {
	ev := YahooVerifMethod(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for YahooVerifMethod: valid values are %v", v, AllowedYahooVerifMethodEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v YahooVerifMethod) IsValid() bool {
	for _, existing := range AllowedYahooVerifMethodEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to YahooVerifMethod value
func (v YahooVerifMethod) Ptr() *YahooVerifMethod {
	return &v
}

type NullableYahooVerifMethod struct {
	value *YahooVerifMethod
	isSet bool
}

func (v NullableYahooVerifMethod) Get() *YahooVerifMethod {
	return v.value
}

func (v *NullableYahooVerifMethod) Set(val *YahooVerifMethod) {
	v.value = val
	v.isSet = true
}

func (v NullableYahooVerifMethod) IsSet() bool {
	return v.isSet
}

func (v *NullableYahooVerifMethod) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableYahooVerifMethod(val *YahooVerifMethod) *NullableYahooVerifMethod {
	return &NullableYahooVerifMethod{value: val, isSet: true}
}

func (v NullableYahooVerifMethod) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableYahooVerifMethod) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

