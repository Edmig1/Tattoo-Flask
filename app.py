from flask import Flask, render_template, request, redirect

app = Flask(__name__)


@app.route('/')
def index():  # put application's code here
    return render_template('index.html')

@app.route('/artistas')
def artistas():
    return render_template('artistas.html')

@app.route('/dicas')
def dicas():
    return render_template('dicas.html')

if __name__ == '__main__':
    app.run()
