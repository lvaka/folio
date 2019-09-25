from flask import Blueprint, request, Response, render_template
#from flask_mail import Mail, Message
from flask.ext.sendmail import Mail
from folio.forms.EmailForm import EmailForm
import folio

main = Blueprint('main', __name__)

@main.route('/contact-submit', methods=['POST'])
def contact_submit():
    """
        Post End Point for Email Messages
    """

    mail = Mail(folio.app)
    form = EmailForm(request.form)
    if request.method == 'POST' and form.validate():
        name = form.name.data
        email = form.email.data
        message = form.message.data
        body = message + "\n\n \"" + name + "\" <" + email +">"
        subject = "You Received a Message"
        msg = Message(body,
                    sender='noreply@ericjshin',
                    recipients=['eric@ericjshin.com'])
        msg.subject = subject;
        mail.send(msg)

        return Response(status=200)

    elif request.method == 'POST' and not form.validate():
        return Response(status=400)

    return Response(status=405)

@main.route('/', defaults={'path': ''})
@main.route('/<path:path>')
def react(path):
    """
        Catch all route to feed to react and render base template
    """
    return render_template('index.html')
