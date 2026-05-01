import { create } from 'zustand';
import api from '../utils/api';

export const useAuthStore = create((set, get) => ({
  user: null,
  token: localStorage.getItem('tf_token'),
  loading: true,

  init: async () => {
    const token = localStorage.getItem('tf_token');
    if (!token) { set({ loading: false }); return; }
    try {
      const { data } = await api.get('/auth/me');
      set({ user: data.user, loading: false });
    } catch {
      localStorage.removeItem('tf_token');
      set({ user: null, token: null, loading: false });
    }
  },

  login: async (email, password) => {
    const { data } = await api.post('/auth/login', { email, password });
    localStorage.setItem('tf_token', data.token);
    set({ user: data.user, token: data.token });
    return data.user;
  },

  signup: async (name, email, password, role) => {
    const { data } = await api.post('/auth/signup', { name, email, password, role });
    localStorage.setItem('tf_token', data.token);
    set({ user: data.user, token: data.token });
    return data.user;
  },

  logout: () => {
    localStorage.removeItem('tf_token');
    set({ user: null, token: null });
  },

  updateProfile: async (name, email) => {
    const { data } = await api.put('/auth/me', { name, email });
    set({ user: data.user });
    return data.user;
  },

  isAdmin: () => get().user?.role === 'admin',
}));
