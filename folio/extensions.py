"""Flask Extensions."""
from flask_sqlalchemy import SQLAlchemy
from flask_wtf.csrf import CSRFProtect
from flask_login import LoginManager
from flask_json import FlaskJSON

db = SQLAlchemy()
csrf = CSRFProtect()
login = LoginManager()
json = FlaskJSON()
