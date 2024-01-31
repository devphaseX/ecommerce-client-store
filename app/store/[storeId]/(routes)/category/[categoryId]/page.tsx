import { getCategory } from '@/actions/get-category';
import { getColours } from '@/actions/get-colours';
import { ProductQuery, getProducts } from '@/actions/get-products';
import { getSizes } from '@/actions/get-sizes';
import { BillboardBanner } from '@/components/billboard';
import { Container } from '@/components/ui/container';
import { Filter } from '../../product/[productId]/components/filter';
import { NoResult } from '@/components/ui/no-result';
import { ProductCard } from '@/components/ui/product-card';
import { MobileFilters } from '@/components/mobile-filter';
import {
  CategoryStoreIdParams,
  CategoryStoreIdParamsSchema,
} from '@/lib/validations/params';

export const revalidate = 0;
interface CategoryPageProps {
  params: CategoryStoreIdParams;
  searchParams: Pick<ProductQuery, 'colourId' | 'sizeId'>;
}

const CategoryPage = async ({ params, searchParams }: CategoryPageProps) => {
  params = CategoryStoreIdParamsSchema.parse(params);
  const { storeId } = params;
  const [products, sizes, colours, category] = await Promise.all([
    getProducts(storeId, {
      categoryId: params.categoryId,
      ...searchParams,
    }),
    getSizes({ storeId }),
    getColours({ storeId }),
    getCategory({
      id: params.categoryId,
      storeId,
    }),
  ]);

  return (
    <div className="bg-white">
      <Container>
        <BillboardBanner data={category.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colours={colours} />
            <div className="hidden lg:block">
              <Filter valueType="sizeId" name="Sizes" data={sizes} />
              <Filter valueType="colourId" name="Colours" data={colours} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResult />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
