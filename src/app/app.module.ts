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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

import { FormsModule } from '@angular/forms';
import { AuthService } from './sessions/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    InventoryComponent,
    AppointmentListComponent,
    ProductionListComponent,
    DashboardComponent,
    CxcComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
