import db from '../models/index.js'
import express from 'express';

export default function UserController() {
    const router = express.Router();
    const User = db.user
    router.post('/api/user/signUp', function (req, res) {
            console.log(' ### 진행 4: 노드서버에 진입함 ' + JSON.stringify(req.body))
            new User(req.body).save(() => {
                res
                    .status(200)
                    .json({'result': 'ok'})
            })
        });
    router.get('list', function (req, res) {

        User.find()
            .exec((err, users) => {
                if (err) 
                    return res
                        .status(400)
                        .send(err)
                res
                    .status(200)
                    .json({success: true, users})
            })

    });
    router.get('profile', function (req, res) {
        console.log(`### user profile access ### `)
        User.find({userid: req.params.id})
            .exec((err, user) => {
                if (err) 
                    return res
                        .status(400)
                        .send(err)
                res
                    .status(200)
                    .json({success: true, user})
            })

    });
    router.post('login', function (req, res) {
        console.log(`### user login access ### `)
        User.find({userid: req.params.id, password: req.params.password})
            .exec((err, user) => {
                if (err) 
                    return res
                        .status(400)
                        .send(err)
                res
                    .status(200)
                    .json({success: true, user})
            })

        try {
            const id = 'test'
            const nick = 'test'
            // jwt.sign() 메소드: 토큰 발급
            const token = jwt.sign({
                id,
                nick
            }, process.env.JWT_SECRET, {
                expiresIn: '1m', //1분
                issuer: '토큰 발급자'
            });

            return res.json({code: 200, message: '토큰이 발급되었습니다.', token});
        } catch (error) {
            console.error(error);
            return res
                .status(500)
                .json({code: 500, message: '서버 에러'});
        }
    });
}