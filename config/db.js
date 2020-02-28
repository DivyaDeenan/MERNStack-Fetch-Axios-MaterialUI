const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://divya123:orange@123@divyad-cluster-r0kf3.mongodb.net/BioData?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    //process.exit(1);
  }
};

module.exports = connectDB;
