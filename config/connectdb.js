import mongoose from 'mongoose';
import  DB_NAME  from '../constant.js';
import dotenv from 'dotenv';


const connectDB = (DATABASE_URL) => {
 try {
    const DB_OPTION = {
        dbName: DB_NAME,
    }
    mongoose.connect(DATABASE_URL,DB_OPTION);
    console.log("Database connected");
 } catch (error) {
  console.log("Database connection failed");
  console.log(error);
 }
}
export default connectDB;