const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    //mongodb connection string
    const con = await mongoose.connect("mongodb+srv://sai:sai@cluster0.awbvee2.mongodb.net/ome?retryWrites=true&w=majority&appName=Cluster0"); 
    console.log(`MongoDB connected: ${con.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
module.exports = connectDB;
