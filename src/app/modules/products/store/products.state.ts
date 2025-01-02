import { CategoryWithSubProductsDto, ProductCategory, ProductCategoryDto, ProductListItem } from "../../../shared/interfaces";

export interface ProductState {
  products: ProductListItem[];
  error: string;
  loading: boolean;
  productsPredictedTexts: string[];
  categoryWithSubProductsDto: CategoryWithSubProductsDto[];
  categories: ProductCategory[];
  categoriesDtos: ProductCategoryDto[];
  recommendedProducts: ProductListItem[];
  hotDealProducts: ProductListItem[];
  filteredProducts: ProductListItem[];
}
