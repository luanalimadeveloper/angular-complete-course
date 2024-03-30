import { Component } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  listOfString: string[] = ['Mark', 'Severino', 'Luana', 'Joe', 'Monica'];

  searchText: string = '';

  setSearchText(value: string){
    this.searchText = value;
  }

}




