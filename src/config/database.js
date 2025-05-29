const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://anshuman:yizw7j11XP73WbfF@cluster0.zdpsuwz.mongodb.net/project1"
  );
};

module.exports = connectDB;
