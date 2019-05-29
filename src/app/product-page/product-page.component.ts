import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  public product;
  public configUrl = 'assets/products.json';


  constructor(private http: HttpClient) { }

  public getPicture() {
   return this.http.get(this.configUrl);
  }



  ngOnInit() {

    this.getPicture().subscribe(product => {this.product = product; });
  }

}
