import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'     //Creating a service in root level so that we can inject in any component
})
export class FindService {

  constructor() { }

  countries:Array<string>=["Ind","Pak","Aus","USA"]
}
