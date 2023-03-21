import { NgModule } from "@angular/core";
import { MessageService } from "./message.service";
import { ErrorHandlingInterceptor } from "./error-handling.interceptor";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { CONFIG, Config } from "../model";
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterModule } from "@angular/router";
import { NotfoundComponent } from "./notfound/notfound.component";
import { AuthGuard } from "./auth-guard.service";
import { AuthService } from "./auth.service";
import { CommonModule } from "@angular/common";

const config: Config = {
  customerLimit: 10,
  apiUrl: "http://localhost:13378",
};

@NgModule({
  imports: [RouterModule, CommonModule],
  providers: [
    AuthGuard,
    AuthService,
    MessageService,
    ErrorHandlingInterceptor,
    { provide: CONFIG, useValue: config },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlingInterceptor,
      multi: true,
    },
  ],
  declarations: [NavbarComponent, NotfoundComponent],
  exports: [NavbarComponent],
})
export class CoreModule {}
