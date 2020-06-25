"""Flask manager."""
import os
import secrets
from flask_script import Command, Option
from folio import app
from folio.extensions import db
from werkzeug.security import generate_password_hash
from flask_migrate import Migrate, MigrateCommand
from flask_script import Manager
from admin.models import User

manager = Manager(app)
db.init_app(app)
migrate = Migrate(app, db)


@manager.command
def run():
    """Run development server."""
    app.run()


@manager.command
def generate_secret():
    """Generate a secret token for use as SECRET_KEY."""
    secret = secrets.token_urlsafe(20)
    print(secret)


@manager.command
def collect_static():
    """Collect Static Files into public folder."""
    public_dir = os.path.join(os.getcwd(), 'public')

    if os.path.isdir(public_dir):
        print('directory exists')
    else:
        os.mkdir(public_dir)

    local_static = os.path.join(os.getcwd(), 'folio', 'static')
    os.system("rsync -ruv --chmod=ug+w %s %s" % (local_static, public_dir))


class AddUser(Command):
    """
    CLI class to add user to database.

        This class will create a new user into the db

        Usage:
            python3 manage.py -u user -p password
    """

    option_list = (
        Option('--user', '-u', dest='user'),
        Option('--password', '-p', dest='password')
    )

    def run(self, user, password):
        """Create user."""
        password = generate_password_hash(password)

        user = User(name=user, password=password)
        db.session.add(user)
        db.session.commit()

        print("User: %s\nPassword: %s " % (user, password))

manager.add_command('add_user', AddUser())
manager.add_command('db', MigrateCommand)

if __name__ == '__main__':
    manager.run()
