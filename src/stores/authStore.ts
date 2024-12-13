import create from 'zustand';
import { persist } from 'zustand/middleware';
import * as api from '../api';

interface User {
  id: number;
  email: string;
  name: string;
  email_notifications: boolean;
  dark_mode: boolean;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      login: async (email: string, password: string) => {
        const data = await api.login(email, password);
        const user = await api.getCurrentUser(data.access_token);
        set({
          user,
          token: data.access_token,
          isAuthenticated: true,
        });
      },
      register: async (email: string, password: string, name: string) => {
        await api.register(email, password, name);
        await get().login(email, password);
      },
      logout: () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        });
      },
      updateProfile: async (data) => {
        const token = get().token;
        if (!token) throw new Error('No token found');
        
        const updatedUser = await api.updateProfile(token, data);
        set({ user: updatedUser });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);