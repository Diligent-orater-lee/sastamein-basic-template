import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../environments/environment';

export const RequestInterceptor: HttpInterceptorFn = (req, next) => {
  const clientId = environment.clientId;

  let token: string | null = null;
  let cartOwnerId: string | null = null;
  if (localStorage.getItem('token') !== null)
    token = localStorage.getItem('token');

  if (localStorage.getItem("cartOwnerId") !== null) {
    cartOwnerId = localStorage.getItem("cartOwnerId");
  }

  // Check if token exists and add it as an Authorization header if so
  let modifiedReq = token
    ? req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    })
    : req;

  if (cartOwnerId) {
    modifiedReq = modifiedReq.clone({
      setHeaders: {
        "Cart-Owner-Id": cartOwnerId,
      },
    });
  }

  modifiedReq = modifiedReq.clone({
    setHeaders: {
      "X-Client": clientId,
    },
  });

  return next(modifiedReq);
};
