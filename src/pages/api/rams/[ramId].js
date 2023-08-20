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
    const ramsCollection = client
      .db("pc-builder")
      .collection("rams");

    if (req.method === "GET") {
      const ramId = req.query.ramId;
      console.log("Received ramId:", ramId);

      const ram = await ramsCollection.findOne({ id: ramId });
      console.log("Fetched ram:", ram);

      if (ram) {
        res.status(200).json({ message: "success", data: ram });
      } else {
        res.status(404).json({ message: "ram not found" });
      }
    }
  } finally {
  }
}
