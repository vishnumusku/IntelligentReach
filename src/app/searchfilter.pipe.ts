import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(Products: Product[], searchValue: string): Product[] {
    if(searchValue == 'in-stock') {
      return Products.filter(product => 
        product.quantity > 0 
        );
    } else if(searchValue == 'out-of-stock') {
      return Products.filter(product => 
        product.quantity == 0 
        );
    } else if(searchValue == 'all') {
      return Products;
    }

    if(!Products || !searchValue || searchValue.length < 3) {
      return Products;
    } else  {
      return Products.filter(product => 
        product.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
        product.description.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
        product.brand.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) 
        );
    }

    
    
  }

}
