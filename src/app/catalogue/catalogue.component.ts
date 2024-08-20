import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductSearchBarComponent } from '../product-search-bar/product-search-bar.component';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [
    ProductComponent,
    ProductSearchBarComponent
  ],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.scss'
})
export class CatalogueComponent {
  searchName:string = ''
  products:any[] = [
    {
      title:'Earthen Bottle',
      imageSrc:'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt:'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      currencySymbol:'$',
      price: '48'
    },
    {
      title:'Nomad Tumbler',
      imageSrc:'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt:'Olive drab green insulated bottle with flared screw lid and flat top.',
      currencySymbol:'$',
      price: '35'
    },
    {
      title:'Focus Paper Refill',
      imageSrc:'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt:'Person using a pen to cross a task off a productivity paper card.',
      currencySymbol:'$',
      price: '89'
    },
    {
      title:'Machined Mechanical Pencil',
      imageSrc:'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt:'Hand holding black machined steel mechanical pencil with brass tip and top.',
      currencySymbol:'$',
      price: '35'
    }
  ]
  

  setSearchName(name:string){
    this.searchName = name
  }

}
