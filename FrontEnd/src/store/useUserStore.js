
import { create } from 'zustand';

export const useUserStore = create((set) => ({
  name: '',
  email: '',
  phone: '',
  setUser: (user) => set(() => ({ ...user })),
  resetUser: () => set(() => ({ name: '', email: '', phone: '' })),
}));
