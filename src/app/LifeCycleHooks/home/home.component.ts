import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
// export class HomeComponent implements OnChanges,AfterViewInit, AfterViewChecked,OnDestroy {
export class HomeComponent implements OnChanges, OnInit {

  constructor(){
    console.log("constructor called")
  }

  ngOnInit(): void {
    console.log("on init called");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("oninit called")
  }  

  greet="hey there"  //OnChanges

  streetlist=["illford", "greenwhich", "hounslow", "hales"]   //DoCheck

  streetname="";
  addstreet(){
    this.streetlist.push(this.streetname);
    console.log(this.streetlist)
    this.streetname="";
  }

  // ngOnDestroy(): void {
  //   console.log("ondestroy called");
  //   alert("data not saved")
  // }

}
