import { getProduct } from '@/actions/get-product';
import { getProducts } from '@/actions/get-products';
import { Gallery } from '@/components/gallery';
import { ProductInfo } from '@/components/product-info';
import { ProductList } from '@/components/product-list';
import { Container } from '@/components/ui/container';

interface ProductPageProps {
  params: {
    productId: string;
  };
}

export const revalidate = 0;

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await getProduct(params.productId);

  const suggestedProducts = await getProducts({
    categoryId: product.categoryId,
    productSuggestedId: product.id,
  });

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-4">
            {/* Gallery */}
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-4">
              <ProductInfo data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related Items" data={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
