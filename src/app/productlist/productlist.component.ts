import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  
  productid:any;   //to store the id value from URL
  product: any;    //to store the id value from services

  constructor(private aroute:ActivatedRoute, private ps:ProductsService){} 

  // ActivedRoute is used to get the currently activated route by "id" value

  ngOnInit(): void{
    this.productid= this.aroute.snapshot.paramMap.get('id');      //getting the "id" value from URL
    // this.productid= this.aroute.snapshot.params['id'];   //this is the old approach
    this.product= this.ps.products.find(x=>x.id == this.productid);       //getting the "id" value from services and eauating it.
  }

}
