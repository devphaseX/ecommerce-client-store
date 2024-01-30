import { parsedEnv } from '@/lib/env';
import { typeJSONResponse } from '@/lib/utils';
import { Product } from '@/types/type';

const url = `${parsedEnv.NEXT_PUBLIC_STORE_URL}/products`;

const getProduct = (id: string) => {
  return fetch(`${url}/${id}`).then(typeJSONResponse<Product>);
};

export { getProduct };
