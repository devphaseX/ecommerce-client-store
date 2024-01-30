'use client';

import { useCart } from '@/hooks/use-cart';
import { Button } from './ui/button';
import { Currency } from './ui/currency';
import { useEffect, useMemo } from 'react';
import { typeJSONResponse } from '@/lib/utils';
import { useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';
import axios from 'axios';

interface CartSummary {}

const CartSummary = () => {
  const params = useSearchParams();
  const cartItems = useCart(({ items }) => items);
  const clearCartItems = useCart(({ removeAll }) => removeAll);
  if (!cartItems) return null;
  const totalPrice = useMemo(
    () =>
      Object.values(cartItems).reduce((total, item) => total + +item.price, 0),
    [cartItems]
  );

  const onCheckout = async () => {
    const response = await axios.post<{ url: string }>(
      `${process.env.NEXT_PUBLIC_STORE_URL}/checkout`,
      {
        productIds: Object.getOwnPropertyNames(cartItems),
      },
      { headers: { 'Content-Type': 'application/json' } }
    );

    if (response.status === 200) {
      window.location.href = response.data.url;
    } else {
      //error occured
    }
  };

  return (
    <div
      className="
    mt-16
    rounded-lg
    bg-gray-50
    px-4
    py-6
    sm:p-6
    lg:col-span-5
    lg:mt-0
    lg:p-8
  "
    >
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button className="w-full mt-6" onClick={onCheckout}>
        Checkout
      </Button>
    </div>
  );
};

export { CartSummary };
