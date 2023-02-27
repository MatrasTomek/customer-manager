import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContractListComponent } from "./contract-list/contract-list.component";
import { ContractService } from "./contract.service";

@NgModule({
  imports: [CommonModule],
  exports: [ContractListComponent],
  declarations: [ContractListComponent],
  providers: [ContractService],
})
export class ContractsModule {}
