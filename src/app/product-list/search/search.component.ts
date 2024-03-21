import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searcheText: string = 'Mens wear';

updateSearchText(event : any) {
  this.searcheText =  event.target.value;
}

}
