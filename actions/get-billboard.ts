import { parsedEnv } from '@/lib/env';
import { typeJSONResponse } from '@/lib/utils';
import { BillBoard } from '@/types/type';

const url = `${parsedEnv.NEXT_PUBLIC_STORE_URL}/billboards`;
console.log({ url });

const getBillboard = ({ id }: { id: string }) =>
  fetch(`${url}/${id}`).then(typeJSONResponse<BillBoard>);

export { getBillboard };
