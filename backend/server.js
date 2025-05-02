
import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';

import express from 'express';
const app = express();
import cors from 'cors';
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected successfully!');
  }).catch(err => console.error(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
