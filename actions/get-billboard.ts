import { parsedEnv } from '@/lib/env';
import { typeJSONResponse } from '@/lib/utils';
import { BillBoard } from '@/types/type';

const url = `${parsedEnv.NEXT_STORE_URL}/billboards`;

const getBillboard = ({ id }: { id: string }) =>
  fetch(`${url}/${id}`).then(typeJSONResponse<BillBoard>);

export { getBillboard };
