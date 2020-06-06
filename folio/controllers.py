from flask import Blueprint, request, Response, render_template, redirect
from folio.forms import EmailForm, LoginForm
from flask_login import current_user, login_user, logout_user
import folio
import os
from folio.decorators import login_required
from folio.models import User

admin = Blueprint('admin', __name__)
main = Blueprint('main', __name__)

@admin.route('/')
@login_required
def admin_page():
    """
        Basic Admin
    """
    return render_template('/admin/main.html')


@admin.route('login', methods=['GET', 'POST'])
def login():
    """
        Login Route.  Handles User Login
    """
    form = LoginForm()
    if request.method == 'POST' and form.validate():
        user = User.query.filter_by(name = form.name.data).first()
        if user is None or not user.check_password(form.password.data):
            flash('Invalid username or password')
            return redirect('/admin/login')
        
        login_user(user)
        return redirect('/admin')


    return render_template('admin/login.html', form=form)

@main.route('/contact-submit', methods=['POST'])
def contact_submit():
    """
        Post End Point for Email Messages
    """

    # mail = Mail(folio.app)
    form = EmailForm(request.form)
    if request.method == 'POST' and form.validate():
        name = form.name.data
        email = form.email.data
        message = form.message.data
        body = "%s \n\n \"%s\"<%s>" % (message, name, email)
        subject = "You Received a Message"
        sendmail = os.popen("%s -t" % '/usr/sbin/sendmail', 'w')
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

@main.route('/', defaults={'path': ''})
@main.route('/<path:path>')
def react(path):
    """
        Catch all route to feed to react and render base template
    """
    return render_template('index.html')
