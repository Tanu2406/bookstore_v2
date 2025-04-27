import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Checkout = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBook = async () => {
      const res = await axios.get(`https://bookstore-v2-backend-web-app.onrender.com/book/${id}`);
      setBook(res.data);
    };
    fetchBook();
  }, [id]);

  const handleConfirmPurchase = async () => {
    setLoading(true);
    try {
      const cleanPrice = Number(book.price.replace(/[^0-9.-]+/g, "")); // Remove $ and convert to number
  
      const response = await axios.post("https://bookstore-v2-backend-web-app.onrender.com/order", {
        bookId: book._id,
        bookTitle: book.name,
        buyerName: "Guest",
        price: cleanPrice,   // Use cleaned price here!
      });
  
      console.log("Order created successfully:", response.data);
      alert("Purchase successful!");
  
      if (response.data && response.data._id) {
        navigate(`/order-confirmation/${response.data._id}`);
      } else {
        alert("Order creation failed: No order ID returned.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to purchase! Please try again.");
    } finally {
      setLoading(false);
    }
  };
  

  if (!book) {
    return <div className="p-8 text-center">Loading book details...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6" key={book._id}>
        <img src={book.img} alt={book.name} className="h-70 w-full object-cover mb-4" />
        <h2 className="text-2xl font-semibold">{book.name}</h2>
        <p className="text-gray-600 my-2">{book.desc}</p>
        <p className="text-xl font-bold my-4">{book.price}</p>
        <button
          className="border border-pink-800 !bg-pink-400 hover:bg-pink-300 text-xs px-2 py-1 text-white rounded-md"
          onClick={handleConfirmPurchase}
          disabled={loading}
        >
          {loading ? "Processing..." : "Confirm Purchase"}
        </button>
      </div>
    </div>
  );
};

export default Checkout;



