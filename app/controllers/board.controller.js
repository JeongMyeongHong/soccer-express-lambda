const db = require("../models")
const BoardSchema = db.board

exports.write = (req, res) => {
    console.log(` 진행 4 : 노드 게시판 글쓰기 서버에 진입함 ${JSON.stringify(req.body)}`)
    new BoardSchema(req.body).save(() => {//new 는 스키마만 가져오고 data는 가져오지 않는다.
        res.status(200).json({'result':'ok'})
    })
}

exports.read = (req, res) => {
    console.log(`######보드 리스트 엑세스######`)
    BoardSchema.find((err, boards) => {
        if (err) return res.status(400).send(err)
        res.status(200).json({ success: true, boards})
    })
}