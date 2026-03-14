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
@app.route("/login", methods = ["POST"])
def verify_student_login():
    student_email = request.json.get("studentEmail")
    student_password = request.json.get("studentPassword")

    verified_student = Student.query.filter_by(student_email=student_email, student_password=student_password).first() #the first record in the db with the matching email and password is the student

    if not verified_student: #error message and status code if no student with the matching details exists
        return jsonify({"message": "Invalid login! Please try again"}), 401 #status code 401: unauthorised
    
    return jsonify({
        "message" : "login successful! "
    }), 200 #status code 200: successful

# - signup * this one still need to be sure about because i'd have to do validation check to verify they're a student
@app.route("/signup", methods = ["POST"])
def new_login():
    student_email = request.json.get("studentEmail")
    student_password = request.json.get("studentPassword")

    if not student_email or not student_password:
        return(
            jsonify({"message": "insufficient or wrong student data provided"}), 400 #status code 400: unsuccessful
        )
    
    new_student = Student(student_email = student_email, student_password=student_password)
    
    try:
        db.session.add(new_student)
        db.session.commit()
        return jsonify({"message": "student login created!"}), 201 #status code 201: created successful
    except Exception as e:
        return jsonify({"message": str(e)}), 400
    
    


#WILL NEED GET /AMENITY_TYPE ENDPOINT HERE ASWELL BECAUSE I NEED TO MATCH THE CORRECT TYPE IDS
@app.route("/amenity_types", methods = ["GET"])
def get_amenity_types(): 
    types = Amenity_type.query.all()
    json_types = list(map(lambda x: x.to_json(), types))
    return jsonify({"types": json_types})


@app.route("/amenity_types/<int:id>/amenities", methods = ["GET"])
def get_amenities_by_type(id): #will be used when you want to filter amenities for a certain type
    amenities = Amenity.query.filter_by(amenity_type_id = id).all() #need to match the amenity type to the id paramater then return the list of amenities

    if not amenities:
        return jsonify({"message": "amenities not found"}), 404
    
    return jsonify([{
        "name": a.amenity_name,
        "address": a.amenity_address    
    } for a in amenities
    ]), 200




@app.route("/amenities", methods = ["GET"])
def get_amenities(): 
    amenities = Amenity.query.all() #get all the amenities - this is for when i do the search and display all the current amenities
    json_amenities = list(map(lambda x: x.to_json(), amenities)) #convert them into a list of json objects
    return jsonify({"amenities": json_amenities})#return the list of json amenities


    
@app.route("/add_amenities", methods = ["POST"])
def add_amenity(): #when i want to create new amenities
    #btw when i send the amenity to the backend from the frontend, i'll need to refresh the page or just append the new amenity to the amenity list somehow

    amenity_name = request.json.get("amenityName")
    amenity_address = request.json.get("amenityAddress")
    amenity_place_id = request.json.get("amenityPlaceId")
    amenity_type_id = request.json.get("amenityTypeId")

    # if not amenity_name or not amenity_address or not amenity_place_id or not amenity_type_id:
    #     return(
    #         jsonify({"message": "insufficient or wrong amenity data provided"}), 400 
    #     )

    if not amenity_name:
        return(
            jsonify({"message": "issue with name"}), 400 
        )
    
    if not amenity_address:
        return(
            jsonify({"message": "issue with address"}), 400 
        )
    
    if not amenity_place_id:
        return(
            jsonify({"message": "issue with place id"}), 400 
        )
    
    if not amenity_type_id:
        return(
            jsonify({"message": "issue with type"}), 400 
        )
    
    new_amenity = Amenity(amenity_name = amenity_name, amenity_address=amenity_address, amenity_place_id=amenity_place_id, amenity_type_id=amenity_type_id)
    
    try:
        db.session.add(new_amenity)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400

    return jsonify({"message": "amenity created!"}), 201 #status code 201: created successfully


