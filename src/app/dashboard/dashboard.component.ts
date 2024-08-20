import { Component } from '@angular/core';
import { ProductMasterComponent } from '../product-master/product-master.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ProductMasterComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
