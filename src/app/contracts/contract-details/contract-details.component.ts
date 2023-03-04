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
  public contract!: Contract;

  constructor(
    private contarcService: ContractService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = parseInt(params["id"]);
      this.contarcService.getCustomer(id).subscribe((contract) => {
        this.contract = contract;
      });
    });
  }
}
