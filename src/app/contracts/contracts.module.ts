import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContractListComponent } from "./contract-list/contract-list.component";
import { ContractService } from "./contract.service";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { ContractDetailsComponent } from "./contract-details/contract-details.component";
import { ContarctResolver } from "./contarct-resolver.service";

const routes = [
  {
    path: "/:id",
    component: ContractDetailsComponent,
    resolve: {
      contract: ContarctResolver,
    },
  },
  { path: "", component: ContractListComponent },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes), CommonModule],
  exports: [ContractListComponent],
  declarations: [ContractListComponent],
  providers: [ContractService, ContarctResolver],
})
export class ContractsModule {}
