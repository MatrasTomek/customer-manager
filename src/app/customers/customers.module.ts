import { NgModule } from "@angular/core";
import { CustomerAddComponent } from "./customer-add/customer-add.component";
import { CustomerBrowserComponent } from "./customer-browser/customer-browser.component";
import { CustomerDetailsComponent } from "./customer-details/customer-details.component";
import { CustomerService } from "./customer.service";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";

const routes = [
  { path: "customers", component: CustomerBrowserComponent },
  { path: "customers/add", component: CustomerAddComponent },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [
    CustomerAddComponent,
    CustomerBrowserComponent,
    CustomerDetailsComponent,
  ],
  providers: [CustomerService],
  exports: [CustomerAddComponent, CustomerBrowserComponent],
})
export class CustomersModule {}
