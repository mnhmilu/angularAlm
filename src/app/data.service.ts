import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }


  getProjects()
  {
    return [{name:"Sample Project 1"},{name:"Sample Project 2"},{name:"Sample Project 3"},{name:"Sample Project 4"}];
  }

}
