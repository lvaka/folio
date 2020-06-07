from flask_wtf import FlaskForm
from wtforms.fields import StringField, PasswordField
from wtforms.validators import InputRequired

class LoginForm(FlaskForm):
   name = StringField('username', [InputRequired()])
   password = PasswordField('password', [InputRequired()])
