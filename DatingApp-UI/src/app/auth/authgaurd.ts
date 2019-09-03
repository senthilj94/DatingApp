import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';

@Injectable({
    providedIn: 'root'
})

export class AuthGaurd implements CanActivate {

    constructor(private authService: AuthService, private alertify: AlertifyService, private router: Router) {}
    canActivate(): boolean {
        if (this.authService.loggedIn()) {
            return true;
        }

        this.alertify.error('Please login to continue!!!');
        this.router.navigate(['/home']);
        return false;
    }
}
