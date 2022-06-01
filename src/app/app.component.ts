import { Component } from "@angular/core";
import { ProductsService } from "./products/products.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "ir-dev-test";
  name:string;
  constructor(public productService: ProductsService){
  }
  setChangedValue(event: any) {
    this.productService.searchValue = event.target.value;
  }
}
