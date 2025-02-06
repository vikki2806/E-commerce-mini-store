import React, { useEffect, useState } from "react";
import { useStore } from "../store/StoreContext";

const Profile = () => {
  const { user, setUser } = useStore();
  const [formData, setFormData] = useState(user);
  const [lastOrder, setLastOrder] = useState(null);
  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("lastOrder")) || [];
    if (savedOrders.length > 0) {
      setLastOrder(savedOrders);
    }
  }, []);

  useEffect(() => {
    setFormData(user);
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formData);
    alert("Profile updated!");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
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
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Save
        </button>
      </form>
      {console.log("jabba", lastOrder)}
      {lastOrder ? (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Last Order</h2>
          <div className="mt-4">
            <ul>
              {lastOrder.map((item, index) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border p-4 rounded mb-2"
                >
                  <img
                    src={`http://localhost:3002/${item.image}`}
                    alt={item.name}
                    className="w-16 h-16 object-cover"
                  />
                  <div className="flex-1 ml-4">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-gray-700">Price: ₹{item.price}</p>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p className="mt-4">No orders yet.</p>
      )}
    </div>
  );
};

export default Profile;
