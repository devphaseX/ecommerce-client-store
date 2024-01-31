import { parsedEnv } from '@/lib/env';
import { typeJSONResponse } from '@/lib/utils';
import { Size } from '@/types/type';

const getSizes = ({ storeId }: { storeId: string }) =>
  fetch(`${parsedEnv.NEXT_PUBLIC_STORE_URL}/stores/${storeId}/sizes`).then(
    typeJSONResponse<Array<Size>>
  );

export { getSizes };
