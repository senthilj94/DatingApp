import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  loginModel: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.loginModel).subscribe(next => {
      console.log('Logged in successfully');
    }, error => {
      console.log('Failed to login');
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  loggedOut() {
    localStorage.removeItem('token');
    console.log('Logged out successfully');
  }
}
