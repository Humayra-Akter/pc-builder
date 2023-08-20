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
    const powerSupplyUnitsCollection = client
      .db("pc-builder")
      .collection("powerSupplyUnits");

    if (req.method === "GET") {
      const powerSupplyUnitId = req.query.powerSupplyUnitId;
      console.log("Received powerSupplyUnitId:", powerSupplyUnitId);

      const powerSupplyUnit = await powerSupplyUnitsCollection.findOne({
        id: powerSupplyUnitId,
      });
      console.log("Fetched powerSupplyUnit:", powerSupplyUnit);

      if (powerSupplyUnit) {
        res.status(200).json({ message: "success", data: powerSupplyUnit });
      } else {
        res.status(404).json({ message: "powerSupplyUnit not found" });
      }
    }
  } finally {
  }
}
