"""Sites manager controller."""
from slugify import slugify
from sqlalchemy import event
from folio.extensions import db
from sqlalchemy_serializer import SerializerMixin


class Site(db.Model, SerializerMixin):
    """Site Model."""

    id = db.Column(db.Integer,
                   primary_key=True,
                   nullable=False,
                   autoincrement=True)
    title = db.Column(db.String(200), nullable=False, unique=True)
    slug = db.Column(db.String(150), default='')
    featured_id = db.Column(db.Integer,
                            db.ForeignKey("media.id"),
                            nullable=True)
    featured = db.relationship('Media',
                               backref=db.backref('sites',
                                                  lazy=False))
    url = db.Column(db.String(200), nullable=True)
    content = db.Column(db.Text, nullable=False)

    @staticmethod
    def generate_slug(target, value, oldvalue, initiator):
        """Generate slug from title."""
        if value and (not target.slug or value != oldvalue):
            target.slug = slugify(value)

    @property
    def serialize(self):
        """Serialize Model."""
        return {
            "id": self.id,
            "title": self.title,
            "slug": self.slug,
            "featured_id": self.featured_id,
            "url": self.url,
            "content": self.content
        }

    def __repr__(self):
        """String Reprentation of Class."""
        return self.title + ' - ' + self.url

event.listen(Site.title, 'set', Site.generate_slug, retval=False)
