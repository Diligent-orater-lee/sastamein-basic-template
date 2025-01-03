import { KeyValue } from "@angular/common";
import { FieldTypeEnum, OfferViewTypeEnum } from "./enums";

export interface Product {
  _id: string;
  name: string;
  price: number;
  referencePrice: number;
  desc: string;
  stock: number;
  images: string[];
  brand: string;
  category: ProductCategoryDto;
  isHotDeal: boolean;
  additionalFields: {
    fieldLabel: string;
    fieldType: FieldTypeEnum;
    fieldValue: string;
    fieldOptions?: {
      key: string;
      value: string;
    }[];
  }[];

  rating: number;
  reviewCount: number;
  productFullDetailsHtml: string;
}

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

export interface CartItemDto {
  _id: string;
  name: string;
  price: number;
  desc: string;
  stock: number;
  image: string;
  count: number;
}
