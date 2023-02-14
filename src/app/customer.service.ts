import { Injectable } from "@angular/core";
import { Customer, CustomerType } from "./model";

@Injectable({
  providedIn: "root",
})
export class CustomerService {
  private customers: Customer[] = [
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

  constructor() {}

  getCustomers() {
    return this.customers;
  }
}
