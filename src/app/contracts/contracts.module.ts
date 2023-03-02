import { NgModule } from "@angular/core";
import { ContractListComponent } from "./contract-list/contract-list.component";
import { ContractService } from "./contract.service";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";

const routes = [{ path: "contracts", component: ContractListComponent }];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [ContractListComponent],
  declarations: [ContractListComponent],
  providers: [ContractService],
})
export class ContractsModule {}
