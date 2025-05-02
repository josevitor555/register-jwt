import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true, // Ensure email is unique
    },
    
    password: {
        type: String,
        required: true,
    },
});

export default mongoose.model('users', userSchema); // Export the User model for use in other files
