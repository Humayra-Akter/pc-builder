const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://pcbuilder:7ZOCfLY8YsOy04L3@cluster0.guksi.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    await client.connect();
    const bannersCollection = client.db("pc-builder").collection("banners");

    if (req.method === "GET") {
      const banners = await bannersCollection.find({}).toArray();
      res.send({ message: "success", status: 200, data: banners });
    }
  } finally {
  }
}
export default run;
