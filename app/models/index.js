import dotenv from 'dotenv';
import mongoose from 'mongoose';
import UserModel from './User.js';
import TodoModel from './Todo.js';
import BoardModel from './Board.js';

mongoose.Promise = global.Promise


const db = {}
db.mongoose = mongoose
db.url = dotenv.MONGO_URL
db.user = UserModel(mongoose)
db.todo = TodoModel(mongoose)
db.board = BoardModel(mongoose)

export default db