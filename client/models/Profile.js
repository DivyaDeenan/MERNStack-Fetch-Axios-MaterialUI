const mongoose = require('mongoose');


const ProfileSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: [true, 'Please add firstName']
      },
  lastName: {
    type: String,
    required: [true, 'Please add lastName']
  },
  email: {
    type: String,
    required: [true, 'Please add email']
  },
  occupation: {
    type: String,
    required: [true, 'Please add occupation']
  },
  city: {
    type: String,
    required: [true, 'Please add city']
  },
  bio: {
    type: String,
    required: [true, 'Please add bio']
  },
 
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Profile', ProfileSchema);
