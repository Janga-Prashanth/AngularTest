import { Component } from '@angular/core';
import { FindService } from '../find.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(private ts:FindService){ }  //referring the service in constructor.
  
  countrylist=this.ts.countries;

}
