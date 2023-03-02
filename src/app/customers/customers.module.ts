import { NgModule } from "@angular/core";
import { CustomerAddComponent } from "./customer-add/customer-add.component";
import { CustomerBrowserComponent } from "./customer-browser/customer-browser.component";
import { CustomerDetailsComponent } from "./customer-details/customer-details.component";
import { CustomerService } from "./customer.service";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [SharedModule],
  declarations: [
    CustomerAddComponent,
    CustomerBrowserComponent,
    CustomerDetailsComponent,
  ],
  providers: [CustomerService],
  exports: [CustomerAddComponent, CustomerBrowserComponent],
})
export class CustomersModule {}
