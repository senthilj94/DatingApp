import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokeninterceptorService implements HttpInterceptor {

constructor(private auth: AuthService) { }

intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  request = request.clone({
    setHeaders: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
  console.log('Interceptor Header: ' + request.headers.get('Authorization'));
  return next.handle(request);
}
}
