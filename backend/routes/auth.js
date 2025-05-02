import express from 'express';
const router = express.Router(); // Import the express module and create a new router instance

import { login, register } from '../controllers/authController.js';

// Define the routes for authentication
router.post('/register', register); // Route for user registration
router.post('/login', login); // Route for user login

export default router; // Export the router for use in the main app