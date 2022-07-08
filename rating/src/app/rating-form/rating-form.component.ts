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
  constructor() { }

  ngOnInit(): void {
  }

}
