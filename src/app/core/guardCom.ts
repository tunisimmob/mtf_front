import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';


@Injectable({
    providedIn: 'root'
})


export class AuthGuardCom implements CanActivate {
    isLoggedIn
    constructor(private router: Router) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('role') != 'ROLE_ADMIN') {
            return this.router.createUrlTree(
                ['/dashboard']
                // { skipLocationChange: true }
            );
        } else {
            return true;
        }
    }
}


