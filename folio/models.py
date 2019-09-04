from app import db

class Project(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	slug = db.Column(db.String(64), index=True, unique=True)
	title = db.Column(db.String(256), unique=True)
	tech = db.Column(db.String(512))
	thumb_img = db.Column(db.String(1024))
	featured_img = db.Column(db.String(1024))
	project_url = db.Column(db.String(1024))
	content = db.Column(db.String())

	def __repr__(self):
		return f"Project - {self.title}"