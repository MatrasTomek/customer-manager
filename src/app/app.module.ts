import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { CustomerService } from "./customers/customer.service";
import { ToastrModule } from "ngx-toastr";
import { MessageService } from "./core/message.service";
import { HttpClientModule } from "@angular/common/http";
import { ContractsModule } from "./contracts/contracts.module";
import { CustomersModule } from "./customers/customers.module";
import { CoreModule } from "./core/core.module";

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    CoreModule,
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
