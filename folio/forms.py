from wtforms.form import Form
from flask_wtf import FlaskForm
from wtforms.fields import StringField, PasswordField
from wtforms.validators import InputRequired, Email
from folio import app

class EmailForm(Form):
    name = StringField(u'name', [InputRequired()])
    email = StringField(u'email',[InputRequired(), Email('Valid Email Required')])
    message = StringField(u'message', [InputRequired()])

class LoginForm(FlaskForm):
	name = StringField('username', [InputRequired()])
	password = PasswordField('password', [InputRequired()])
