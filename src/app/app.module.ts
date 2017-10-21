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


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,

    OfficeProjectComponent,

    ResourceComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
 
    CONST_ROUTING,
    AlertModule.forRoot()
    
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
