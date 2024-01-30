import { Product } from '@/types/type';
import toast from 'react-hot-toast';
import { X } from 'lucide-react';
import { IconButton } from './icon-button';
import { Currency } from './currency';
import { useCart } from '@/hooks/use-cart';
import Image from 'next/image';

interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const removeCartItem = useCart(({ removeItem }) => removeItem);
  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image fill src={data.images[0].url} alt="product image" />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton
            icon={<X size={20} />}
            onclick={() => removeCartItem(data.id)}
          />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-6">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data.name}</p>
          </div>

          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data.colourName}</p>
            <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">
              {data.size}
            </p>
          </div>
          <Currency value={data.price} />
        </div>
      </div>
    </li>
  );
};

export { CartItem };
