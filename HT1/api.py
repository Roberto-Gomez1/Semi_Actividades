from flask_cors import CORS
from flask import Flask, request, jsonify

app = Flask(__name__)

# Habilita CORS para todas las rutas
CORS(app)

@app.route('/check', methods=['GET'])
def check():
    response = jsonify({"message": "OK"})
    response.status_code = 200
    return response

@app.route('/' , methods=['GET'])
def home():
    return jsonify({"Instancia": 'Instancia #2 - API #2', "Curso": "Seminario de Sistemas 1", "Estudiante": "Roberto Carlos Gómez Donis - <202000544>"})

if __name__ == '__main__':
    app.run(port=3000, host='0.0.0.0')