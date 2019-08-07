import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { ShopingCardComponent } from './shoping-card/shoping-card.component';
import { ContactUsComponent } from './contactUs/contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component: ProductPageComponent },
  { path: 'ShopingCard', component: ShopingCardComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
