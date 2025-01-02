import { CategoryWithSubProductsDto, ProductCategory, ProductListItem } from "../../../shared/interfaces";

export interface ProductState {
  products: Product[];
  error: string;
  loading: boolean;
  productsPredictedTexts: string[];
  categoryWithSubProductsDto: CategoryWithSubProductsDto[];
  categoriesDtos: ProductCategory[];
  recommendedProducts: ProductListItem[];
  hotDealProducts: ProductListItem[];
}

export interface Product {
}
