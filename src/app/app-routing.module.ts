import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentListComponent } from './appointments/appointment-list/appointment-list.component';
import { ProductionListComponent } from './production/production-list/production-list.component';
import { CxcComponent } from './accounting/cxc/cxc.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LoginComponent } from './sessions/login/login.component';
import { AuthGuardService } from './sessions/auth-guard.service';


const routes: Routes = [
  { path: "home", component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: "citas", component: AppointmentListComponent, canActivate: [AuthGuardService] },
  { path: "produccion", component: ProductionListComponent, canActivate: [AuthGuardService] },
  { path: "cxc", component: CxcComponent, canActivate: [AuthGuardService] },
  { path: "productos", component: InventoryComponent, canActivate: [AuthGuardService] },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
