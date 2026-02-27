# everything related to the database will go here
from config import db

#doing object-relational mapping (ORM) of my entities as  
class Student(db.Model):
    student_id = db.Column(db.Integer, primary_key = True)
    student_email = db.Column(db.String(255), nullable = False, unique = True)
    student_password = db.Column(db.String(255), nullable = False, unique = True)

    #turning python database fields to json objects to pass to the frontend
    def to_json(self):
        return {
            "studentID": self.student_id,
            "studentEmail":  self.student_email,
            "studentPassword": self.student_password
        }
    
    
class Amenity_type(db.Model):
    type_id = db.Column(db.Integer, primary_key = True)
    type_name = db.Column(db.String(255), nullable = False, unique = True)

    def to_json(self):
        return {
            "typeId": self.type_id,
            "typeName":  self.type_name
        }


class Amenity(db.Model):
    amenity_id = db.Column(db.Integer, primary_key = True)
    amenity_name = db.Column(db.String(255), nullable = False, unique = False)
    amenity_address = db.Column(db.String(255), nullable = False, unique = True)
    amenity_postcode = db.Column(db.String(255), nullable = False, unique = False)
    amenity_type_id = db.Column(db.Integer, db.ForeignKey('amenity_type.type_id'), nullable=False)
    
    def to_json(self):
        return {
            "amenityId": self.amenity_id,
            "amenityName":  self.amenity_name,
            "amenityAddress": self.amenity_address,
            "amenityPostcode": self.amenity_postcode,
            "amenityTypeId": self.amenity_type_id
        }
    

class Question(db.Model):
    question_id = db.Column(db.Integer, primary_key = True)
    full_question = db.Column(db.String(255), nullable = False, unique = True)
    amenity_type_id = db.Column(db.Integer, db.ForeignKey("amenity_type.type_id"), nullable=False)

    def to_json(self):
        return {
            "questionId": self.question_id,
            "fullQuestion":  self.full_question,
            "amenityTypeId": self.amenity_type_id
        }


class Review(db.Model):
    review_id = db.Column(db.Integer, primary_key = True)
    overall_rating = db.Column(db.Integer, nullable = False, unique = False)
    student_id = db.Column(db.Integer, db.ForeignKey("student.student_id"), nullable = False)
    amenity_id = db.Column(db.Integer, db.ForeignKey("amenity.amenity_id"), nullable = False)

    def to_json(self):
        return {
            "reviewId": self.review_id,
            "overallRating": self.overall_rating,
            "studentId": self.student_id,
            "amenityId": self.amenity_id
        }


class QuestionAnswer(db.Model):
    question_answer_id = db.Column(db.Integer, primary_key = True)
    answer_button = db.Column(db.String(1), nullable = False, unique = False)
    question_id = db.Column(db.Integer, db.ForeignKey("question.question_id"), nullable = False)
    review_id = db.Column(db.Integer, db.ForeignKey("review.review_id"), nullable = False)

    def to_json(self):
        return {
            "questionAnswer": self.question_answer_id,
            "answerButton": self.answer_button,
            "questionId": self.question_id,
            "reviewId": self.review_id
        }


