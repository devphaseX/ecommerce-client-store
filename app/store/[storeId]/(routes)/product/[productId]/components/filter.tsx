'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Colour, Size } from '@/types/type';
import { useRouter, useSearchParams } from 'next/navigation';

type FilterType = 'sizeId' | 'colourId';

type FilterProps = {
  valueType: FilterType;
  name: string;
  data: Array<Size> | Array<Colour>;
};

const Filter: React.FC<FilterProps> = (props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedValue = searchParams.get(props.valueType);

  const onClick = (id: string) => {
    const nextUrl = new URL(window.location.href);
    const nextSearchParams = nextUrl.searchParams;

    if (nextSearchParams.get(props.valueType) === id) {
      nextSearchParams.delete(props.valueType);
    } else {
      nextSearchParams.set(props.valueType, id);
    }

    router.push(nextUrl.toString());
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{props.name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {props.data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              className={cn(
                'rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300',
                selectedValue === filter.id ? 'bg-black text-white' : null
              )}
              onClick={() => onClick(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Filter };
