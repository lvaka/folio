from flask import Flask
from folio import controllers

app = Flask(__name__, instance_relative_config=True)
app.config.from_pyfile('config.py')
app.register_blueprint(controllers.main, url_prefix='/')