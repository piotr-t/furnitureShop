import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FurnitureShopService } from '../furniture-shop.service';

@Component({
  selector: 'app-shoping-card',
  templateUrl: './shoping-card.component.html',
  styleUrls: ['./shoping-card.component.scss']
})
export class ShopingCardComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private furnitureShopService: FurnitureShopService) { }

  productList;

  ngOnInit() {
    this.furnitureShopService.getUserCard1().subscribe(dana => {this.productList = dana; });
  }

}
