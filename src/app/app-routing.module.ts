import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermissionsComponent } from './permissions/permissions.component';
import { KeysComponent } from './keys/keys.component';
import { LogsComponent } from './logs/logs.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'perms', component: PermissionsComponent },
  { path: 'keys', component: KeysComponent },
  { path: 'logs', component: LogsComponent },
  { path: 'docs', component: DocumentationComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: "/dashboard", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
