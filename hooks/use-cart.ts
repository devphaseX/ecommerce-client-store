import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Product } from '@/types/type';
import toast from 'react-hot-toast';

interface CartStore {
  items: { [productId: string]: Product } | null;
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: (silence?: boolean) => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: null,
      addItem: (product) => {
        const products = { ...get().items };

        if (products[product.id]) {
          return toast('Item already in cart');
        }

        products[product.id] = product;

        set({ items: products });
        toast.success('Item added to cart.');
      },
      removeItem(id) {
        const products = { ...get().items };
        if (!products) return;

        if (!products[id]) {
          return toast.success('Item not in cart.');
        }

        delete products[id];
        set({ items: products });
        toast.success('Item removed to cart.');
      },

      removeAll(silence = false) {
        set({ items: null });
        if (!silence) toast.success('items cleared from cart');
      },
    }),
    { name: 'cart-storage', storage: createJSONStorage(() => localStorage) }
  )
);

export { useCart, type CartStore };
