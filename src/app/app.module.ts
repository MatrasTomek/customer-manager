import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { CustomerService } from "./customers/customer.service";
import { CONFIG, Config } from "./model";
import { ToastrModule } from "ngx-toastr";
import { MessageService } from "./message.service";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ErrorHandlingInterceptor } from "./error-handling.interceptor";
import { ContractsModule } from "./contracts/contracts.module";
import { CustomersModule } from "./customers/customers.module";

const config: Config = {
  customerLimit: 10,
  apiUrl: "http://localhost:13378",
};

@NgModule({
  declarations: [AppComponent],
  providers: [
    CustomerService,
    { provide: CONFIG, useValue: config },
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ContractsModule,
    CustomersModule,
  ],
})
export class AppModule {}
