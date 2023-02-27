import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CONFIG, Config } from "../model";
import { Contract } from "./model";

@Injectable({
  providedIn: "root",
})
export class ContractService {
  constructor(
    private httpClinet: HttpClient,
    @Inject(CONFIG) private config: Config
  ) {}

  getCustomers() {
    return this.httpClinet.get<Contract[]>(`${this.config.apiUrl}/contracts`);
  }
}
