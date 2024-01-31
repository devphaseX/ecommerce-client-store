import { parsedEnv } from '@/lib/env';
import { typeJSONResponse } from '@/lib/utils';
import { Colour } from '@/types/type';

const getColours = ({ storeId }: { storeId: string }) =>
  fetch(`${parsedEnv.NEXT_PUBLIC_STORE_URL}/stores/${storeId}/colours`).then(
    typeJSONResponse<Array<Colour>>
  );

export { getColours };
