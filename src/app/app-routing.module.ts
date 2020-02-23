import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentListComponent } from './appointments/appointment-list/appointment-list.component';
import { ProductionListComponent } from './production/production-list/production-list.component';
import { CxcComponent } from './accounting/cxc/cxc.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LoginComponent } from './sessions/login/login.component';


const routes: Routes = [
  { path: "home", component: DashboardComponent },
  { path: "citas", component: AppointmentListComponent },
  { path: "produccion", component: ProductionListComponent },
  { path: "cxc", component: CxcComponent },
  { path: "productos", component: InventoryComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
