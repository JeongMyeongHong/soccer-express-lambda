import dotenv from 'dotenv';
import mongoose from 'mongoose';
import UserModel from './user.model.js';
import TodoModel from './todo.model.js';
import BoardModel from './board.model.js';

mongoose.Promise = global.Promise


const db = {}
db.mongoose = mongoose
db.url = dotenv.MONGO_URL
db.user = UserModel(mongoose)
db.todo = TodoModel(mongoose)
db.board = BoardModel(mongoose)

export default db