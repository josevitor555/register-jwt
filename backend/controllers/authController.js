import User from '../models/User.js'; // Import the User model to interact with the database
import bcrypt from 'bcryptjs'; // Import bcrypt for password hashing
import jwt from 'jsonwebtoken'; // Import jsonwebtoken for generating JWT tokens

// Function to register a new user
const register = async (req, res) => {
    const { name, email, password } = req.body; // Destructure the request body to get name, email, and password

    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' }); // Check if user already exists
        }

        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
        const user = new User({ name, email, password: hashedPassword });
        await user.save(); // Save the user to the database

        res.status(201).json({ message: 'User registered successfully' }); // Respond with success message

    } catch (error) {
        return res.status(500).json({ message: 'Server error' });
    }

}

// Function to login a user
const login = async (req, res) => {
    const { email, password } = req.body; // Destructure the request body to get email and password

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' }); // Check if user exists
        }

        const valid = await bcrypt.compare(password, user.password); // Compare passwords
        if (!valid) {
            return res.status(400).json({ message: 'Invalid credentials' }); // Check if password is valid
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token, user: { id: user._id, name: user.name, email: user.email } }); // Respond with token and user info

    } catch (error) {
        return res.status(500).json({message: 'Error fetching user'});
    }
}

export { register, login };  // Export the functions for use in routes
