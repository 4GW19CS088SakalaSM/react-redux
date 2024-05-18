import express from 'express';
const router = express.Router();
import bcrypt from 'bcrypt';
import Patient from '../models/patients.model.js';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

const secretKey = crypto.randomBytes(32).toString('hex'); // Generate a consistent secret key for JWT

router.post('/patient/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingPatient = await Patient.findOne({ email });
    if (existingPatient) {
      return res.status(400).json({ message: 'Email already in use' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newPatient = new Patient({ name, email, password: hashedPassword });
    
    await newPatient.save();
    res.status(201).json({ message: 'Patient registered successfully' });
  
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/patient/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const patient = await Patient.findOne({ email });
    if (!patient) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    const isMatch = await bcrypt.compare(password, patient.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    const token = jwt.sign({ id: patient._id }, secretKey, { expiresIn: '1h' }); // Use secretKey here
    res.status(200).json({ token });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
