import { getCurrencySymbol } from '@angular/common';
import { Component, ViewChild } from '@angular/core';  //automatically import components when used
import { TesterComponent } from './tester/tester.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //String Interpolation
  defination:string="String interpolation is used to display dynamic data on HTML template (at user end)."
  x:number=2;
  test(){
    const y=this.x+5;
    return y;
  }

  //Property Binding
  isdisabled:boolean=false;
  placehv:string="Enter Somthing"
  
  //Class Binding
  isactive:boolean=true;
  setClassvalue='inactive';
  setClass(){
    return this.setClassvalue;
  }

  //Style Binding
  colorV:string='greenyellow';
  fsize:string="10px";

  //Event Binding
  countervalue:number=10;

  //event Binding
  increament(){
    this.countervalue=this.countervalue+1;
  }
  decreament(){
    this.countervalue=this.countervalue-1
  }
  setcounter(){
    return this.countervalue=10;
  }

  //Two way data binding
  CityName="Hyderabad"

  Cityreset(){
    this.CityName="delhi";
  }


  //1.Structural Directives
  //*ngIf
  // Capitals="";
  Capitals=["Chennai","Mumbai","Bangloor"];

   //*ngFor
  Mobiles=["Apple","Xiaomi","Samsung","Iq","Nothig"];

  //*ngSwitch
  num1:number=2;       //[(ngModel)]
  num2:number=3;

  op:string="+";  

  ngtestclass:string='green';  //ngClass

  AddButtonCSSStyles() {   //ngStyle
    let CssStyless = {        
        'color':'red',
        'font-weight': 'bold',
        'font-size.px': 20
    };
    return CssStyless;
  }

  students: any[] = [{Name: 'Abc', Branch: 'CSE', Gender: 'Female'},
    {Name: '123', Branch: 'ETC', Gender: 'Male'},
    { Name: 'xyz', Branch: 'CSE',  Gender: 'Female'}
  ]; 
  
  //Pipes
  who="janga Prashanth REDDY"
  salary=60000;
  dob=new Date();
  cgpa=0.62;
  company="Peopletech"

  // parent to child using @Input()
  Pdata="Input decorator1"
  Parr=[10,20,30,40,50];
  Pdata2="Input decorator2"
  Parr2=[100,200,300,400,500];

  Pmessage: any;          //Child to  parent(First Method)

  @ViewChild(TesterComponent) wasre: any   //Injecting the child component decorator in parent

  show(){
    return this.wasre.vcd;
    console.log(this.wasre.vcd)
  }

  nggreet="my greetings"
}