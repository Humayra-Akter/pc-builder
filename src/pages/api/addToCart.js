import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../utils/db";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { productId, userId } = req.body;

  if (!productId || !userId) {
    return res.status(400).json({ message: "Invalid productId or userId" });
  }

  const { db } = await connectToDatabase();

  try {
    const cartCollection = db.collection("cart");
    await cartCollection.insertOne({
      userId,
      productId: new ObjectId(productId),
      quantity: 1,
    });
    return res.status(201).json({ message: "Item added to cart" });
  } catch (error) {
    console.error("Error adding item to cart:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
