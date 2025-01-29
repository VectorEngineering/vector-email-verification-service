# coding: utf-8

"""
    Reacher

    ### What is Reacher?  Reacher is a robust, open-source email verification API service available as both a SaaS and self-hosted solution.

    The version of the OpenAPI document: 0.10.0
    Contact: amaury@reacher.email
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict
from typing import Any, ClassVar, Dict, List, Optional
from playbookmedia_email-verification_sdk.models.webhook import Webhook
from typing import Optional, Set
from typing_extensions import Self

class TaskWebhook(BaseModel):
    """
    Optional webhook configuration for sending email verification results during bulk verification.
    """ # noqa: E501
    on_each_email: Optional[Webhook] = None
    __properties: ClassVar[List[str]] = ["on_each_email"]

    model_config = ConfigDict(
        populate_by_name=True,
        validate_assignment=True,
        protected_namespaces=(),
    )


    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Self]:
        """Create an instance of TaskWebhook from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        """
        excluded_fields: Set[str] = set([
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of on_each_email
        if self.on_each_email:
            _dict['on_each_email'] = self.on_each_email.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of TaskWebhook from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "on_each_email": Webhook.from_dict(obj["on_each_email"]) if obj.get("on_each_email") is not None else None
        })
        return _obj


