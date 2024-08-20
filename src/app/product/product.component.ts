import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input({transform: defaultDetails}) details:any = {}

}

function defaultDetails(obj: any):any{
  return obj ? obj : {
    title:'',
    imageSrc:'',
    imageAlt:'',
    currencySymbol:'',
    price: ''
  }
}
