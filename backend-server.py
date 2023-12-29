import logging
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mysqldb import MySQL
from flask import make_response

app = Flask(__name__)
CORS(app, origins='http://localhost:4200', allow_headers=["Content-Type", "Authorization"])

# MySQL Configuration
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'admin'
app.config['MYSQL_PASSWORD'] = 'superpass'
app.config['MYSQL_DB'] = 'project'

mysql = MySQL(app)

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:4200')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS')
    return response

@app.route('/api/data/cases', methods=['GET', 'POST', 'DELETE', 'OPTIONS'])
def handle_data_case():
    if request.method == 'GET':
        cur = mysql.connection.cursor()
        cur.execute('SELECT * FROM `case`')
        case_data = cur.fetchall()
        cur.close()
        return jsonify(case_data)

    elif request.method == 'POST':
        data = request.json
        case_id = data.get('case_id')
        location = data.get('location')
        time = data.get('time')
        description = data.get('description')
        is_open = data.get('is_open')

        cur = mysql.connection.cursor()
        query = "INSERT INTO `case` (case_id, location, time, description, is_open) VALUES (%s, %s, %s, %s, %s)"
        
        try:
            cur.execute(query, (case_id, location, time, description, is_open))
            mysql.connection.commit()
            cur.close()
            return jsonify({'message': 'Case added successfully'})

        except Exception as e:
            logging.error(f"Error executing query: {query}")
            logging.error(str(e))
            return jsonify({'error': f'Failed to add case. {str(e)}'}), 500

    elif request.method == 'DELETE':
        data = request.get_json()
        case_id = data.get('case_id')

        cur = mysql.connection.cursor()
        query = "DELETE FROM `case` WHERE case_id = %s"

        try:
            cur.execute(query, (case_id,))
            mysql.connection.commit()
            cur.close()
            return jsonify({'message': 'Case deleted successfully'})

        except Exception as e:
            logging.error(f"Error executing query: {query}")
            logging.error(str(e))
            return jsonify({'error': f'Failed to delete case. {str(e)}'}), 500
        
    elif request.method == 'OPTIONS':
        # Handle preflight request
        response = make_response()
        response.headers.add("Access-Control-Allow-Methods", "GET, POST, DELETE")
        return response
    
@app.route('/api/data/clues', methods=['GET', 'POST', 'DELETE', 'OPTIONS'])
def handle_data_clue():
    if request.method == 'GET':
        cur = mysql.connection.cursor()
        cur.execute('SELECT * FROM clue')
        clue_data = cur.fetchall()
        cur.close()
        return jsonify(clue_data)
    
    elif request.method == 'POST':
        data = request.json
        clue_id = data.get('clue_id')
        is_murder_weapon = data.get('is_murder_weapon')
        date = data.get('date')
        place = data.get('place')
        description = data.get('description')
        Case_case_id = data.get('Case_case_id')
        type = data.get('type')

        cur = mysql.connection.cursor()
        query = "INSERT INTO clue (clue_id, is_murder_weapon,  date, place, description, Case_case_id, type) VALUES (%s, %s, %s, %s, %s, %s, %s)"
        
        try:
            cur.execute(query, (clue_id, is_murder_weapon,  date, place, description, Case_case_id, type))
            mysql.connection.commit()
            cur.close()
            return jsonify({'message': 'Clue added successfully'})

        except Exception as e:
            logging.error(f"Error executing query: {query}")
            logging.error(str(e))
            return jsonify({'error': f'Failed to add clue. {str(e)}'}), 500

    elif request.method == 'DELETE':
        data = request.get_json()
        clue_id = data.get('clue_id')

        cur = mysql.connection.cursor()
        query = "DELETE FROM clue WHERE clue_id = %s"

        try:
            cur.execute(query, (clue_id,))
            mysql.connection.commit()
            cur.close()
            return jsonify({'message': 'Clue deleted successfully'})

        except Exception as e:
            logging.error(f"Error executing query: {query}")
            logging.error(str(e))
            return jsonify({'error': f'Failed to delete clue. {str(e)}'}), 500
        
    elif request.method == 'OPTIONS':
        # Handle preflight request
        response = make_response()
        response.headers.add("Access-Control-Allow-Methods", "GET, POST, DELETE")
        return response


