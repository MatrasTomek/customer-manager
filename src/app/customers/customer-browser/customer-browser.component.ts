import { Component, OnInit, ViewChild } from "@angular/core";
import { Customer, CustomerType } from "../model";
import { CustomerDetailsComponent } from "../customer-details/customer-details.component";
import { CustomerService } from "../customer.service";
import { Observable } from "rxjs";
import { MessageService } from "src/app/message.service";

@Component({
  selector: "cus-customer-browser",
  templateUrl: "./customer-browser.component.html",
  styles: [],
})
export class CustomerBrowserComponent implements OnInit {
  @ViewChild("details") detailsComponent: CustomerDetailsComponent | undefined;

  customers!: Customer[];
  customer!: Customer;

  constructor(
    private messageService: MessageService,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.refresh();
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

  deleteCustomer() {
    this.customerService.deleteCustomer(this.customer).subscribe(() => {
      this.messageService.success("Klient usunięty");
      this.refresh();
    });
  }

  private refresh() {
    this.customerService.getCustomers().subscribe((response) => {
      this.customers = response;
      this.customer = this.customers[0];
    });
  }
}
