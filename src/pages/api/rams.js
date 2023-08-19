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
    const ramsCollection = client.db("pc-builder").collection("rams");

    if (req.method === "GET") {
      const rams = await ramsCollection.find({}).toArray();
      res.send({ message: "success", status: 200, data: rams });
    }
  } finally {
  }
}
export default run;
