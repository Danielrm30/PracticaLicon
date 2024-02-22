import { create } from 'zustand';

interface Item {
  id: number;
  title: string;
  completed: boolean;
}

interface StoreState {
  items: Item[];
  setItems: (items: Item[]) => void;
}

export const useStore = create<StoreState>((set) => ({
  items: [],
  setItems: (items) => set({ items }),
}));
