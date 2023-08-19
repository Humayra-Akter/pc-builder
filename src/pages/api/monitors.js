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
    const monitorsCollection = client.db("pc-builder").collection("monitors");

    // if (req.method === "GET") {
    //   const monitors = await monitorsCollection.find({}).toArray();
    //   res.send({ message: "success", status: 200, data: monitors });
    // }

    if (req.method === "GET") {
      if (req.query.monitorId) {
        const monitorId = req.query.monitorId;
        const monitor = await monitorsCollection.findOne({
          _id: ObjectId(monitorId),
        });

        if (monitor) {
          res.send({ message: "success", status: 200, data: monitor });
        } else {
          res.status(404).send({ message: "Monitor not found", status: 404 });
        }
      } else {
        const monitors = await monitorsCollection.find({}).toArray();
        res.send({ message: "success", status: 200, data: monitors });
      }
    }
  } finally {
  }
}
export default run;
