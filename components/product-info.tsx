'use client';

import { Product } from '@/types/type';
import { Currency } from './ui/currency';
import { Button } from './ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';

interface ProductInfoProps {
  data: Product;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ data }) => {
  const addItemToCart = useCart(({ addItem }) => addItem);
  const { name, price, colour, size } = data;
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{size}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Colour:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: colour }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button
          className="flex items-center gap-x-2"
          onClick={() => addItemToCart(data)}
        >
          Add to cart <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};
