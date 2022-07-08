import { Component } from '@angular/core';
import { Rating } from './rating';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rating';
  public isSubmited: boolean = false;
  public rating: Rating = { selected: 0, values: [1, 2, 3, 4, 5] };

  selectValue(num: number) {
    this.rating.selected = num;
  }
}
