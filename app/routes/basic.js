import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import BasicService from '../services/basicService.js'
dotenv.config();
const corsOptions = {
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200
}
const app = express();
app.use(cors());

app.post('/bmi', cors(corsOptions),(req, res) => {
  res.status(200).json(BasicService().getBmi(req, res))
})

export default app;