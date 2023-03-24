import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ng2-search-filter',
  templateUrl: './ng2-search-filter.component.html',
  styleUrls: ['./ng2-search-filter.component.css']
})
export class Ng2SearchFilterComponent implements OnInit {
  name = 'Arvind';
  term!: string;
  private url = "https://dummyjson.com/products";
  public products!:any;

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
