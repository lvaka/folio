"""Admin controller."""
from flask import Blueprint,\
    request,\
    flash,\
    render_template,\
    redirect
from admin.decorators import login_required
from admin.models import User
from admin.forms import LoginForm
from flask_login import login_user, logout_user

admin = Blueprint('admin', __name__)


@admin.route('/')
@login_required
def admin_page():
    """Basic Admin Template."""
    return render_template('/admin/main.html')


@admin.route('login', methods=['GET', 'POST'])
def login():
    """Handle User Login."""
    form = LoginForm()
    if request.method == 'POST' and form.validate():
        user = User.query.filter_by(name=form.name.data).first()
        if user is None or not user.check_password(form.password.data):
            flash('Invalid username or password')
            return redirect('/admin/login')

        login_user(user)
        return redirect('/admin')

    return render_template('admin/login.html', form=form)


@admin.route('logout', methods=['GET'])
def logout():
    """Handle User Logout."""
    logout_user()
    return redirect('/')
