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

// export default async function addToCart(req, res) {
//   if (req.method !== "POST") {
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

//     const existingCartItem = await cartCollection.findOne({ productId });

//     if (existingCartItem) {
//       await cartCollection.updateOne({ productId }, { $inc: { quantity: 1 } });
//     } else {
//       await cartCollection.insertOne({
//         productId,
//         quantity: 1,
//       });
//     }

//     res.status(201).json({ message: "Item added to cart" });
//   } catch (error) {
//     console.error("Error adding item to cart:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// }
