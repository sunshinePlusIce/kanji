from flask import Flask, jsonify, request, make_response
from flask_restful import Resource, Api
from pymongo import MongoClient
from flask_cors import CORS
from bson.objectid import ObjectId
from bson.son import SON
from datetime import datetime

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
        if user:
            return { 'username': user['username'], '_id': str(id) }, 200
        return {'message': 'No user found'}, 404

class Books(Resource):
    def get(self):
        pipeline = [
            {"$project": {
                "title": "$title",
                "count": {
                    "$size": "$words"
                }
            }}
        ]
        books = db.dict.aggregate(pipeline)
        return [
            {
                "_id": str(doc['_id']),
                "title": doc['title'],
                'wordCount': doc['count']
            } for doc in books
        ], 200

class BookDetail(Resource):
    def get(self, id):
        book = db.dict.find_one({'_id': ObjectId(id)})
        if book:
            return {
                "_id": str(book['_id']),
                'title': book['title'],
                'words': book['words']
            }, 200

        return {'message': 'Book not found'}, 404

class CreatePlan(Resource):
    def post():
        pass

@app.route('/plan/new', methods=['POST'])
def createPlan():
    args = request.get_json()
    userId = args['userId']
    bookId = args['bookId']
    title = args['title']
    dailyMemo = args['dailyMemo']
    scheme = args['scheme']

    plan = {
        'title': title,
        'books': [ObjectId(bookId)],
        'scheme': scheme,
        'startDate': datetime.now(),
        'dailyToMemo': dailyMemo,
        'checkinHistory': [],
        'words': []
    }

    pipeline = [
        {
            "$match": {
                "_id": ObjectId(userId)
            }
        },
        {"$project": {
            "count": {
                "$size": "$plans"
            }
        }},
    ]
    planSize = 0
    try:
        planSize = db.users.aggregate(pipeline).next()['count']
    except:
        planSize = 0
    res = db.users.update_one({
        '_id': ObjectId(userId)
    }, {
        '$push': {
            'plans': plan
        }
    })
    
    return make_response(jsonify({
        'matched': res.matched_count,
        'modified': res.modified_count,
        'index': planSize
    }), 201 if res.modified_count > 0 else 200)

class Memo(Resource):
    def post():
        request_json = request.get_json()
        print(request_json)
        # args = parser.parse_args()
        # userId = args['userId']
        # bookId = args['bookId']
        # dailyMemo = args['dailyMemo']
        # scheme = args['scheme']

        # print(userId, bookId, dailyMemo, scheme)

        # plan = {
        #     'title': 'gen',
        #     'books': [ObjectId(bookId)],
        #     'scheme': scheme,
        #     'startDate': datetime.now(),
        #     'dailyToMemo': dailyMemo,
        #     'checkinHistory': [],
        #     'words': []
        # }

        # db.user.update_one({
        #     '_id': ObjectId(userId)
        # }, {
        #     '$push': {
        #         'plans': plan
        #     }
        # })

        return 200



api.add_resource(UserConnection, '/user/<string:username>')
api.add_resource(UserId, '/user/id/<string:id>')
api.add_resource(Books, '/books')
api.add_resource(BookDetail, '/books/<string:id>')
# api.add_resource(Memo, '/plan/new')


if (__name__ == '__main__'):
    app.run(debug=True)
