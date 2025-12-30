import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

mongoose.connect(process.env.MONGODB_URL).then(()=>{
  console.log('Connected to MongoDB');
}).catch((error)=>{
  console.error('Error connecting to MongoDB:', error);
});

const app = express();

// Middleware to enable CORS
app.use(cors({
origin: process.env.FRONTEND_URL || 'http://localhost:5174',
methods: ['GET', 'POST', 'PUT', 'DELETE'],
allowedHeaders: ['Content-Type', 'Authorization'],
}));

//Middleware to handle JSON object in req body
app.use(express.json());

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});