import { getBillboards } from '@/actions/get-billboard';
import { ProductQuery, getProducts } from '@/actions/get-products';
import { BillboardBanner } from '@/components/billboard';
import { ProductList } from '@/components/product-list';
import { Container } from '@/components/ui/container';
import { StoreIdParams, StoreIdParamsSchema } from '@/lib/validations/params';

export const revalidate = 0;
interface HomePageContext {
  searchParams: ProductQuery;
  params: StoreIdParams;
}
const HomePage = async ({ searchParams, params }: HomePageContext) => {
  params = StoreIdParamsSchema.parse(params);
  const { storeId } = params;
  const billboards = await getBillboards({
    storeId,
    params: { orderBy: 'desc' },
  });

  const lastestBillboard = billboards?.[0];

  const products = await getProducts(storeId, {
    ...searchParams,
    isFeatured: true,
  });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        {lastestBillboard && <BillboardBanner data={lastestBillboard} />}
      </div>
      <div className="flex flex-col gap-y-8 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" data={products} />
      </div>
    </Container>
  );
};

export default HomePage;
