import mongoose from "mongoose";
import "@/models/Post";
import "@/models/Profile";
import "@/models/User";

const connection = {}

async function dbConnect() {
  if (connection.isConnected) return

  const db = await mongoose.connect(process.env.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })

  connection.isConnected = db.connections[0].readyState
}

export default dbConnect
