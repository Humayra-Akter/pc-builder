// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri =
//   "mongodb+srv://pcbuilder:7ZOCfLY8YsOy04L3@cluster0.guksi.mongodb.net/?retryWrites=true&w=majority";

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run(req, res) {
//   try {
//     await client.connect();
//     const processorsCollection = client
//       .db("pc-builder")
//       .collection("processors");

//     if (req.method === "GET") {
//       const processors = await processorsCollection.find({}).toArray();
//       res.send({ message: "success", status: 200, data: processors });
//     }

//     if (req.method === "POST") {
//       const processors = req.body;
//       const result = await processorsCollection.insertOne(processors);
//       res.json(result);
//     }
//   } finally {
//   }
// }
// export default run;
