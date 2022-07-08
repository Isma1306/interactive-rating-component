import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Rating } from '../rating';

@Component({
  selector: 'app-rating-form',
  templateUrl: './rating-form.component.html',
  styleUrls: ['./rating-form.component.css']
})
export class RatingFormComponent implements OnInit {

  @Input() rating: Rating = { selected: 0, values: [] };
  @Output() selected = new EventEmitter();
  @Output() isSubmited = new EventEmitter();

  ngOnInit(): void {
  }

  submitHandler($event: any) {
    $event.preventDefault();
    if (this.rating.selected != 0) this.isSubmited.emit(true);
  }

}
