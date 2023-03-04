import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContractListComponent } from "./contract-list/contract-list.component";
import { ContractService } from "./contract.service";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { ContractDetailsComponent } from "./contract-details/contract-details.component";

const routes = [
  { path: "contracts/:id", component: ContractDetailsComponent },
  { path: "contracts", component: ContractListComponent },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes), CommonModule],
  exports: [ContractListComponent],
  declarations: [ContractListComponent],
  providers: [ContractService],
})
export class ContractsModule {}
