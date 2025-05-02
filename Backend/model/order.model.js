import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  bookId: { type: mongoose.Schema.Types.ObjectId, required: true },
  bookTitle: { type: String, required: true },
  buyerName: { type: String, required: true, default: "Guest" },
  price: { type: Number, required: true },
  status: { type: String, default: 'Pending' }, // Order status: Pending, Shipped, Delivered
  bookImg: { type: String }, 
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);

export default Order;

