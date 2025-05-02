import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
});

export default mongoose.model('User', userSchema); // Export the User model for use in other files