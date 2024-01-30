'use client';

import { CartSummary } from '@/components/cart-summary';
import { CartItem } from '@/components/ui/cart-item';
import { Container } from '@/components/ui/container';
import { useCart } from '@/hooks/use-cart';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useIsClient, useIsMounted } from 'usehooks-ts';

const CartPage = () => {
  const mounted = useIsMounted();
  const client = useIsClient();
  const params = useSearchParams();
  const clearCartItems = useCart(({ removeAll }) => removeAll);
  const { items, cartItemNo } = useCart(({ items }) => ({
    items,
    cartItemNo: items ? Object.keys(items).length : 0,
  }));

  useEffect(() => {
    if (params.get('success')) {
      toast.success('Payment completed', { duration: 2000 });
      clearCartItems(true);
    } else if (params.get('cancelled')) {
      toast.error('Sorry we could complete your request');
    }
  }, []);

  if (!(mounted() && client)) return null;

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cartItemNo === 0 ? (
                <p className="text-neutral-500">No items added to cart</p>
              ) : null}
              <ul>
                {Array.from(Object.values(items ?? {}), (item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
            <CartSummary />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
