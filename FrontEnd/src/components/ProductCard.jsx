import { useCartStore } from '../store/useCartStore';

const ProductCard = ({ product }) => {
  const { addToCart } = useCartStore();

  return (
    <div className="border rounded-lg shadow-md p-4 bg-white dark:bg-gray-800">
      <img src={`http://localhost:3002/${product.image}`} alt={product.name} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-lg font-bold mt-2 dark:text-white">{product.name}</h2>
      <p className="text-gray-600 dark:text-gray-300">₹{product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;