"""Media Models."""
from flask import request

from folio.extensions import db

from sqlalchemy_serializer import SerializerMixin


class Media(db.Model, SerializerMixin):
    """Media Model."""

    id = db.Column(db.Integer,
                   primary_key=True,
                   nullable=False,
                   autoincrement=True)
    full = db.Column(db.String(200), nullable=False)
    full_jpeg = db.Column(db.String(200), nullable=False)
    large = db.Column(db.String(200), nullable=True)
    large_jpeg = db.Column(db.String(200), nullable=True)
    med = db.Column(db.String(200), nullable=True)
    med_jpeg = db.Column(db.String(200), nullable=True)
    thumb = db.Column(db.String(200), nullable=False)
    alt = db.Column(db.String(200), nullable=True)

    @property
    def serialize(self):
        """Serialize Data."""
        host_url = request.host_url
        full = host_url + self.full if self.full else None
        full_jpeg = host_url + self.full_jpeg \
            if self.full_jpeg else None
        large = host_url + self.large if self.large else None
        large_jpeg = host_url + self.large_jpeg \
            if self.large_jpeg else None
        med = host_url + self.med if self.med else None
        med_jpeg = host_url + self.med_jpeg \
            if self.med_jpeg else None
        thumb = host_url + self.thumb if self.thumb else None
        return {
            "id": self.id,
            "full": full,
            "full_jpeg": full_jpeg,
            "large": large,
            "large_jpeg": large_jpeg,
            "med": med,
            "med_jpeg": med_jpeg,
            "thumb": thumb,
            "alt": self.alt
        }

    def __repr__(self):
        """String representation of class."""
        return '<Media ID %s %s - %s>' % \
            (self.id, self.alt, self.full)
