import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searcheText: string = '';

  //1. Create an event
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>()

  onsearchTextChanged(){
    this.searchTextChanged.emit(this.searcheText);
  }

updateSearchText(event : any) {
  this.searcheText =  event.target.value;
}

}
