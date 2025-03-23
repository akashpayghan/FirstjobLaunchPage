
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Get MongoDB connection string from environment variable
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/firstjob';

// Connect to MongoDB
export const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

// Define subscriber schema
const subscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  subscribeDate: {
    type: Date,
    default: Date.now,
  },
});

// Define feedback schema
const feedbackSchema = new mongoose.Schema({
  option: {
    type: String,
    required: true,
    trim: true,
  },
  suggestion: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

// Create and export the models
export const Subscriber = mongoose.model('Subscriber', subscriberSchema);
export const Feedback = mongoose.model('Feedback', feedbackSchema);
