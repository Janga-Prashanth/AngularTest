import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']     //visit the productlist.ts file before this one
}) 
export class ProductsComponent {

  constructor( private ps:ProductsService){} 

  product= this.ps.products;
}
