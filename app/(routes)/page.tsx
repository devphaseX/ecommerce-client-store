import { getBillboard } from '@/actions/get-billboard';
import { ProductQuery, getProducts } from '@/actions/get-products';
import { BillboardBanner } from '@/components/billboard';
import { ProductList } from '@/components/product-list';
import { Container } from '@/components/ui/container';

export const revalidate = 0;
interface HomePageContext {
  searchParams: ProductQuery;
}
const HomePage = async ({ searchParams }: HomePageContext) => {
  const billboard = await getBillboard({
    id: '87c382ca-a665-46c2-8567-918b177611db',
  });

  const products = await getProducts({ ...searchParams, isFeatured: true });
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <BillboardBanner data={billboard} />
      </div>
      <div className="flex flex-col gap-y-8 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" data={products} />
      </div>
    </Container>
  );
};

export default HomePage;
