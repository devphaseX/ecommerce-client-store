import { parsedEnv } from '@/lib/env';
import { typeJSONResponse } from '@/lib/utils';
import { Colour } from '@/types/type';

const getColours = () =>
  fetch(`${parsedEnv.NEXT_PUBLIC_STORE_URL}/colours`).then(
    typeJSONResponse<Array<Colour>>
  );

export { getColours };
