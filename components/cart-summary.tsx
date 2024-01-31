'use client';

import { useCart } from '@/hooks/use-cart';
import { Button } from './ui/button';
import { Currency } from './ui/currency';
import { useEffect, useMemo, useState } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';
import axios from 'axios';
import { Loader2 } from 'lucide-react';

interface CartSummary {}

const CartSummary = () => {
  const [checkingOut, setCheckingOut] = useState(false);
  const params = useParams() as { storeId: string };
  const query = useSearchParams();
  const router = useRouter();
  const cartItems = useCart(({ items }) => items);
  const clearCartItems = useCart(({ removeAll }) => removeAll);
  if (!cartItems) return null;
  const totalPrice = useMemo(
    () =>
      Object.values(cartItems).reduce((total, item) => total + +item.price, 0),
    [cartItems]
  );

  const onCheckout = async () => {
    setCheckingOut(true);

    try {
      const response = await axios.post<{ url: string }>(
        `${process.env.NEXT_PUBLIC_STORE_URL}/store/${params.storeId}/checkout`,
        {
          productIds: Object.getOwnPropertyNames(cartItems),
          callbackUrls: {
            confirmationUrl: `${
              process.env['NEXT_PUBLIC_URL'] as string
            }/carts?success=1`,
            cancellationUrl: `${
              process.env['NEXT_PUBLIC_URL'] as string
            }/carts?cancelled=1`,
          },
        },
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (response.status === 200) {
        window.location.href = response.data.url;
      } else {
        //error occured
      }
    } catch (e) {
    } finally {
      setCheckingOut(false);
    }
  };

  useEffect(() => {
    const succeed = +(query.get('success') ?? 0) === 1;
    const cancelled = +(query.get('cancelled') ?? 0) === 1;

    if (succeed) {
      toast.success('User order placed successfully', { duration: 2000 });
    } else if (cancelled) {
      toast.error('User order cancelled', { duration: 2000 });
    }

    if (succeed || cancelled) {
      setTimeout(() => {
        router.push(`/store/${params.storeId}`);
      }, 2500);
    }
  }, []);

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
      <Button
        className="w-full mt-6"
        onClick={onCheckout}
        disabled={checkingOut}
      >
        Checkout
        {checkingOut && <Loader2 className="w-4 h-4 ml-2 animate-spin" />}
      </Button>
    </div>
  );
};

export { CartSummary };
