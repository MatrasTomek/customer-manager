import { Injectable } from "@angular/core";
import { Contract } from "./model";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { ContractService } from "./contract.service";

@Injectable({
  providedIn: "root",
})
export class ContarctResolver implements Resolve<Contract> {
  constructor(private contractService: ContractService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Contract | Observable<Contract> | Promise<Contract> {
    const id = parseInt(route.params["id"]);
    return this.contractService.getContract(id);
  }
}
