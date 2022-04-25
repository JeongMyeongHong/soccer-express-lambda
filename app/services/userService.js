import db from '../models/index.js'
import getDatabase from '../lambdas/getDatabase.js'

export default function UserService() {
    const User = db.user;
    const dbo = getDatabase()
    const dbConnect = dbo.getDb();
    return {
        join(req, res) {
            console.log(' ### 진행 4: 노드서버에 진입함 ' + JSON.stringify(req.body))
            new User(req.body).save(() => {
                res
                    .status(200)
                    .json({ok: 'ok'})
                console.log('회원가입 성공')
            })
        },
        login(req, res) {
            User.findOne({
                userid: req.body.userid
            }, function (err, user) {
                if (err) 
                    throw err
                if (!user) {
                    res
                        .status(401)
                        .send({success: false, message: '해당 ID가 존재하지 않습니다'});
                } else {
                    console.log(' ### 로그인 정보 : ' + JSON.stringify(user))
                    user.comparePassword(req.body.password, function (_err, isMatch) {
                        if (!isMatch) {
                            res
                                .status(401)
                                .send({message: 'FAIL'});
                        } else {
                            user.generateToken((err, user) => {
                                if (err) 
                                    res
                                        .status(400)
                                        .send(err)

                                    // 토큰을 저장한다. 어디에? 쿠키, 로컬스토리지
                                res
                                    .status(200)
                                    .json(user)
                            })
                        }
                    })
                }
            })
        }

    }
}
