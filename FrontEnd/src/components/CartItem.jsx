import { useCartStore } from '../store/useCartStore';

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCartStore();

  return (
    <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
      <img src={`http://localhost:3002/${item.image}`} alt={item.name} className="w-16 h-16 object-cover" />
      <div className="flex-1 ml-4">
        <h3 className="font-semibold dark:text-white">{item.name}</h3>
        <p className="text-gray-500 dark:text-gray-300"> ₹{item.price.toFixed(2)}</p>
        <div className="flex items-center mt-2">
          <button
            onClick={() => updateQuantity(item._id, item.quantity - 1)}
            className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded"
            disabled={item.quantity === 1}
          >
            -
          </button>
          <span className="mx-2 dark:text-white">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item._id, item.quantity + 1)}
            className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded"
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={() => removeFromCart(item._id)}
        className="ml-4 text-red-500 hover:text-red-700"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;