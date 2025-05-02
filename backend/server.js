
import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';

import express from 'express';
const app = express();
app.use("/api/auth", authRoutes);

import cors from 'cors';
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected successfully!');
  }).catch(err => console.error(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
