"""Folio Controller."""
import os

from flask import Blueprint,\
    Response,\
    render_template,\
    request
import folio
from folio.forms import EmailForm

main = Blueprint('main', __name__)


@main.route('/contact-submit', methods=['POST'])
def contact_submit():
    """Post End Point for Email Messages."""
    sendmail_location = folio.app.config.get('SENDMAIL_LOCATION')
    form = EmailForm(request.form)
    if request.method == 'POST' and form.validate():
        name = form.name.data
        email = form.email.data
        message = form.message.data
        body = "%s \n\n \"%s\"<%s>" % (message, name, email)
        subject = "You Received a Message"
        sendmail = os.popen("%s -t" % sendmail_location, 'w')
        sendmail.write("From: %s\n" % 'noreply@ericjshin.com')
        sendmail.write("To: %s\n" % 'eric@ericjshin.com')
        sendmail.write("Subject: %s\n" % subject)
        sendmail.write("\n")
        sendmail.write(body)
        sendmail.close()

        return Response(status=200)

    elif request.method == 'POST' and not form.validate():
        return Response(status=400)

    return Response(status=405)


@main.route('/site/<path:path>')
def site_react(path):
    """Catch all route to feed to react and render base template."""
    return render_template('index.html')


@main.route('/', defaults={'path': ''})
@main.route('/<path:path>')
def base(path):
    """Catch all route to feed to react and render base template."""
    return render_template('index.html')
