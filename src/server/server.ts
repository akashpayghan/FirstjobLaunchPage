
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { connectToDatabase, Feedback } from './db';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Middleware
app.use(cors());
app.use(express.json());

// Middleware to verify admin token
const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ success: false, message: 'Access denied. No token provided.' });
  }

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.body.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ success: false, message: 'Invalid token.' });
  }
};

// API Routes
// Submit feedback
app.post('/api/feedback', async (req: Request, res: Response) => {
  try {
    const { option, suggestion } = req.body;
    
    if (!option) {
      return res.status(400).json({ success: false, message: 'Option is required.' });
    }
    
    const feedback = new Feedback({
      option,
      suggestion
    });
    
    await feedback.save();
    
    return res.status(201).json({ 
      success: true, 
      message: 'Feedback submitted successfully.'
    });
  } catch (error) {
    console.error('Error submitting feedback:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Error submitting feedback. Please try again.' 
    });
  }
});

// Admin login
app.post('/api/admin/login', (req: Request, res: Response) => {
  const { username, password } = req.body;
  
  // Check if credentials match
  if ((username === 'akashpayghan' || username === 'ashusharma') && password === 'Bepositive@firstJob1') {
    // Generate JWT token
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
    
    return res.json({
      success: true,
      token,
      message: 'Login successful'
    });
  } else {
    return res.status(401).json({
      success: false,
      message: 'Invalid credentials'
    });
  }
});

// Get all feedback (protected route)
app.get('/api/admin/feedback', verifyToken, async (req: Request, res: Response) => {
  try {
    const feedback = await Feedback.find().sort({ createdAt: -1 });
    
    return res.json({
      success: true,
      data: feedback
    });
  } catch (error) {
    console.error('Error fetching feedback:', error);
    return res.status(500).json({
      success: false,
      message: 'Error fetching feedback data.'
    });
  }
});

// Start server
connectToDatabase().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}).catch(err => {
  console.error('Failed to connect to MongoDB:', err);
});
