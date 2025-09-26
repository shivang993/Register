import express from 'express';
import dotenv from "dotenv"
import mongoose from 'mongoose';
import  DB_NAME  from './constant.js';
import connectDB from './config/connectdb.js';
import cors from 'cors';
import routes from './routes/userRouters.js';

dotenv.config()

const app = express();
const PORT = process.env.PORT;

connectDB(process.env.DATABASE_URL);




app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));

connectDB(process.env.DATABASE_URL);

app.use('/api/user',routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
  console.log(`Connected Database`);
}  );