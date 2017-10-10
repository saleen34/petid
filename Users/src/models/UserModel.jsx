import mongoose from 'mongoose';
import AutoIncrement from 'mongoose-sequence';

const autoIncrement = new AutoIncrement(mongoose);

/* TODO: Unique checks, password hashing, formatting */
const userSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  userId: { type: Number, default: 0 },
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

userSchema.plugin(autoIncrement, { inc_field: 'userId' });

export default mongoose.model('User', userSchema, 'User');
