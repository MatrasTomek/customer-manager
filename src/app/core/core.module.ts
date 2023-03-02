import { NgModule } from "@angular/core";
import { MessageService } from "./message.service";
import { ErrorHandlingInterceptor } from "./error-handling.interceptor";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { CONFIG, Config } from "../model";
import { NavbarComponent } from './navbar/navbar.component';

const config: Config = {
  customerLimit: 10,
  apiUrl: "http://localhost:13378",
};

@NgModule({
  providers: [
    MessageService,
    ErrorHandlingInterceptor,
    { provide: CONFIG, useValue: config },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlingInterceptor,
      multi: true,
    },
  ],
  declarations: [
    NavbarComponent
  ],
})
export class CoreModule {}
