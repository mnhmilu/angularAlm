import { Component,OnInit,OnDestroy } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table/src/index';
import persons from './data-table-demo1-data';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-data-table-example',
  templateUrl: './data-table-example.component.html',
  //styleUrls: ['./data-table-example.component.css']
})
export class DataTableExampleComponent implements OnInit, OnDestroy {
   
  
  //products:any[];

  itemResource = new DataTableResource(persons);
  items = [];
  itemCount = 0;
  //subscription:Subscription;

  constructor() {
      this.itemResource.count().then(count => this.itemCount = count);
  }

  reloadItems(params) {
      this.itemResource.query(params).then(items => this.items = items);
  }

  // special properties:
  rowClick(rowEvent) {
      console.log('Clicked: ' + rowEvent.row.item.name);
  }

  rowDoubleClick(rowEvent) {
      alert('Double clicked: ' + rowEvent.row.item.name);
  }



  rowTooltip(item) { return item.jobTitle; }


  filter(query:string)
  {
      console.log(query);
  }

  ngOnDestroy(): void {
  //this.subscription.unsubscribe();
}
ngOnInit(): void {
    throw new Error("Method not implemented.");
}


}
