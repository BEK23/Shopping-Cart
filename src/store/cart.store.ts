import { create } from "zustand";

import DB from "@/indexDB.json";
import { ICartItem } from "@/types/cart.interface";

type CartStateType = {
  cartItems: ICartItem[];
  shipping: number;
  subtotal: number;
};

type CartActionType = {
  increase: (id: number) => void;
  decrease: (id: number) => void;
  deleteItem: (id: number) => void;
  setSubtotal: (value: number) => void;
  clear: () => void;
};

const initialState: CartStateType = {
  cartItems: DB.cartItems,
  shipping: DB.shipping,
  subtotal: 0,
};

export const useCartStore = create<CartStateType & CartActionType>()((set) => ({
  ...initialState,
  increase: (id) => {
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item,
      ),
    }));
  },
  decrease: (id) => {
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id ? { ...item, count: Math.max(item.count - 1, 0) } : item,
      ),
    }));
  },
  deleteItem: (id) => {
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    }));
  },
  setSubtotal: (subtotal) => {
    set({ subtotal });
  },
  clear: () => {
    set({ cartItems: [] });
  },
}));