@app.route('/api/data/suspects', methods=['GET', 'POST', 'DELETE', 'OPTIONS'])
def handle_data_suspect():
    if request.method == 'GET':
        cur = mysql.connection.cursor()
        cur.execute('SELECT * FROM suspect')
        suspect_data = cur.fetchall()
        cur.close()
        return jsonify(suspect_data)
    
    elif request.method == 'POST':
        data = request.json
        suspect_id = data.get('suspect_id')
        name = data.get('name')
        phone = data.get('phone')
        gender = data.get('gender')
        address_street = data.get('address_street')
        address_number = data.get('address_number')
        birth_date = data.get('birth_date')
        Lawyer_lawyer_id = data.get('Lawyer_lawyer_id')
        status = data.get('status')

        cur = mysql.connection.cursor()
        query = "INSERT INTO suspect (suspect_id, name, phone, gender ,address_street, address_number, birth_date ,Lawyer_lawyer_id ,status) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)"
        
        try:
            cur.execute(query, (suspect_id, name, phone, gender ,address_street, address_number, birth_date ,Lawyer_lawyer_id ,status))
            mysql.connection.commit()
            cur.close()
            return jsonify({'message': 'Suspect added successfully'})

        except Exception as e:
            logging.error(f"Error executing query: {query}")
            logging.error(str(e))
            return jsonify({'error': f'Failed to add Suspect. {str(e)}'}), 500

    elif request.method == 'DELETE':
        data = request.get_json()
        suspect_id = data.get('suspect_id')

        cur = mysql.connection.cursor()
        query = "DELETE FROM suspect WHERE suspect_id = %s"

        try:
            cur.execute(query, (suspect_id,))
            mysql.connection.commit()
            cur.close()
            return jsonify({'message': 'Suspect deleted successfully'})

        except Exception as e:
            logging.error(f"Error executing query: {query}")
            logging.error(str(e))
            return jsonify({'error': f'Failed to delete Suspect. {str(e)}'}), 500
        
    elif request.method == 'OPTIONS':
        # Handle preflight request
        response = make_response()
        response.headers.add("Access-Control-Allow-Methods", "GET, POST, DELETE")
        return response

@app.route('/api/data/witnesses', methods=['GET', 'POST', 'DELETE', 'OPTIONS'])
def handle_data_witness():
    if request.method == 'GET':
        cur = mysql.connection.cursor()
        cur.execute('SELECT * FROM witness')
        witness_data = cur.fetchall()
        cur.close()
        return jsonify(witness_data)
    
    elif request.method == 'POST':
        data = request.json
        witness_id = data.get('witness_id')
        name = data.get('name')
        birth_date = data.get('birth_date')
        gender = data.get('gender')
        phone = data.get('phone')

        cur = mysql.connection.cursor()
        query = "INSERT INTO policeman (witness_id, name, birth_date, gender, phone) VALUES (%s, %s, %s, %s, %s)"
        
        try:
            cur.execute(query, (witness_id, name, birth_date, gender, phone))
            mysql.connection.commit()
            cur.close()
            return jsonify({'message': 'Witness added successfully'})

        except Exception as e:
            logging.error(f"Error executing query: {query}")
            logging.error(str(e))
            return jsonify({'error': f'Failed to add Witness. {str(e)}'}), 500

    elif request.method == 'DELETE':
        data = request.get_json()
        witness_id = data.get('witness_id')

        cur = mysql.connection.cursor()
        query = "DELETE FROM witness WHERE witness_id = %s"

        try:
            cur.execute(query, (witness_id,))
            mysql.connection.commit()
            cur.close()
            return jsonify({'message': 'Witness deleted successfully'})

        except Exception as e:
            logging.error(f"Error executing query: {query}")
            logging.error(str(e))
            return jsonify({'error': f'Failed to delete Witness. {str(e)}'}), 500
        
    elif request.method == 'OPTIONS':
        # Handle preflight request
        response = make_response()
        response.headers.add("Access-Control-Allow-Methods", "GET, POST, DELETE")
        return response
    
