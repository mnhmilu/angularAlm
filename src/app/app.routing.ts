import { Routes, RouterModule } from '@angular/router';
import { OfficeProjectComponent } from "./office-project/office-project.component";
import {ResourceComponent} from "./resource/resource.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import {ExampleFormComponent} from './example-form/example-form.component';
import {DataTableExampleComponent} from './data-table-example/data-table-example.component';


const MAINMENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'project', component: OfficeProjectComponent },
    { path: 'dataTableExample',component:DataTableExampleComponent },
    { path: 'resource',component: ResourceComponent},
    { path: 'formExample',component:ExampleFormComponent },
 
    
  
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);