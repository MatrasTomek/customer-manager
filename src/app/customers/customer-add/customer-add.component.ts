import { Component, OnInit } from "@angular/core";
import { CustomerType } from "../model";
import { CustomerService } from "../customer.service";
import { MessageService } from "src/app/message.service";

@Component({
  selector: "cus-customer-add",
  templateUrl: "./customer-add.component.html",
  styles: [],
})
export class CustomerAddComponent implements OnInit {
  name!: string;
  age!: number;
  type!: CustomerType;

  CustomerType = CustomerType;

  constructor(
    private customerService: CustomerService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}

  add() {
    this.customerService
      .createCustomer({
        name: this.name,
        age: this.age,
        type: this.type,
        photoUrl: "",
        categories: [],
        description: "",
        adress: {
          city: "",
          houseNumber: 0,
          street: "",
        },
      })
      .subscribe(() => {
        this.messageService.success("Klient dodany");
      });
  }
}
