from wtforms.form import Form
from wtforms.fields import StringField
from wtforms.validators import InputRequired, Email

class EmailForm(Form):
    name = StringField(u'name', [InputRequired()])
    email = StringField(u'email',[InputRequired(), Email('Valid Email Required')])
    message = StringField(u'message', [InputRequired()])