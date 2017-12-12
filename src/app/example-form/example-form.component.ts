import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'example-form',
  templateUrl: './example-form.component.html',
  styleUrls: ['./example-form.component.css']
})
export class ExampleFormComponent implements OnInit {

  contactMethods: any;
  constructor() {
    console.log("from cons");
   }

  ngOnInit() {

    console.log("from ng");
    
    this.contactMethods = [{ id: 1, name: 'Email' },
    { id: 2, name: 'Fax' }
    ];
  }


  log(x) {
    //  console.log(x);

  }

  submit(x) {
    //print whole form
    console.log(x);

    // capture the value
    console.log(x.value.contact.comment);
  }


}
