from app import app
from flask import render_template

# Ruta para la página principal
@app.route('/')
def index():
    return render_template('index.html')

# Puedes tener otras funciones de vista aquí si es necesario
