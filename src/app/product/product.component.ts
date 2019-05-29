import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public src;
  public configUrl = 'assets/products.json';


  constructor(private http: HttpClient) { }

  ngOnInit() {
   this.src = this.http.get(this.configUrl);
   console.log(this.src);

  }

}
