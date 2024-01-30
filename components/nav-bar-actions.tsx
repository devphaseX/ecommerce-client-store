'use client';
import { ShoppingBag } from 'lucide-react';
import { Button } from './ui/button';
import { useIsClient, useIsMounted } from 'usehooks-ts';
import { useCart } from '@/hooks/use-cart';
import { useRouter } from 'next/navigation';

export const NavbarActions = () => {
  const mounted = useIsMounted();
  const client = useIsClient();
  const noOfCartItems = useCart(({ items }) =>
    items ? Object.keys(items).length : 0
  );

  const router = useRouter();

  if (!mounted()) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        className="flex items-center rounded-full bg-black px-4 py-2"
        onClick={() => router.push('/carts')}
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {noOfCartItems}
        </span>
      </Button>
    </div>
  );
};