#this is for when you find the specific amenity via search
@app.route("/amenities/<int:id>", methods = ["GET"])
def find_amenity(id):
    found_amenity = Amenity.query.get(id)

    if not found_amenity:
        return jsonify({"message": "amenity not found"}), 404 #status code 404: not found

    return jsonify({
        "message": "amenity found",
        "name": found_amenity.amenity_name,
        "address" : found_amenity.amenity_address            
    }), 200





#when you want only questions for the specific amenity type
@app.route("/amenity_types/<int:id>/questions", methods = ["GET"])
def get_questions_by_type(id):
    #get the questions for the specific amenity type
    found_questions = Question.query.filter_by(amenity_type_id = id).all() # again, i need to match the amenity_type ids and then get the list of relevant qs

    if not found_questions:
        return jsonify({"message": "questions not found"}), 404
    
    return jsonify([{
        "id": qs.question_id,
        "fullQuestions": qs.full_question
        } for qs in found_questions
        ]), 200


#to create reviews
@app.route("/reviews", methods = ["POST"])
def add_review(): #when i want to create new reviews

    #the questionAnswer fields
    # answer_button = request.json.get("answerButton")
    # question_id = request.json.get("questionId")
    answer_list = request.json.get("answers")


    #the review fields
    overall_rating = request.json.get("overallRating")
    student_id = request.json.get("studentId")
    amenity_id = request.json.get("amenityId")

    # if not answer_button or not question_id:
    #     return (
    #         jsonify({"message": "insufficient answer data provided. Can't make review"}), 400
    #     )

    if not answer_list:
        jsonify({"message": "question answers not provided, cannot create review"}), 400
    
    if not isinstance(answer_list, list):
        jsonify({"message": "question answers not provided in a list, cannot create review"}), 400

    if not overall_rating or not student_id or not amenity_id:
        return(
            jsonify({"message": "insufficient or wrong review data provided"}), 400
        )
    
    new_Review = Review(overall_rating=overall_rating, student_id=student_id, amenity_id=amenity_id)
    
    try:
        db.session.add(new_Review)
        db.session.flush()

        for answers in answer_list:
            new_QuestionAnswer = QuestionAnswer(answer_button=answers["answerButton"], question_id=answers["questionId"], review_id=new_Review.review_id)
            db.session.add(new_QuestionAnswer)

        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400

    return jsonify({"message": "review created!"}), 201
    


@app.route("/amenities/<int:id>/review_summary", methods = ["GET"])
def get_review_summary(id):
    #this is where i get the review summaries with the percentages and overall ratings
    # questions = Question.query.join(Amenity_type).join(Amenity)\
    #     .filter(Amenity.id == id).all()
    
    specific_amenity = Amenity.query.get(id)

    #add an error thing here so that i can see if it works on the client
    if not specific_amenity:
        return jsonify({"message": "amenity not found, can't display summary"}), 404
    
    questions = Question.query.filter_by(amenity_type_id=specific_amenity.amenity_type_id).all()

    summary = {}

    for question in questions:
        total = QuestionAnswer.query.join(Review).filter(
            Review.amenity_id == id,
            QuestionAnswer.question_id == question.question_id
        ).count()

        yes_count = QuestionAnswer.query.join(Review).filter(
            Review.amenity_id == id,
            QuestionAnswer.question_id == question.question_id,
            QuestionAnswer.answer_button == "y"
        ).count()

        percentage = ((yes_count / total) * 100) if total > 0 else 0

        summary[question.full_question] = round(percentage, 2)

    return jsonify(summary), 200

#TESTED UP TO HERE



if __name__ == "__main__":
    #create the models/entities in models.py
    #with app.app_context():            #GONNA TEMPORARILY MOVE IT OUTSIDE SO I CAN SEE IF IT CREATED THE TABLES CORRECTLY
    #    db.create_all()

    app.run(debug=True)