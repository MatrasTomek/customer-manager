import { Component, OnInit, ViewChild } from "@angular/core";
import { Customer, CustomerType } from "../model";
import { CustomerDetailsComponent } from "../customer-details/customer-details.component";

@Component({
  selector: "app-customer-browser",
  templateUrl: "./customer-browser.component.html",
  styles: [],
})
export class CustomerBrowserComponent implements OnInit {
  @ViewChild("details") detailsComponent: CustomerDetailsComponent | undefined;

  customers: Customer[] = [
    {
      name: "PPHU Jan Kowalski",
      photoUrl: "assets/images/cat.jpg",
      description: "important client",
      age: 45,
      adress: {
        street: "Pomarańczowa",
        houseNumber: 124,
        city: "Tłuszcz",
      },
      type: CustomerType.Premium,
      categories: ["zagraniczny", "mikro", "duży"],
    },
    {
      name: "Anna Piwo",
      photoUrl: "assets/images/cat_1.jpg",
      description: "standard client",
      age: 38,
      adress: {
        street: "Ogniowa",
        houseNumber: 14,
        city: "Wrocław",
      },
      type: CustomerType.Standard,
      categories: ["osoba prywatna"],
    },
    {
      name: "ND Tomasz Matras",
      photoUrl: "assets/images/cat_2.jpg",
      description: "standard client",
      age: 38,
      adress: {
        street: "Trakt Królewski",
        houseNumber: 118,
        city: "Mokrzyska",
      },
      type: CustomerType.Standard,
      categories: ["mikro", "zagraniczny"],
    },
  ];

  customer: Customer = this.customers[0];

  constructor() {}

  ngOnInit(): void {}

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
