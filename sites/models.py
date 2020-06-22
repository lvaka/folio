"""Sites manager controller."""
from folio.extensions import db
from sqlalchemy_serializer import SerializerMixin


class Site(db.Model, SerializerMixin):
    """Site Model."""

    id = db.Column(db.Integer,
                   primary_key=True,
                   nullable=False,
                   autoincrement=True)
    title = db.Column(db.String(200), nullable=False)
    featured_id = db.Column(db.Integer,
                            db.ForeignKey("media.id"),
                            nullable=True)
    featured = db.relationship('Media',
                               backref=db.backref('sites',
                                                  lazy=False))
    url = db.Column(db.String(200), nullable=True)
    content = db.Column(db.Text, nullable=False)

    @property
    def serialize(self):
        """Serialize Model."""
        return {
            "id": self.id,
            "title": self.title,
            "featured_id": self.featured_id,
            "url": self.url,
            "content": self.content
        }

    def __repr__(self):
        """String Reprentation of Class."""
        return self.title + ' - ' + self.url
