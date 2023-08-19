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

// export default async function removeFromCart(req, res) {
//   if (req.method !== "DELETE") {
//     return res.status(405).json({ message: "Method Not Allowed" });
//   }

//   const { productId } = req.body;

//   if (!productId) {
//     return res
//       .status(400)
//       .json({ message: "Invalid productId in request body" });
//   }

//   const { db } = await connectToDatabase();

//   try {
//     const cartCollection = db.collection("cart");

//     await cartCollection.deleteOne({
//       productId,
//     });

//     res.status(200).json({ message: "Item removed from cart" });
//   } catch (error) {
//     console.error("Error removing item from cart:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// }
