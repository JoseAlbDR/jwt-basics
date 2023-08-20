import mongoose from "mongoose";
import "dotenv/config";
const dbConnect = async () => {
  const connectionString = process.env.DATABASE_URL;
  return mongoose.connect(connectionString);
};

export default dbConnect;
