import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { ToastrModule } from "ngx-toastr";
import { HttpClientModule } from "@angular/common/http";
import { ContractsModule } from "./contracts/contracts.module";
import { CustomersModule } from "./customers/customers.module";
import { CoreModule } from "./core/core.module";
import { RouterModule, Routes } from "@angular/router";
import { NotfoundComponent } from "./core/notfound/notfound.component";

const routes: Routes = [
  { path: "", redirectTo: "customers", pathMatch: "full" },
  { path: "**", component: NotfoundComponent },
];

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
    RouterModule.forRoot(routes),
  ],
})
export class AppModule {}
