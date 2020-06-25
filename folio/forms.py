"""Base App forms."""
from wtforms.form import Form
from wtforms.fields import StringField
from wtforms.validators import InputRequired, Email


class EmailForm(Form):
    """
    Email Form.

        Fields:
            name - name of contact
            email - email address of contact
            meessage - message from contact
    """

    name = StringField(u'name', [InputRequired()])
    email = StringField(u'email',
                        [InputRequired(),
                         Email('Valid Email Required')])
    message = StringField(u'message', [InputRequired()])
