from folio import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from folio import login
from sqlalchemy_serializer import SerializerMixin

class User(UserMixin, db.Model):
   id = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
   name = db.Column(db.String(50), unique=True, nullable=False)
   password = db.Column(db.String(200), nullable=False)

   def set_password(self, password):
      self.password = generate_password_hash(password)

   def check_password(self, password):
      return check_password_hash(self.password, password)

   def __repr__(self):
      return self.name

class Media(db.Model, SerializerMixin):
   id = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
   full = db.Column(db.String(200), nullable=False)
   large = db.Column(db.String(200), nullable=False)
   med = db.Column(db.String(200), nullable=False)
   thumb = db.Column(db.String(200), nullable=False)

class Site(db.Model, SerializerMixin):
   id = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
   title = db.Column(db.String(200), nullable=False)
   featured_id = db.Column(db.Integer, db.ForeignKey("media.id"), nullable=True)
   url = db.Column(db.String(200), nullable=True)
   content = db.Column(db.Text,nullable=False)

   def __repr__(self):
      return self.title + ' - ' + self.url

@login.user_loader
def load_user(id):
    return User.query.get(int(id))