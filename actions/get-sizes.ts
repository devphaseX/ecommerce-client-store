import { parsedEnv } from '@/lib/env';
import { typeJSONResponse } from '@/lib/utils';
import { Size } from '@/types/type';

const getSizes = () =>
  fetch(`${parsedEnv.NEXT_STORE_URL}/sizes`).then(
    typeJSONResponse<Array<Size>>
  );

export { getSizes };
