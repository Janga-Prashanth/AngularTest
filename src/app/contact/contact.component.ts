import { Component } from '@angular/core';
import { FindService } from '../find.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private ts:FindService){ }  //referring the service in constructor.
  
  allbikes=this.ts.countries;

}
