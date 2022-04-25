import db from '../models/index.js'

export default function TodoService() {
    const Todo = db.todo
    return {
        add(req, res) {
            console.log(' ### 진행 4: 노드 todo 서버에 진입함 '+ JSON.stringify(req.body))
            new Todo(req.body).save(()=>{
                res.status(200).json({'result':'OK'})
            })
        },
        get(_req, res){
            Todo.find()
            .exec((err, todos) => {
                if (err) return res.status(400).send(err)
                res.status(200).json({ success : true, todos})
                console.log(todos)
            })
        }
    }
}
