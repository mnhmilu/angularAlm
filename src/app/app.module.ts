import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component';
import { Routes, RouterModule } from '@angular/router';
import { CONST_ROUTING } from './app.routing';


import { OfficeProjectComponent } from './office-project/office-project.component';
import { ResourceComponent } from './resource/resource.component';
import { SharedService } from "./shared.service";
import { AlertModule } from 'ngx-bootstrap';
import { DataService } from './data.service';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,

    OfficeProjectComponent,

    ResourceComponent,

    DashboardComponent,



  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
 
    CONST_ROUTING,
    AlertModule.forRoot()
    
  ],
  providers: [SharedService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
