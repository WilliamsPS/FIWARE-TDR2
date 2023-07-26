import os
from flask import Flask
from dotenv import load_dotenv

# Carga las variables de entorno desde el archivo .env
load_dotenv()

app = Flask(__name__)

# Configura la conexión a la base de datos utilizando las variables de entorno
app.config['SQLALCHEMY_DATABASE_URI'] = f"postgresql://{os.environ['POSTGRES_USER']}:{os.environ['POSTGRES_PASSWORD']}@postgres-db:5432/{os.environ['POSTGRES_DB']}"

# Importa los modelos y el objeto db después de configurar la conexión a la base de datos
from app import db
from app.models import User  # Importa tus modelos aquí si los tienes

# Resto de la configuración de tu aplicación y rutas...
# Por ejemplo, si tienes rutas definidas en tu archivo app/views.py, puedes importarlas aquí y registrarlas con la aplicación.

if __name__ == '__main__':
    app.run()
