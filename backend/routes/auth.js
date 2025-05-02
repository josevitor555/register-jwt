import express from 'express';
import { register, login } from '../controllers/authController.js'; // Importa as funções do controlador

const router = express.Router();

// Register router
router.post('/register', register);

// Login Router
router.post('/login', login);

export default router;
