import { Component, Input } from '@angular/core';   //Input/output intslled automatically when used in ts

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  @Input() cd1: any;
  @Input() cp1:any;
    
}
