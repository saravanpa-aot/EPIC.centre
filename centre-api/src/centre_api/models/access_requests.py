"""Access Requests model class.

Manages the access requests
"""
from __future__ import annotations

from .base_model import BaseModel
from .db import db


class AccessRequests(BaseModel):
    """Definition of the User entity."""

    __tablename__ = 'access_requests'

    id = db.Column(db.Integer, primary_key=True)
    app_id = db.Column(db.Integer, db.ForeignKey('applications.id'), nullable=False)
    user_auth_guid = db.Column(db.String(), nullable=False)

    @classmethod
    def get_all_requests_by_user(cls, user_auth_guid):
        """Get all access requests by user."""
        return cls.query.filter_by(user_auth_guid=user_auth_guid).all()
