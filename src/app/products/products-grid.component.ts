import { Component } from "@angular/core";
import { Product } from "../product";
import { ProductsService } from "./products.service";


@Component({
  selector: "products-table",
  templateUrl: "products-grid.component.html",
  styleUrls: [],
  providers: []
})
export class ProductsGridComponent {

  constructor(public productService: ProductsService){
  }

  ngOnInit() {
    this.productService.getProducts().subscribe((result: Product[]) => {
      this.productService.Products = result;
      this.productService.filteredBrand = Array.from(new Set(result.map(a => a.brand))).map(brand => {
        return result.find(a => a.brand === brand)
      });
    })
  }


}
