import { KeyValue } from "@angular/common";
import { OfferViewTypeEnum } from "./enums";

export interface ProductCategory {
  _id?: string;
  name: string;
  displayName: string;
  description?: string;
  image: {
    src: string;
    alt?: string;
  };
  icon: string;
  slug?: string;
  isActive?: boolean;
  sortOrder?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CategoryWithSubProductsDto extends ProductCategory {
  hotDeals: KeyValue<string, string>[],
  recommended: KeyValue<string, string>[],
}

export interface ProductCategoryDto {
  id: string;
  displayName: string;
  description: string;
  name: string;
  slug: string;
  productsCount: number;
}

export interface ProductListItem {
  id: string;
  name: string;
  price: number;
  image: string;
  referencePrice: number;
  rating: number;
  reviewCount: number;
  stock: number;
  offerTitle: string;
  offerViewType: OfferViewTypeEnum;
  desc: string;
  category: ProductCategoryDto;
}
