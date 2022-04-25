import db from '../models/index.js'
import express from 'express';

export default function TodoController() {
    const router = express.Router();
    const Todo = db.todo
    router.post('add', function(req, res){
      console.log(' ### 진행 4: 노드 todo 서버에 진입함 '+ JSON.stringify(req.body))
      new Todo(req.body).save(()=>{
        res.status(200).json({'result':'OK'})
      })
    });
    router.get('get', function(req, res){
      Todo.find()
      .exec((err, todos) => {
        if (err) return res.status(400).send(err)
        res.status(200).json({ success : true, todos})
        console.log(todos)
      })
    });
}