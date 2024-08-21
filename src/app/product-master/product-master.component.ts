import { Component } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Sort, MatSortModule } from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-product-master',
  standalone: true,
  imports: [
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  templateUrl: './product-master.component.html',
  styleUrl: './product-master.component.scss'
})
export class ProductMasterComponent {
  sortedProducts:any[] = [] 
  products:any[] = [
    {
      title:'Earthen Bottle',
      imageSrc:'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      currencySymbol:'$',
      price: '48'
    },
    {
      title:'Nomad Tumbler',
      imageSrc:'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      currencySymbol:'$',
      price: '35'
    },
    {
      title:'Focus Paper Refill',
      imageSrc:'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      currencySymbol:'$',
      price: '89'
    },
    {
      title:'Machined Mechanical Pencil',
      imageSrc:'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      currencySymbol:'$',
      price: '35'
    }
  ]

  constructor(){
    this.sortedProducts = this.products.slice()
  }

  sortProducts(sort: Sort) {
    const data = this.products.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedProducts = data;
      return;
    }

    this.sortedProducts = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'title':
          return compare(a.title, b.title, isAsc);
        case 'price':
            return compare(a.price, b.price, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
