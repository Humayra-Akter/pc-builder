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
    const processorsCollection = client
      .db("pc-builder")
      .collection("processors");

    if (req.method === "GET") {
      const processorId = req.query.processorId;
      console.log("Received processorId:", processorId);

      const processor = await processorsCollection.findOne({ id: processorId });
      console.log("Fetched processor:", processor);

      if (processor) {
        res.status(200).json({ message: "success", data: processor });
      } else {
        res.status(404).json({ message: "processor not found" });
      }
    }
  } finally {
  }
}
