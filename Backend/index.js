import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import path from "path";
import { fileURLToPath } from "url";

import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';
import orderRoute from './route/order.route.js';
import protectedRoute from "./route/protected.route.js";

const app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use(cors({
  origin: ["https://bookstore-v2-fronted-web-app.onrender.com"],
  methods: ["GET", "POST"],  
  allowedHeaders: ["Content-Type", "Authorization"],  
  credentials: true
}));
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

//Connect to MongoDB
try{
mongoose.connect(URI);
console.log("Connect to mongoDB")
}catch (error){
    console.log("Error",error)
}

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

//defining route
app.use("/book",bookRoute);
app.use("/user",userRoute);
app.use("/order", orderRoute);
app.use("/protected", protectedRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})