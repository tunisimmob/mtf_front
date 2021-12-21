import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    isLoggedIn
    constructor(private router: Router) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('auth-token') == null) {
            return this.router.createUrlTree(
                ['auth/login']
                // { skipLocationChange: true }
            );
        } else {
            return true;
        }
    }
}




