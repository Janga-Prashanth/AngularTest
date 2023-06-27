import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  static products: any;

  constructor() { }

  products=[
    {id:1, name:'Rick Grimes', gender:'M', age:40, series:'TWD'},
    {id:2, name:'Michone', gender:'F', age:38, series:'TWD'},
    {id:3, name:'Rhenerya', gender:'F', age:35, series:'HOD'},
    {id:4, name:'Deomon', gender:'M', age:38, series:'HOD'},
    {id:5, name:'Gohan', gender:'M', age:30, series:'DBZ'},
    ]
}
