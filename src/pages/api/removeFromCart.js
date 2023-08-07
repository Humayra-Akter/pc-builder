import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../utils/db";

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { productId, userId } = req.body;

  if (!productId || !userId) {
    return res.status(400).json({ message: "Invalid productId or userId" });
  }

  const { db } = await connectToDatabase();

  try {
    const cartCollection = db.collection("cart");
    await cartCollection.deleteOne({
      userId,
      productId: new ObjectId(productId),
    });
    return res.status(200).json({ message: "Item removed from cart" });
  } catch (error) {
    console.error("Error removing item from cart:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
