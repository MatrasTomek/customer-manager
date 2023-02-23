import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HighlightDirective } from "./highlight.directive";
import { CustomerBrowserComponent } from "./customer-browser/customer-browser.component";
import { CustomerDetailsComponent } from "./customer-details/customer-details.component";
import { CustomerService } from "./customer.service";
import { CONFIG, Config } from "./model";
import { ToastrModule } from "ngx-toastr";
import { MessageService } from "./message.service";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { CustomerAddComponent } from "./customer-add/customer-add.component";
import { ErrorHandlingInterceptor } from "./error-handling.interceptor";
import { CapitalizePipe } from './capitalize.pipe';

const config: Config = {
  customerLimit: 10,
  apiUrl: "http://localhost:13378",
};

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    CustomerBrowserComponent,
    CustomerDetailsComponent,
    CustomerAddComponent,
    CapitalizePipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
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
})
export class AppModule {}
