import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRowComponent } from './product-row/product-row.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { PriceDisplayComponent } from './price-display/price-display.component';
import { ProductDepartmentComponent } from './product-department/product-department.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    BreadcrumbsComponent,
    ProductListComponent,
    ProductRowComponent,
    ProductImageComponent,
    PriceDisplayComponent,
    ProductDepartmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
