"""Flask App."""
from flask import Flask, send_from_directory
from folio.extensions import csrf, db, json, login
from folio.controllers import main
from admin.controllers import admin
from media.controllers import mediaController
from sites.controllers import sitesController


def register_extensions():
    """Register Flask Extensions."""
    csrf.init_app(app)
    db.init_app(app)
    login.init_app(app)
    json.init_app(app)


app = Flask(__name__, instance_relative_config=True)
app.config.from_object('config')
register_extensions()
PUBLIC_PATH = app.config.get('PUBLIC_PATH')

if app.config.get('DEBUG'):
    @app.route('/<path:filename>')
    def public(filename):
        """Serve Public Files."""
        return send_from_directory(PUBLIC_PATH, filename)

app.register_blueprint(admin, url_prefix="/admin/")
app.register_blueprint(mediaController, url_prefix="/media-manager/")
app.register_blueprint(sitesController, url_prefix="/site-manager/")
app.register_blueprint(main, url_prefix="/")
