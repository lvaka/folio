from flask import Flask, render_template, request
from flask_mail import Mail, Message
from forms.EmailForm import EmailForm
from flask import Response

app = Flask(__name__, instance_relative_config=True)
app.config.from_pyfile('config.py')
mail = Mail(app)

@app.route('/contact-submit', methods=['POST'])
def contact_submit():
    print(request.form)
    form = EmailForm(request.form)
    if request.method == 'POST' and form.validate():
        name = form.name.data
        email = form.email.data
        message = form.message.data
        msg = Message()
        msg.recipients = ['eric@therocketfarm.com']
        msg.sender = (name, email)
        msg.body = message
        mail.send(msg)

        return Response(status=200)

    elif request.method == 'POST' and not form.validate():
        return Response(status=400)

    return Response(status=405)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react(path):
    return render_template('index.html')

if __name__ == '__main__':
    app.run()
