import { parsedEnv } from '@/lib/env';
import { typeJSONResponse } from '@/lib/utils';
import { Category } from '@/types/type';

const getCategory = async ({
  id,
  storeId,
}: {
  id: string;
  storeId: string;
}) => {
  const response = await fetch(
    `${parsedEnv.NEXT_PUBLIC_STORE_URL}/stores/${storeId}/${id}`
  );

  return typeJSONResponse<Category>(response);
};

export { getCategory };
