import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './sessions/login/login.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AppointmentListComponent } from './appointments/appointment-list/appointment-list.component';
import { ProductionListComponent } from './production/production-list/production-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CxcComponent } from './accounting/cxc/cxc.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    InventoryComponent,
    AppointmentListComponent,
    ProductionListComponent,
    DashboardComponent,
    CxcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
