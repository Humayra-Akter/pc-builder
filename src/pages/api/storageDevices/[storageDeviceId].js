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
    const storageDevicesCollection = client
      .db("pc-builder")
      .collection("storageDevices");

    if (req.method === "GET") {
      const storageDeviceId = req.query.storageDeviceId;
      console.log("Received storageDeviceId:", storageDeviceId);

      const storageDevice = await storageDevicesCollection.findOne({
        id: storageDeviceId,
      });
      console.log("Fetched storageDevice:", storageDevice);

      if (storageDevice) {
        res.status(200).json({ message: "success", data: storageDevice });
      } else {
        res.status(404).json({ message: "storageDevice not found" });
      }
    }
  } finally {
  }
}
