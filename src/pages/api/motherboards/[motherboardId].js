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
    const motherboardsCollection = client
      .db("pc-builder")
      .collection("motherboards");

    if (req.method === "GET") {
      const motherboardId = req.query.motherboardId;
      console.log("Received motherboardId:", motherboardId);

      const motherboard = await motherboardsCollection.findOne({
        id: motherboardId,
      });
      console.log("Fetched motherboard:", motherboard);

      if (motherboard) {
        res.status(200).json({ message: "success", data: motherboard });
      } else {
        res.status(404).json({ message: "motherboard not found" });
      }
    }
  } finally {
  }
}
