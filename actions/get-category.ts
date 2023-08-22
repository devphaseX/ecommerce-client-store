import { parsedEnv } from '@/lib/env';
import { typeJSONResponse } from '@/lib/utils';
import { Category } from '@/types/type';

const url = `${parsedEnv.NEXT_STORE_URL}/categories`;

const getCategory = async (id: string) => {
  const response = await fetch(`${url}/${id}`);

  if (response.status !== 200) {
    console.log(await response.text());
  }
  return typeJSONResponse<Category>(response);
};

export { getCategory };
