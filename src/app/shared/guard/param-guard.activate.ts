import {inject, Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {ConnService} from "../conn.service";
import {Observable} from "rxjs";
import {BooleanService} from "../boolean.service";


@Injectable()
export class ParamGuardActivate {


  constructor(private router: Router, private booleanService: BooleanService, private conn: ConnService) {}


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const {authenticationRequired , authenticationFailureRedirectUrl } = route.data;

    if(authenticationRequired)
    return this.router.parseUrl( authenticationFailureRedirectUrl);
    else return true;
  }
}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  let logged = inject(BooleanService);
  let connService = inject(ConnService);
  const paramGuardActivate = new ParamGuardActivate(new Router(), logged, connService);
  return <boolean>paramGuardActivate.canActivate(next, state);
}
