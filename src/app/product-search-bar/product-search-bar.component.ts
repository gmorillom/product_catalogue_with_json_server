import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-search-bar',
  standalone: true,
  imports: [
    FormsModule,
    FontAwesomeModule
  ],
  templateUrl: './product-search-bar.component.html',
  styleUrl: './product-search-bar.component.scss'
})
export class ProductSearchBarComponent {
  // Define input will receive search query names and output will send info to parent component
  searchQuery:string = ''
  faSearch:any = faSearch
  
  @Output() searchStringChange = new EventEmitter<string>() 

  catchSearchQuery($event:any){
    $event.preventDefault()
    this.searchStringChange.emit(this.searchQuery)
  }


}
