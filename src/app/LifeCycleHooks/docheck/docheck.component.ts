import { Component, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-docheck',
  templateUrl: './docheck.component.html',
  styleUrls: ['./docheck.component.css']
})
export class DocheckComponent implements DoCheck {

  @Input() cstreets:any;
  var2:any;

  ngDoCheck(): void {
      console.log("do check called")
    }
}
