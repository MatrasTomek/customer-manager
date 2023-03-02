import { NgModule } from "@angular/core";
import { ContractListComponent } from "./contract-list/contract-list.component";
import { ContractService } from "./contract.service";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [SharedModule],
  exports: [ContractListComponent],
  declarations: [ContractListComponent],
  providers: [ContractService],
})
export class ContractsModule {}
