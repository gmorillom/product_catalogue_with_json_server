import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CatalogueComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'product_catalogue_with_redis';
}
