import { TypeOf, object, string } from 'zod';

const StoreIdParamsSchema = object({ storeId: string().uuid() });

type StoreIdParams = TypeOf<typeof StoreIdParamsSchema>;

const CategoryStoreIdParamsSchema = StoreIdParamsSchema.and(
  object({ categoryId: string().uuid() })
);

type CategoryStoreIdParams = TypeOf<typeof CategoryStoreIdParamsSchema>;

const ProductStoreIdParamsSchema = StoreIdParamsSchema.and(
  object({ productId: string().uuid() })
);

type ProductStoreIdParams = TypeOf<typeof ProductStoreIdParamsSchema>;

export {
  StoreIdParamsSchema,
  CategoryStoreIdParamsSchema,
  ProductStoreIdParamsSchema,
};
export type { StoreIdParams, CategoryStoreIdParams, ProductStoreIdParams };
