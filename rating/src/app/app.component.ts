import { Component } from '@angular/core';
import { Rating } from './rating';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rating';

  rating: Rating = { selectedRating: 0, values: [1, 2, 3, 4, 5] };
}
