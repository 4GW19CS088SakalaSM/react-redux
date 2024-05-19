import express from 'express';
const router = express.Router();
import bcrypt from 'bcrypt';
import Doctor from '../models/doctors.model.js';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

const secretKey = crypto.randomBytes(32).toString('hex'); // Generate a consistent secret key for JWT

router.post('/doctor/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingDoctor= await Doctor.findOne({ email });
    if (existingDoctor) {
      return res.status(400).json({ message: 'Email already in use' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newDoctor = new Doctor({ name, email, password: hashedPassword });
    
    await newDoctor.save();
    res.status(201).json({ message: 'doctor registered successfully' });
  
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/doctor/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const doctor = await Doctor.findOne({ email });
    if (!doctor) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    const isMatch = await bcrypt.compare(password, doctor.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    const token = jwt.sign({ id: doctor._id }, secretKey, { expiresIn: '1h' }); // Use secretKey here
    res.status(200).json({ token });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
