import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomerAddComponent } from "./customer-add/customer-add.component";
import { CustomerBrowserComponent } from "./customer-browser/customer-browser.component";
import { CustomerDetailsComponent } from "./customer-details/customer-details.component";
import { CapitalizePipe } from "./capitalize.pipe";
import { HighlightDirective } from "./highlight.directive";
import { CustomerService } from "./customer.service";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    CustomerAddComponent,
    CustomerBrowserComponent,
    CustomerDetailsComponent,
    CapitalizePipe,
    HighlightDirective,
  ],
  providers: [CustomerService],
  exports: [CustomerAddComponent, CustomerBrowserComponent],
})
export class CustomersModule {}
