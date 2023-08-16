// models/user.ts

import mongoose, { Schema, Document } from 'mongoose';

// Define the interface for the User document
interface IUser extends Document {
  username: string;
  email: string;
  createdAt: Date;
}

// Define the Mongoose schema for the User model
const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create and export the User model
const User = mongoose.model<IUser>('User', userSchema);

export default User;
