import { getCurrencySymbol } from '@angular/common';
import { Component, ViewChild } from '@angular/core';  //automatically import components when used
import { TesterComponent } from './tester/tester.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defination:string="{String interpolation is used to display dynamic data on HTML template (at user end)."
  x:number=2;
  test(){
    const y=this.x+5;
    return y+'}';      //String Interpolation
  }

  isdisabled:boolean=false;    //Property Binding
  placehv:string="Enter Somthing"
  
  isactive:boolean=true;            //Class Binding
  setClassvalue='inactive';
  setClass(){
    return this.setClassvalue;
  }

  colorV:string='greenyellow';    //Style Binding
  fsize:string="10px";

  countervalue:number=10;     //Event Binding

  increament(){                       //event Binding
    this.countervalue=this.countervalue+1;
  }
  decreament(){
    this.countervalue=this.countervalue-1
  }

  CityName="Hyderabad"   //Two way data binding

  Cityreset(){
    this.CityName="delhi";
  }
  
  Capitals="";
  // Capitals=["Chennai","Mumbai","Bangloor"];      //*ngIf

  Mobiles=["Apple","Xiaomi","Samsung","Iq","Nothig"];     //*ngFor

  num1:number=2;       //[(ngModel)]
  num2:number=3;

  op:string="+";  //*ngSwitch

  ngtestclass:string='';  //ngClass

  AddButtonCSSStyles() {   //ngStyle
    let CssStyless = {        
        'color':'red',
        'font-weight': 'bold',
        'font-size.px': 20
    };
    return CssStyless;
  }

  students: any[] = [{Name: 'Preety', Branch: 'CSE', Gender: 'Female'},
    {Name: 'Anurag', Branch: 'ETC', Gender: 'Male'},
    { Name: 'Priyanka', Branch: 'CSE',  Gender: 'Female'}
  ]; 
  
  who="janga Prashanth REDDY"      //Pipes
  salary=60000;
  dob=new Date();
  cgpa=0.62;
  company="Peopletech"

  Pdata="Input decorator1"   // parent to child using @Input()
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