@app.route('/api/data/policemen', methods=['GET', 'POST', 'DELETE', 'OPTIONS'])
def handle_data_policeman():
    if request.method == 'GET':
        cur = mysql.connection.cursor()
        cur.execute('SELECT * FROM policeman')
        policeman_data = cur.fetchall()
        cur.close()
        return jsonify(policeman_data)
    
    elif request.method == 'POST':
        data = request.json
        policeman_id = data.get('policeman_id')
        name = data.get('name')
        gender = data.get('gender')
        phone = data.get('phone')
        police_station_id = data.get('police_station_id')
        specialty = data.get('specialty')

        cur = mysql.connection.cursor()
        query = "INSERT INTO policeman (policeman_id, name, gender, phone, police_station_id, specialty) VALUES (%s, %s, %s, %s, %s, %s)"
        
        try:
            cur.execute(query, (policeman_id, name, gender, phone, police_station_id, specialty))
            mysql.connection.commit()
            cur.close()
            return jsonify({'message': 'Clue added successfully'})

        except Exception as e:
            logging.error(f"Error executing query: {query}")
            logging.error(str(e))
            return jsonify({'error': f'Failed to add clue. {str(e)}'}), 500

    elif request.method == 'DELETE':
        data = request.get_json()
        policeman_id = data.get('policeman_id')

        cur = mysql.connection.cursor()
        query = "DELETE FROM clue WHERE policeman_id = %s"

        try:
            cur.execute(query, (policeman_id,))
            mysql.connection.commit()
            cur.close()
            return jsonify({'message': 'Policeman deleted successfully'})

        except Exception as e:
            logging.error(f"Error executing query: {query}")
            logging.error(str(e))
            return jsonify({'error': f'Failed to delete Policeman. {str(e)}'}), 500
        
    elif request.method == 'OPTIONS':
        # Handle preflight request
        response = make_response()
        response.headers.add("Access-Control-Allow-Methods", "GET, POST, DELETE")
        return response
    
@app.route('/api/data/victims', methods=['GET', 'POST', 'DELETE', 'OPTIONS'])
def handle_data_victim():
    if request.method == 'GET':
        cur = mysql.connection.cursor()
        cur.execute('SELECT * FROM victim')
        victim_data = cur.fetchall()
        cur.close()
        return jsonify(victim_data)
    
    elif request.method == 'POST':
        data = request.json
        victim_id = data.get('victim_id')
        first_name = data.get('first_name')
        last_name = data.get('last_name')
        gender = data.get('gender')
        birth_date = data.get('birth_date')
        death_date = data.get('death_date')
        description_of_death = data.get('description_of_death')
        nationality = data.get('nationality')
        Case_case_id = data.get('Case_case_id')
        Medical_Examiner_medical_examiner_id = data.get('Medical_Examiner_medical_examiner_id')
        Lawyer_lawyer_id = data.get('Lawyer_lawyer_id')

        cur = mysql.connection.cursor()
        query = "INSERT INTO policeman (victim_id, first_name, last_name, gender, birth_date, death_date, description_of_death, nationality, Case_case_id, Medical_Examiner_medical_examiner_id, Lawyer_lawyer_id) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
        
        try:
            cur.execute(query, (victim_id, first_name, last_name, gender, birth_date, death_date, description_of_death, nationality, Case_case_id, Medical_Examiner_medical_examiner_id, Lawyer_lawyer_id))
            mysql.connection.commit()
            cur.close()
            return jsonify({'message': 'Victim added successfully'})

        except Exception as e:
            logging.error(f"Error executing query: {query}")
            logging.error(str(e))
            return jsonify({'error': f'Failed to add Victim. {str(e)}'}), 500

    elif request.method == 'DELETE':
        data = request.get_json()
        victim_id = data.get('victim_id')

        cur = mysql.connection.cursor()
        query = "DELETE FROM victim WHERE victim_id = %s"

        try:
            cur.execute(query, (victim_id,))
            mysql.connection.commit()
            cur.close()
            return jsonify({'message': 'Victim deleted successfully'})

        except Exception as e:
            logging.error(f"Error executing query: {query}")
            logging.error(str(e))
            return jsonify({'error': f'Failed to delete Victim. {str(e)}'}), 500
        
    elif request.method == 'OPTIONS':
        # Handle preflight request
        response = make_response()
        response.headers.add("Access-Control-Allow-Methods", "GET, POST, DELETE")
        return response



@app.route('/api/data/case-details', methods=['GET', 'OPTIONS'])
def handle_data_case_details():
    if request.method == 'GET':
        data = request.get_json()
        case_id = data.get('case_id', None)
        # case_id = 'C-412'
        cur = mysql.connection.cursor()

        if case_id:
            cur.execute('SELECT * FROM `case` WHERE case_id = %s', (case_id, None))
        else:
            cur.execute('SELECT * FROM `case`')

        case_details_data = cur.fetchall()
        cur.close()
        return jsonify(case_details_data)

if __name__ == '__main__':
    app.run(debug=True)

