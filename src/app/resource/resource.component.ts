import { Component, OnInit } from '@angular/core';
import { Location }                 from '@angular/common';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styles: []
})
export class ResourceComponent implements OnInit {

  resources=["nahid","Kayser"]
  

  constructor(

    private location: Location

   
  ) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }
}
