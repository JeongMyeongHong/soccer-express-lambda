import db from '../models/index.js'

export default function BoardService() {
    const BoardSchema = db.board
    return {
        write(req, res) {
            console.log(` 진행 4 : 노드 게시판 글쓰기 서버에 진입함 ${JSON.stringify(req.body)}`)
            BoardSchema(req.body).save(() => {
                res.status(200).json({'result':'ok'})
            })
        },
        read(_req, res){
            console.log(`######보드 리스트 엑세스######`)
            BoardSchema.find((err, boards) => {
                if (err) return res.status(400).send(err)
                res.status(200).json({ success: true, boards})
            })
        }
    }
}