import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

@Input()
mebel;
shoppingCard = [];

setUserCard (card) {
  this.http.put('https://api.myjson.com/bins/ot80r', card).subscribe(dana => { console.log(dana);
   });
}

getUserCard (dana, e) {
  this.shoppingCard.push(dana);
  this.shoppingCard.push(e);
  this.setUserCard (this.shoppingCard);
}
// tslint:disable-next-line: member-ordering
addBoolen = true;
// tslint:disable-next-line: member-ordering
add = 'Dodaj do koszyka';

toggleButtonValue = (e) => {

  this.addBoolen === true ? this.add = 'Skasuj' :  this.add = 'Dodaj do koszyka';
  this.addBoolen === true ? this.addBoolen = false : this.addBoolen = true;
       this.http.get('https://api.myjson.com/bins/ot80r').subscribe(dana => {this.getUserCard (dana, e); });
}

  ngOnInit() {
  }

}

// https://api.myjson.com/bins/ot80r
