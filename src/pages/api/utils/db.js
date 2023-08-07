import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://pcbuilder:7ZOCfLY8YsOy04L3@cluster0.guksi.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

export async function connectToDatabase() {
  if (!client.isConnected()) {
    await client.connect();
  }
  return { db: client.db("pc-builder") };
}
