"""Media Models."""
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

    def __repr__(self):
        """String representation of class."""
        return '<Media ID %s %s - %s>' % \
            (self.id, self.alt, self.full)
