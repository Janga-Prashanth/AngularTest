import { Component, EventEmitter, Output } from '@angular/core';  //import Output/Emmittor to send data to parent

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.css']
})
export class TesterComponent {

  Cmessage: string = "This text is from child component";
  @Output() msgEvent = new EventEmitter<string>();   //Setting the emit event
  sendMessage() {
    this.msgEvent.emit(this.Cmessage)   //emitting the messge to the parent from child
  }

  demoValue = "Using of Child properties by mentioning one ID to the child component property in the Parent Component"; //By template refrence variable
  passtoparent() {
    return this.demoValue;
  }

  vcd = "passing value from child to parent by ViewChild Decorator";   //View Child Decorator
  vcvalue() {
    return this.vcd;
  }

}
