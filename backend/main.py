# will contain the main routes/endpoints of the website
from flask import request, jsonify
from config import app, db
from models import Student, Amenity_type, Amenity, Question, Review, QuestionAnswer

with app.app_context():
    db.create_all()
    print("Registered tables:", db.metadata.tables.keys()) #test: check db tables


#just to see the backend server is running
@app.route("/")
def home():
    return "CityGems Backend Running"



#here i'll add the functions that my login page will use including:
# - login with email address and password (check the email and password they enter match the db to login)
# - signup * this one still need to be sure about because i'd have to do validation check to verify they're a student
@app.route("/login", methods = ["POST"])
def verify_student_login():
    student_email = request.json.get("studentEmail")
    student_password = request.json.get("studentPassword")

    verified_student = Student.query.filter_by(student_email=student_email, student_password=student_password).first() #the first record in the db with the matching email and password is the student

    if not verified_student: #error message and status code if no student with the matching details exists
        return jsonify({"message:" "Invalid login! Please try again"}), 401 #status code 401: unauthorised
    
    return jsonify({
        "message" : "login successful! "
    }), 200 #status code 200: successful



@app.route("/amenity_types/<int:id>/amenities", methods = ["GET"])
def get_amenities_by_type(id): #will be used when you want to filter amenities for a certain type
    amenities = Amenity.query.filter_by(amenity_type_id = id).all() #need to match the amenity type to the id paramater then return the list of amenities

    if not amenities:
        return jsonify({"message": "amenities not found"}), 404
    
    return jsonify([{
        "message": "amenity found!",
        "id": amenity.id,
        "name": amenity.name,
        "address": amenity.address    
    } for a in amenities
    ]), 200




@app.route("/amenities", methods = ["GET"])
def get_amenities(): 
    amenities = Amenity.query.all() #get all the amenities - this is for when i do the search and display all the current amenities
    json_amenities = list(map(lambda x: x.to_json(), amenities)) #convert them into a list of json objects
    return jsonify({"amenities": json_amenities})#return the list of json amenities
    
@app.route("/amenities", methods = ["POST"])
def add_amenity(): #when i want to create new amenities
    #btw when i send the amenity to the backend from the frontend, i'll need to refresh the page or just append the new amenity to the amenity list somehow

    amenity_name = request.json.get("amenityName")
    amenity_address = request.json.get("amenityAddress")
    amenity_postcode = request.json.get("amenityPostcode")
    amenity_type_id = request.json.get("amenityTypeId")

    if not amenity_name or not amenity_address or not amenity_postcode or not amenity_type_id:
        return(
            jsonify({"message": "insufficient or wrong amenity data provided"}), 400 #status code 400: unsuccessful
        )
    
    new_amenity = Amenity(amenity_name = amenity_name, amenity_address=amenity_address, amenity_postcode=amenity_postcode, amenity_type_id=amenity_type_id)
    
    try:
        db.session.add(new_amenity)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400

    return jsonify({"message": "amenity creates!"}), 201 #status code 201: created successfully


#this is for when you find the specific amenity via search
@app.route("/amenities/<int:id>", methods = ["GET"])
def find_amenity(id):
    found_amenity = Amenity.query.get(id)

    if not found_amenity:
        return jsonify({"message": "amenity not found"}), 404 #status code 404: not found

    return jsonify({
        "message": "amenity found",
        "id": found_amenity.id,
        "name": found_amenity.name,
        "address" : found_amenity.address            
    }), 200


#when you want only questions for the specific amenity type
@app.route("/amenity_types/<int:id>/questions", methods = ["GET"])
def get_questions_by_type(id):
    #get the questions for the specific amenity type
    found_questions = Question.query.filter_by(amenity_type_id = id).all() # again, i need to match the amenity_type ids and then get the list of relevant qs

    if not found_questions:
        return jsonify({"message": "questions not found"}), 404
    
    return jsonify([{
        "message": "questions found! returning...",
        "id": found_questions.id,
        "fullQuestions": found_questions.fullQuestion
        } for qs in found_questions
        ]), 200



#to create reviews
@app.route("/reviews", methods = ["POST"])
def add_review(): #when i want to create new amenities
    overall_rating = request.json.get("overallRating")
    student_id = request.json.get("studentId")
    amenity_id = request.json.get("amenityId")

    if not overall_rating or not student_id or not amenity_id:
        return(
            jsonify({"message": "insufficient or wrong amenity data provided"}), 400 #status code 400: unsuccessful
        )
    
    new_Review = Review(overall_rating=overall_rating, student_id=student_id, amenity_id=amenity_id)

    try:
        db.session.add(new_Review)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400

    return jsonify({"message": "review created!"}), 201
    


@app.route("/amenities/<int:id>/review_summary", methods = ["GET"])
def get_review_summary(id):
    #this is where i get the review summaries with the percentages and overall ratings
    questions = Question.query.join(Amenity_type).join(Amenity)\
        .filter(Amenity.id == id).all()
    
    #add an error thing here so that i can see if it works on the client

    summary = {}

    for question in questions:
        total = QuestionAnswer.query.join(Review).filter(
            Review.amenity_id == id,
            QuestionAnswer.question_id == question.id
        ).count()

        yes_count = QuestionAnswer.query.join(Review).filter(
            Review.amenity_id == id,
            QuestionAnswer.question_id == question.id,
            QuestionAnswer.answer == "y"
        ).count()

        percentage = (yes_count / total * 100) if total > 0 else 0

        summary[question.text] = round(percentage, 2)

    return jsonify(summary), 200





if __name__ == "__main__":
    #create the models/entities in models.py
    #with app.app_context():            #GONNA TEMPORARILY MOVE IT OUTSIDE SO I CAN SEE IF IT CREATED THE TABLES CORRECTLY
    #    db.create_all()

    app.run(debug=True)