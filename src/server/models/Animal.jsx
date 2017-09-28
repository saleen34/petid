import mongoose from 'mongoose';

const animalSchema = new mongoose.Schema({
  id: Number,
  name: String,
  gender: String,
  breed: String,
  color: String,
  birthdate: Date,
  weight: String,
  notes: String,
  image: String
}, { timestamps: true });

export default mongoose.model('Animal', animalSchema);
