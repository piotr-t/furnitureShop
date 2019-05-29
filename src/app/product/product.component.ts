import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isArray } from 'util';
import { FurnitureShopService } from '../furniture-shop.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private furnitureShopService: FurnitureShopService) {

  }

@Input()
mebel;
shoppingCard = [];

setUserCard (card) {
  this.furnitureShopService.setUserCard1(card).subscribe(dana => { console.log(dana); });
}

getUserCard (dana, e) {
            if (isArray(dana)) {
              this.shoppingCard = dana;
            } else if (!isArray(dana)) {
              this.shoppingCard.push(dana); }

      this.shoppingCard.push(e);
      this.setUserCard (this.shoppingCard);
}

delUserCard(dana, e) {
  let dana1 = dana;
  let ind;
        dana.find((el: any, index) => {
          if (el && e.productName === el.productName) {
            ind = index;
            dana1 = dana1.splice(ind, 1);
            this.setUserCard (dana1);
          }});

}
// tslint:disable-next-line: member-ordering
addBoolen = true;
// tslint:disable-next-line: member-ordering
add = 'Dodaj do koszyka';

toggleButtonValue = (e) => {

  this.addBoolen === true ? this.add = 'Skasuj' :  this.add = 'Dodaj do koszyka';
  this.addBoolen === true ? this.addBoolen = false : this.addBoolen = true;
  this.addBoolen === false ? this.furnitureShopService.getUserCard1().subscribe(dana => {this.getUserCard (dana, e); }) :
  this.furnitureShopService.getUserCard1().subscribe(dana => {this.delUserCard(dana, e); });
}

  ngOnInit() {
  }

}

// https://api.myjson.com/bins/ot80r
