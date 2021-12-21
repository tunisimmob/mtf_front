import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { TokenStorageService } from '../token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class HttpIntercpterService implements HttpInterceptor {

  constructor(private oauthService: TokenStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    
    let authToken = localStorage.getItem('auth-token');
    if(authToken != null) {
      req = req.clone({
        setHeaders: {
          Authorization: authToken
        }
      })
    }
  
    return next.handle(req);
  }

}