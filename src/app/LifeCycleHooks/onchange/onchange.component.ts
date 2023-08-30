import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-onchange',
  templateUrl: './onchange.component.html',
  styleUrls: ['./onchange.component.css']
})
export class OnchangeComponent implements OnChanges{

  constructor() {}  
  @Input() cdata:any;
  var1:any;
  ngOnChanges(changes: SimpleChanges): void {
    console.log("onchange called",changes)
    this.var1=changes['cdata']['previousValue'];
  }
}
