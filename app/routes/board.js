import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import BoardService from '../services/boardService.js'
dotenv.config();
const corsOptions = {
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200
}
const app = express();
app.use(cors());

app.post('/write', cors(corsOptions),(req, res) => {
    res.status(200).json(BoardService().write(req, res))
  })

app.get('/read', cors(corsOptions),(req, res) => {
    res.status(200).json(BoardService().read(req, res))
})

export default app;
