import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { CustomerAddComponent } from "./customer-add/customer-add.component";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CustomerAddDeactivateGuard
  implements CanDeactivate<CustomerAddComponent>
{
  constructor() {}
  canDeactivate(
    component: CustomerAddComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot | undefined
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    console.log(component.name);

    return !(component.name || component.age || component.type);
  }
}
