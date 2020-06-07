from flask_wtf import FlaskForm
from wtforms.fields import StringField, FileField
from wtforms.validators import InputRequired

class MediaForm(FlaskForm):
   alt = StringField('alt')
   file = FileField('file', [InputRequired()])
