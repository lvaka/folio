from flask import Flask, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_wtf.csrf import CSRFProtect
from flask_login import LoginManager
from flask_json import FlaskJSON
import os

db = SQLAlchemy()
csrf = CSRFProtect()
login = LoginManager()
json = FlaskJSON()

app = Flask(__name__, instance_relative_config=True)
app.config.from_object('config')
csrf.init_app(app)
db.init_app(app)
login.init_app(app)
json.init_app(app)
PUBLIC_PATH = app.config.get('PUBLIC_PATH')

if app.config.get('DEBUG'):
   @app.route('/<path:filename>')
   def public(filename):
      return send_from_directory(PUBLIC_PATH, filename)

from folio.controllers import main
from admin.controllers import admin
from media.controllers import mediaController

app.register_blueprint(admin, url_prefix="/admin/")
app.register_blueprint(mediaController, url_prefix="/media-manager/")
app.register_blueprint(main, url_prefix="/")