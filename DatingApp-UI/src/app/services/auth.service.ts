import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

decodedToken: any;
jwtHelper = new JwtHelperService();
baseUrl = 'http://localhost:5000/api/auth/';

constructor(private http: HttpClient) { }

login(model: any) {
  return this.http.post(this.baseUrl + 'login', model).pipe(
    map((response: any) => {
      const user = response;
      console.log(response);
      if (user) {
        localStorage.setItem('token', user.token);
        this.decodedToken = this.jwtHelper.decodeToken(user.token);
      }
    })
  );
}

register(model: any) {
  return this.http.post(this.baseUrl + 'register', model);
}

loggedIn() {
  const token = localStorage.getItem('token');
  return !this.jwtHelper.isTokenExpired(token);
}
}
