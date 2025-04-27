import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { X } from "lucide-react";


const OrderConfirmation = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);

  // Fetch the order details using orderId
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await axios.get(`https://bookstore-v2-backend-web-app.onrender.com/order/${orderId}`);
        setOrder(res.data);
      } catch (error) {
        console.error("Error fetching order", error);
      }
    };
    fetchOrder();
  }, [orderId]);

  // Animation for success message
  

  const handleClose = () => {
    navigate("/"); // Redirect to home page when closing
  };

  // If the order is still loading, show a loading state
  if (!order) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 p-4 relative">
      {/* Close (X) Button */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
      >
        <X size={32} />
      </button>

      <h1 className="text-3xl font-bold mb-6">Order Confirmation</h1>

      <animated.div style={props} className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-center">
        <h2 className="text-xl font-semibold mb-4">Order #{order._id}</h2>

        {/* Book Image (If available) */}
       

        <p><strong>Book Title:</strong> {order.bookTitle}</p>
        <p><strong>Price:</strong> ₹{order.price}</p>
        <p><strong>Buyer Name:</strong> {order.buyerName}</p>
        <p><strong>Status:</strong> {order.status}</p>

      
        {/* Thank you message */}
        <p className="mt-4 text-green-600 font-semibold">Thank you for your purchase!</p>
      </animated.div>
    </div>
  );
};

export default OrderConfirmation;
