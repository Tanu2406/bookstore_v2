import Order from '../model/order.model.js';

export const createOrder = async (req, res) => {
  const { bookId, bookTitle, buyerName, price, bookImg } = req.body;
  console.log(req.body);

  // Check if all required fields are present
  if (!bookId || !bookTitle || price == null) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const newOrder = new Order({
      bookId,
      bookTitle,
      buyerName: buyerName || "Guest",
      price: Number(price),
      bookImg, // Add the image URL field
    });

    const savedOrder = await newOrder.save();
    console.log("Order saved successfully:", savedOrder); // Debugging line
    res.status(201).json(savedOrder);
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).json({ message: error.message });
  }
};




// Get order details by orderId
export const getOrderDetails = async (req, res) => {
  const { id } = req.params;

  try {
    const order = await Order.findById(id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
