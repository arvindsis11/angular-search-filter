import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-search',
  templateUrl: './ng-search.component.html',
  styleUrls: ['./ng-search.component.css']
})
export class NgSearchComponent implements OnInit {

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
