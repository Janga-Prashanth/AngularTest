import { AfterViewChecked, AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-afterviewinit',
  templateUrl: './afterviewinit.component.html',
  styleUrls: ['./afterviewinit.component.css']
})
export class AfterviewinitComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    console.log("after view init called")
  }

  ngAfterViewChecked(): void {
    console.log("after view checked called")
  }

  counter=0;

  updatecounter(){
    this.counter+=1;
  }

}
