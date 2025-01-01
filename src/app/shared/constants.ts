import { environment } from "../../environments/environment";

export const APIUrls = {
  login: environment.apiUrl + '/login',
  register: environment.apiUrl + '/register',
  products: environment.apiUrl + '/products',
  getCartItems: environment.apiUrl + '/api/users/cart'
}
