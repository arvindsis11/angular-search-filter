import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-search',
  templateUrl: './custom-search.component.html',
  styleUrls: ['./custom-search.component.css']
})
export class CustomSearchComponent implements OnInit {

  public term!:string;
  private url = "https://dummyjson.com/products";
  public products: any;

  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
   this.http.get<any>(this.url).subscribe(
     res=>{
       this.products = res.products;
       console.log(this.products);
     },(err)=>{
       console.log(err);
     }
   )
  }

}
