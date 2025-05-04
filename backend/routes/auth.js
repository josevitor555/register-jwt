import express from 'express';
import { register, login, deleteAccount } from '../controllers/authController.js';
import verifyToken from '../middlewares/authMiddleware.js';

const router = express.Router();

// Register router
router.post('/register', register);

// Login Router
router.post('/login', login);

// Delete Account User
router.delete('/deleteAccount', verifyToken, deleteAccount);

export default router;
