from flask_script import Manager, Command, Option
from flask import render_template
from folio import app
from folio import db
from werkzeug.security import generate_password_hash
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate, MigrateCommand
import os
import secrets

manager = Manager(app)
migrate = Migrate(app, db)

from admin.models import User
from media.models import Media
from sites.models import Site

@manager.command
def run():
   """
      Runs Development Server for 
      testing purposes
   """
   app.run()

@manager.command
def generate_secret():
   """
      Generates a secret token for use 
      as SECRET_KEY
   """
   secret = secrets.token_urlsafe(20)
   print(secret)

@manager.command
def collect_static():
   """
      Collects Static Files into public folder
   """

   public_dir = os.path.join(os.getcwd(), 'public')
   
   if os.path.isdir(public_dir):
      print('directory exists')
   else:
      os.mkdir(public_dir)

   local_static = os.path.join(os.getcwd(), 'folio', 'static')
   os.system("rsync -ruv --chmod=ug+w %s %s" % (local_static, public_dir))


class Add_User(Command):
   """
      CLI class to add user to database.
      python3 manage.py -u user -p password
   """
   
   option_list = (
      Option('--user', '-u', dest='user'),
      Option('--password', '-p', dest='password')
   )

   def run(self, user, password):
      password = generate_password_hash(password)

      user = User(name=user, password=password)
      db.session.add(user)
      db.session.commit()

      print("User: %s\nPassword: %s " % (user, password))

manager.add_command('add_user', Add_User())
manager.add_command('db', MigrateCommand)

if __name__ == '__main__':
   manager.run()