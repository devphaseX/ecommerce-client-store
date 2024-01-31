'use client';

import { Product } from '@/types/type';
import Image from 'next/image';
import { IconButton } from './icon-button';
import { Expand, ShoppingCart } from 'lucide-react';
import { Currency } from './currency';
import { useParams, useRouter } from 'next/navigation';
import { usePreviewModal } from '@/hooks/use-preview-modal';
import { MouseEventHandler } from 'react';
import { useCart } from '@/hooks/use-cart';

interface ProductCardProps {
  item: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  const router = useRouter();
  const params = useParams() as { storeId: string };
  const openPreviewModal = usePreviewModal(({ onOpen }) => onOpen);
  const addToCart = useCart(({ addItem }) => addItem);
  const handleClick = () => {
    router.push(`/store/${params.storeId}/product/${item.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    openPreviewModal(item);
  };

  const addItemToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    addToCart(item);
  };
  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={item.images[0].url}
          alt="image"
          fill
          className="aspect-sqaure object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onclick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onclick={addItemToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{item.name}</p>
        <p className="text-sm text-gray-500">{item.category}</p>
      </div>
      {/* price */}
      <div className="flex items-center justify-between">
        <Currency value={item.price} />
      </div>
    </div>
  );
};
