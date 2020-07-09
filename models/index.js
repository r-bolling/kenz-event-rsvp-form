import mongoose from 'mongoose';

const GuestSchema = mongoose.Schema({
  name: String,
  email: String,
  attending: Boolean,
  numberOfGuests: Number,
});

export const GuestsModel = mongoose.model('Guests', GuestSchema);
