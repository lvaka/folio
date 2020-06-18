"""Media Forms for validation."""
from flask_wtf import FlaskForm
from wtforms.fields import StringField, FileField
from wtforms.validators import InputRequired


class MediaForm(FlaskForm):
    """
    Media Form.

        Fields:
            file - binary of media file
            alt - alt field for seo
    """

    alt = StringField('alt')
    file = FileField('file', [InputRequired()])
