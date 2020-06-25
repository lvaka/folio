"""Site Forms for validation."""
from flask_wtf import FlaskForm
from wtforms.fields import StringField,\
    FileField,\
    TextAreaField
from wtforms.validators import InputRequired


class SiteForm(FlaskForm):
    """
    Site Form.

        Fields:
            file - binary of media file
            alt - alt field for seo
            title - title of site
            url - url for site
            content - content
    """

    featured = FileField('featured')
    alt = StringField('alt')
    title = StringField('title',
                        validators=[InputRequired()])
    url = StringField('title')
    content = TextAreaField('content',
                            validators=[InputRequired()])
