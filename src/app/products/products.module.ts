import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ProductsGridComponent } from "./products-grid.component";
import { SearchfilterPipe } from "../searchfilter.pipe";

@NgModule({
  imports: [
    CommonModule,
    Ng2SearchPipeModule
  ],
  declarations: [
    ProductsGridComponent,
    SearchfilterPipe
  ],
  exports: [
    ProductsGridComponent
  ],
  providers: [
  ]
})

export class ProductsModule { }
