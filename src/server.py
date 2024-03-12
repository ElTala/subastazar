from flask import Flask, request, jsonify
import json
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
@app.route('/guardarObjeto', methods=['POST'])
def guardar_objeto():
    try:
        data = request.get_json()
        json_file = 'datos.json'
        with open(json_file, 'a') as file:
            json.dump(data, file)
            file.write('\n')
        return jsonify({'message': 'Datos guardados correctamente'}), 200
    except Exception as e:
        return jsonify({'message': 'Error al procesar la solicitud', 'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3000, debug=True)
