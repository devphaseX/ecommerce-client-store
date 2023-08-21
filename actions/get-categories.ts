import { parsedEnv } from '@/lib/env';
import { typeJSONResponse } from '@/lib/utils';
import { Category } from '@/types/type';

const getCategories = () =>
  fetch(`${parsedEnv.NEXT_STORE_URL}/categories`).then(
    typeJSONResponse<Array<Category>>
  );

export { getCategories };
