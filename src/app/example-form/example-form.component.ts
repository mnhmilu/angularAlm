import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'example-form',
  templateUrl: './example-form.component.html',
  styleUrls: ['./example-form.component.css']
})
export class ExampleFormComponent implements OnInit {

  contactMethods=[{id:1,name:'Email'},
{id:2,name:'Fax'}
]
  constructor() { }

  ngOnInit() {
  }


  log(x)
  {
  //  console.log(x);

  }

  submit(x)
  {
    //print whole form
    console.log(x);

    // capture the value
    console.log(x.value.contact.comment);
  }


}
