import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private authService: AuthService,private router: Router) {}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
       return this.authService.isAuthenticated()
        .then(
            (authenticated: boolean) => {
                console.log('here is Auth Guard ' + authenticated)
                if (authenticated) {
                    return true;
                }else{
                    this.router.navigate(['/login']);
                    return false;
                }
            }
         )
    }
}