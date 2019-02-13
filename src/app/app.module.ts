import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { KeysComponent } from './keys/keys.component';
import { LogsComponent } from './logs/logs.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    PermissionsComponent,
    KeysComponent,
    LogsComponent,
    DocumentationComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
