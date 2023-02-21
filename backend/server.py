from flask import Flask, jsonify
from flask_restful import Resource, Api
from pymongo import MongoClient
from flask_cors import CORS
from bson.objectid import ObjectId

app = Flask(__name__)
api = Api(app)
CORS(app)
mongo = MongoClient('localhost', 27017)
db = mongo.kanji



class UserConnection(Resource):
    def get(self, username):
        users = db.users
        user = users.find_one({ 'username': username })
        if user:
            return { 
                'userId': str(user['_id']),
                'username': username
            }, 200 
        user_id = users.insert_one({
            'username': username
        }).inserted_id
        return { 'userId': str(user_id), 'username': username }, 200

    def post(self, username):
        users = db.users
        if users.find_one({ 'username': username }):
            return { 'message': 'A user already exists' }, 409 

        user_id = users.insert_one({
            'username': username
        }).inserted_id

        return { 
            'userId': str(user_id),
            'username': username
        }, 200

class UserId(Resource):
    def get(self, id):
        users = db.users
        user = users.find_one({ '_id': ObjectId(id) })
        print(user)
        if user:
            return { 'username': user['username'] }, 200
        return {'message': 'No user found'}, 404


api.add_resource(UserConnection, '/user/<string:username>')
api.add_resource(UserId, '/user/id/<string:id>')


if (__name__ == '__main__'):
    app.run(debug=True)
