# will contain the main routes/endpoints of the website
from flask import request, jsonify
from config import app, db
from models import Student, Amenity_type, Amenity, Question, Review, QuestionAnswer

with app.app_context():
    db.create_all()
    print("Registered tables:", db.metadata.tables.keys())

#just to see the backend server is running
@app.route("/")
def home():
    return "CityGems Backend Running"

#here i'll add the functions that my login page will use including:
# - login with email address and password (check the email and password they enter match the db to login)
# - signup * this one still need to be sure about because i'd have to do validation check to verify they're a student
@app.route("/login")

#here i'll add the functions that my homepage will use including:
# - get amenities to display in the amenity list
# - get reviews * with this though it'll be the calulations of the average rating rather than the overall ratings
# - also need to add the 
@app.route("/homepage", methods = ["GET"])
def get_amenities():
    amenities = Amenity.query.all() #get all the amenities 
    json_amenities = list(map(lambda x: x.to_json(), amenities)) #convert them into a list of json objects
    return jsonify({"amenities": json_amenities})#return the list of json amenities

#@app.route("/add_review")
#functions here


#@app.route("/add_amenity")
#functions here

if __name__ == "__main__":
    #create the models/entities in models.py
    #with app.app_context():            #GONNA TEMPORARILY MOVE IT OUTSIDE SO I CAN SEE IF IT CREATED THE TABLES CORRECTLY
    #    db.create_all()

    app.run(debug=True)