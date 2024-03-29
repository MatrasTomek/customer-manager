import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styles: [],
})
export class NavbarComponent implements OnInit {
  authService: AuthService;
  constructor(authService: AuthService) {
    this.authService = authService;
  }

  ngOnInit(): void {}
}
