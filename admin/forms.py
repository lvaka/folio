"""Admin forms."""
from flask_wtf import FlaskForm
from wtforms.fields import StringField, PasswordField
from wtforms.validators import InputRequired


class LoginForm(FlaskForm):
    """Login form."""

    name = StringField('username', [InputRequired()])
    password = PasswordField('password', [InputRequired()])
