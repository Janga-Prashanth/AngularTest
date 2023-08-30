import { AfterViewChecked, AfterViewInit, Component, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnChanges,AfterViewInit, AfterViewChecked,OnDestroy {

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

  ngAfterViewInit(): void {
    console.log("after view init called")
  }

  ngAfterViewChecked(): void {
    console.log("after view checked called")
  }

  ngOnDestroy(): void {
    console.log("ondestroy called");
    alert("data not saved")
  }

}
