"""Admin models."""
from folio.extensions import db, login
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(UserMixin, db.Model):
    """Model for User Table."""

    id = db.Column(db.Integer,
                   primary_key=True,
                   nullable=False,
                   autoincrement=True)
    name = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)

    def set_password(self, password):
        """Set Password of User."""
        self.password = generate_password_hash(password)

    def check_password(self, password):
        """Check password hash."""
        return check_password_hash(self.password, password)

    def __repr__(self):
        """String rep."""
        return self.name


@login.user_loader
def load_user(id):
    """Get User by Id."""
    return User.query.get(int(id))
