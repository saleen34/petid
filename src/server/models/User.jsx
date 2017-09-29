import mongoose from 'mongoose';

/* TODO: Unique checks, password hashing, formatting */
const userSchema = new mongoose.Schema({
  username: { type: String, lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true },
  email: { type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true },
  salt: String,
  hash: String,
  name: String,
  cell: String,
  home: String,
  address1: String,
  address2: String,
  city: String,
  state: String,
  zip: String,
  country: String
}, { timestamps: true });

export default mongoose.model('User', userSchema, 'User');
