import { Link } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';
import { useUserStore } from '../store/useUserStore';
import { useThemeStore } from '../store/useThemeStore';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const { totalPrice } = useCartStore();
  const { user } = useUserStore();
  const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    <nav className="flex justify-between p-4 shadow-md bg-white dark:bg-gray-900">
      <Link to="/" className="text-xl font-bold dark:text-white">
        MiniStore
      </Link>
      <div className="flex gap-4 items-center">
        <button onClick={toggleTheme} className="p-2">
          {isDarkMode ? <Sun className='dark:text-white' size={20} /> : <Moon className='dark:text-white' size={20} />}
        </button>
        <Link to="/profile" className="mr-4 dark:text-white">
          {user ? `Hello, ${user.name}` : 'Profile'}
        </Link>
        <Link to="/cart" className="text-lg font-semibold dark:text-white">
          Cart: ₹{totalPrice.toFixed(2)}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;