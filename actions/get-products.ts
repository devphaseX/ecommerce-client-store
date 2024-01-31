import { parsedEnv } from '@/lib/env';
import { typeJSONResponse } from '@/lib/utils';
import { Product } from '@/types/type';

export interface ProductQuery {
  categoryId?: string;
  colourId?: string;
  sizeId?: string;
  isFeatured?: boolean;
  productSuggestedId?: string;
}

const getProducts = (storeId: string, query: ProductQuery) => {
  const urlObj = new URL(
    `${parsedEnv.NEXT_PUBLIC_STORE_URL}/stores/${storeId}/products`
  );
  const searchParams = urlObj.searchParams;

  Object.entries(query).forEach(([key, value]) => {
    searchParams.set(key, value);
  });

  return fetch(urlObj).then(typeJSONResponse<Array<Product>>);
};

export { getProducts };
