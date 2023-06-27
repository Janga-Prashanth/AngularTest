import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-httpreqs',
  templateUrl: './httpreqs.component.html',
  styleUrls: ['./httpreqs.component.css']
})
export class HttpreqsComponent implements OnInit{
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.getdata();
  }

  tpdata:any;
  
  getdata(){
    this.http.get("https://fakestoreapi.com/products?limit=5").subscribe((res) => {
        this.tpdata = res;
      } );
  }
}
