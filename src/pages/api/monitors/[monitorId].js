import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";

const uri =
  "mongodb+srv://pcbuilder:7ZOCfLY8YsOy04L3@cluster0.guksi.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export default async function handler(req, res) {
  try {
    await client.connect();
    const monitorsCollection = client.db("pc-builder").collection("monitors");

    if (req.method === "GET") {
      const monitorId = req.query.monitorId;
      console.log("Received monitorId:", monitorId);

      const monitor = await monitorsCollection.findOne({ id: monitorId });
      console.log("Fetched monitor:", monitor);

      if (monitor) {
        res.status(200).json({ message: "success", data: monitor });
      } else {
        res.status(404).json({ message: "Monitor not found" });
      }
    }
  } finally {
  }
}
