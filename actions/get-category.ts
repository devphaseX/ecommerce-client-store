import { parsedEnv } from '@/lib/env';
import { typeJSONResponse } from '@/lib/utils';
import { Category } from '@/types/type';

const url = `${parsedEnv.NEXT_PUBLIC_STORE_URL}/categories`;

const getCategory = async (id: string) => {
  const response = await fetch(`${url}/${id}`);

  return typeJSONResponse<Category>(response);
};

export { getCategory };
