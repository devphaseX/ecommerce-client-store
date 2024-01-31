import { parsedEnv } from '@/lib/env';
import { typeJSONResponse } from '@/lib/utils';
import { Category } from '@/types/type';

const getCategories = ({ storeId }: { storeId: string }) =>
  fetch(`${parsedEnv.NEXT_PUBLIC_STORE_URL}/stores/${storeId}/categories`).then(
    typeJSONResponse<Array<Category>>
  );

export { getCategories };
