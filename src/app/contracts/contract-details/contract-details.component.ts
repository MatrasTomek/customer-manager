import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ContractService } from "../contract.service";
import { Contract } from "../model";

@Component({
  selector: "app-contract-details",
  templateUrl: "./contract-details.component.html",
  styles: [],
})
export class ContractDetailsComponent implements OnInit {
  public contract: Contract = {
    id: 0,
    customerName: "",
    customerId: 0,
    value: 0,
    date: 0,
  };

  constructor(
    private contarcService: ContractService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.contract = data["contract"];
    });
  }
}
