import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { ShopingCardComponent } from './shoping-card/shoping-card.component';
import { FurnitureShopService } from './furniture-shop.service';
import { AppDirectiveDirective } from './app-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductPageComponent,
    ProductComponent,
    FooterComponent,
    ShopingCardComponent,
    AppDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [FurnitureShopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
