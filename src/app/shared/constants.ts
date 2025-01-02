import { environment } from "../../environments/environment";

export const APIUrls = {
  login: environment.apiUrl + '/login',
  register: environment.apiUrl + '/register',
  products: environment.apiUrl + '/products',
  getCartItems: environment.apiUrl + '/api/users/cart',
  getProductTextPrediction: (text: string) => environment.apiUrl + `/api/products/text-prediction?text=${text}`,
  getAllCategoriesWithSubProducts: environment.apiUrl + '/api/product-categories/with-sub-products',
  getAllCategories: (page: number | undefined, limit: number | undefined) => environment.apiUrl + `/api/product-categories/?page=${page}&limit=${limit}`,
  getAllHotDeals: environment.apiUrl + '/api/products/hot-deals',
  getAllRecommendedProducts: (selectedProductId?: string) => environment.apiUrl + `/api/products/recommended?selectedProductId=${selectedProductId ?? ''}`,
}
