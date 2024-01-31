import { parsedEnv } from '@/lib/env';
import { typeJSONResponse } from '@/lib/utils';
import { BillBoard } from '@/types/type';

const getBillboard = ({ id, storeId }: { id: string; storeId: string }) =>
  fetch(
    `${parsedEnv.NEXT_PUBLIC_STORE_URL}/store/${storeId}/billboards/${id}`
  ).then(typeJSONResponse<BillBoard>);

const getBillboards = ({
  storeId,
}: {
  storeId: string;
  params?: Record<string, string>;
}) =>
  fetch(`${parsedEnv.NEXT_PUBLIC_STORE_URL}/stores/${storeId}/billboards`).then(
    typeJSONResponse<Array<BillBoard>>
  );

export { getBillboard, getBillboards };
