from folio import db
from sqlalchemy_serializer import SerializerMixin

class Site(db.Model, SerializerMixin):
   id = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
   title = db.Column(db.String(200), nullable=False)
   featured_id = db.Column(db.Integer, db.ForeignKey("media.id"), nullable=True)
   featured = db.relationship('Media',
        backref=db.backref('sites', lazy=True))
   url = db.Column(db.String(200), nullable=True)
   content = db.Column(db.Text,nullable=False)

   def __repr__(self):
      return self.title + ' - ' + self.url
