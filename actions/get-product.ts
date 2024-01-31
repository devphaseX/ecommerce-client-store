import { parsedEnv } from '@/lib/env';
import { typeJSONResponse } from '@/lib/utils';
import { Product } from '@/types/type';

const getProduct = ({ id, storeId }: { id: string; storeId: string }) => {
  return fetch(
    `${parsedEnv.NEXT_PUBLIC_STORE_URL}/stores/${storeId}/products/${id}`
  ).then(typeJSONResponse<Product>);
};

export { getProduct };
