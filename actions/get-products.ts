import { parsedEnv } from '@/lib/env';
import { typeJSONResponse } from '@/lib/utils';
import { Product } from '@/types/type';

const url = `${parsedEnv.NEXT_PUBLIC_STORE_URL}/products`;

export interface ProductQuery {
  categoryId?: string;
  colourId?: string;
  sizeId?: string;
  isFeatured?: boolean;
  productSuggestedId?: string;
}

const getProducts = (query: ProductQuery) => {
  const urlObj = new URL(url);
  const searchParams = urlObj.searchParams;

  Object.entries(query).forEach(([key, value]) => {
    searchParams.set(key, value);
  });

  return fetch(urlObj).then(typeJSONResponse<Array<Product>>);
};

export { getProducts };
