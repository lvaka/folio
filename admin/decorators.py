"""Admin Decorators."""
from functools import wraps
from flask_login import current_user
from flask import redirect


def login_required(f):
    """Login Required Decorator."""
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if current_user.is_authenticated:
            return f(*args, **kwargs)
        else:
            return redirect('/admin/login')

    return decorated_function
