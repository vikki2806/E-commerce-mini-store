import { create } from 'zustand';

export const useCartStore = create((set) => ({
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  totalPrice: JSON.parse(localStorage.getItem('cart'))?.reduce((acc, item) => acc + item.price * item.quantity, 0) || 0,

  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product._id);
      let newCart;

      if (existingItem) {
        newCart = state.cart.map((item) =>
          item.id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        newCart = [...state.cart, { ...product, quantity: 1 }];
      }

      localStorage.setItem('cart', JSON.stringify(newCart));

      return {
        cart: newCart,
        totalPrice: newCart.reduce((acc, item) => acc + item.price * item.quantity, 0),
      };
    }),

  removeFromCart: (id) =>
    set((state) => {
      const newCart = state.cart.filter((item) => item._id !== id);
      localStorage.setItem('cart', JSON.stringify(newCart));

      return {
        cart: newCart,
        totalPrice: newCart.reduce((acc, item) => acc + item.price * item.quantity, 0),
      };
    }),

  updateQuantity: (id, quantity) =>
    set((state) => {
      const newCart = state.cart.map((item) =>
        item._id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      );
      localStorage.setItem('cart', JSON.stringify(newCart));

      return {
        cart: newCart,
        totalPrice: newCart.reduce((acc, item) => acc + item.price * item.quantity, 0),
      };
    }),

  clearCart: () =>
    set(() => {
      localStorage.removeItem('cart');
      return { cart: [], totalPrice: 0 };
    }),
}));