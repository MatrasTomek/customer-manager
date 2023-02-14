import { Component, OnInit, ViewChild } from "@angular/core";
import { Customer, CustomerType } from "../model";
import { CustomerDetailsComponent } from "../customer-details/customer-details.component";
import { CustomerService } from "../customer.service";

@Component({
  selector: "app-customer-browser",
  templateUrl: "./customer-browser.component.html",
  styles: [],
})
export class CustomerBrowserComponent implements OnInit {
  @ViewChild("details") detailsComponent: CustomerDetailsComponent | undefined;

  customers!: Customer[];
  customer!: Customer;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customers = this.customerService.getCustomers();
    this.customer = this.customers[0];
  }

  changeColor() {
    this.detailsComponent?.changeColor();
  }

  onShift(direction: string) {
    const index = this.customers.indexOf(this.customer);
    if (index > 0 && direction === "left") {
      this.customer = this.customers[index - 1];
    } else if (direction === "right" && index < this.customers.length - 1) {
      this.customer = this.customers[index + 1];
    }
  }
}
