import { useThemeStore } from '../store/useThemeStore';
import { Sun, Moon } from 'lucide-react';

const DarkModeToggle = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    <button onClick={toggleTheme} className="p-2">
      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default DarkModeToggle;