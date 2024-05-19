import express from 'express';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

const router = express.Router();
const secretKey = crypto.randomBytes(32).toString('hex');

// Admin login route
router.post('/admin/login', async (req, res) => {
  const { name, password } = req.body;

  try {
    if (name === 'admin' && password === 'admin') {
      const token = jwt.sign({ name }, secretKey, { expiresIn: '1h' });
      return res.status(200).json({ message: 'Admin logged in successfully', token });
    } else {
      return res.status(400).json({ message: 'Invalid admin credentials' });
    }
  } catch (error) {
    logger.error('Error during admin login: ' + error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;
