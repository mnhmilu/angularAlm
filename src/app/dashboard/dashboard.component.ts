import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  projects;

  constructor(dataService:DataService) {

    this.projects = dataService.getProjects();

   }

  ngOnInit() {
  }




}
