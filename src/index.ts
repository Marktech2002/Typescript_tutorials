import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import router from './router';
import cors from 'cors';
import mongoose from 'mongoose'; 
import { Color } from 'colors';

const app = express();
//middlewares

app.use(cors({
    credentials: true,
  }));
  app.use(compression());
  app.use(cookieParser());
  app.use(bodyParser.json());

const MONGO_URL = 'mongodb+srv://makteee:maktee001@soft.2q43axw.mongodb.net/?retryWrites=true&w=majority';
mongoose.Promise = Promise ;
mongoose.connect(MONGO_URL)
mongoose.connection.on('error', (error: Error) => console.log(error));
   
const PORT : number = 3000;

app.listen(PORT , ()=> {
    console.log(`You are listening to idan on port ${PORT}`)
})

app.use('/', router());