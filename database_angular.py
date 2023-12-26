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
        



# @app.route('/api/data/cases-details', methods=['GET', 'POST', 'DELETE', 'OPTIONS'])
# def handle_data_case_details():
#     if request.method == 'GET':
#         cur = mysql.connection.cursor()
#         cur.execute('SELECT * FROM `case`')
#         case_details_data = cur.fetchall()
#         cur.close()
#         return jsonify(case_details_data)

if __name__ == '__main__':
    app.run(debug=True)


# @app.route('/api/data', methods=['GET', 'POST'])
# def handle_data():
#     if request.method == 'GET':
#         cur = mysql.connection.cursor()
#         cur.execute('SELECT * FROM clue')
#         clue_data = cur.fetchall()

#         # ... (similar code for other tables)

#         cur.close()

#         # Combine data from different tables into a single dictionary
#         all_data = {
#             'clue': clue_data,
#             'suspect': suspect_data,
#             'witness': witness_data,
#             'policeman': policeman_data,
#             'case': case_data,
#             'victim': victim_data,
#             'medical-examiner': medical_examiner_data
#         }
#         return jsonify(all_data)

#     elif request.method == 'POST':
#         # Handle POST logic (insert a new case into the database)
#         data = request.json  # Assuming the data is sent as JSON
#         case_id = data.get('case_id')
#         location = data.get('location')
#         time = data.get('time')
#         description = data.get('description')
#         is_open = data.get('is_open')

#         # Perform the database insertion based on the actual column names
#         # Adjust the SQL query based on your table structure
#         cur = mysql.connection.cursor()
#         cur.execute(
#             "INSERT INTO `case` (case_id, location, time, description, is_open) VALUES (%s, %s, %s, %s, %s)",
#             (case_id, location, time, description, is_open)
#         )
#         mysql.connection.commit()
#         cur.close()

#         # Return a response if needed
#         return jsonify({'message': 'Case added successfully'})

# @app.route('/api/data/cases')
# def get_case_data():
#     cur = mysql.connection.cursor()
#     cur.execute('SELECT * FROM `case`')
#     case_data = cur.fetchall()
#     cur.close()
#     return jsonify(case_data)
