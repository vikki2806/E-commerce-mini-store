import { useCartStore } from "../store/useCartStore";
import CartItem from "../components/CartItem";
import { useStore } from "../store/StoreContext";
import { useState } from "react";

const Cart = () => {
  const { cart, totalPrice, clearCart } = useCartStore();
  const { user, setUser } = useStore();
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("lastOrder", JSON.stringify(cart));
    alert("Checkout Successful!");
    localStorage.removeItem("cart");
    window.location.reload();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <CartItem item={item} />
        ))}
      </div>

      <h2 className="text-xl font-semibold mt-4">
        Total: ₹{totalPrice.toFixed(2)}
      </h2>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input
          required
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          required
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          required
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-green-500 text-white p-2 rounded w-full"
        >
          Checkout
        </button>
      </form>
    </div>
  );
};

export default Cart;
