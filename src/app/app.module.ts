import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component';
import { Routes, RouterModule } from '@angular/router';
import { CONST_ROUTING } from './app.routing';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { OfficeProjectComponent } from './office-project/office-project.component';
import { ResourceComponent } from './resource/resource.component';
import { SharedService } from "./shared.service";
import { AlertModule } from 'ngx-bootstrap';
import { DataService } from './data.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { ExampleFormComponent } from './example-form/example-form.component';
import { DataTableExampleComponent } from './data-table-example/data-table-example.component';
import { DataTableModule } from 'angular-4-data-table/src/index';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OfficeProjectComponent,
    ResourceComponent,
    DashboardComponent,
    BsNavbarComponent,
    ExampleFormComponent,
    DataTableExampleComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CONST_ROUTING,
    AlertModule.forRoot(),
   NgbModule.forRoot(),
   DataTableModule 
 
  ],
  providers: [SharedService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
