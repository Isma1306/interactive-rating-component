import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-form',
  templateUrl: './rating-form.component.html',
  styleUrls: ['./rating-form.component.css']
})
export class RatingFormComponent implements OnInit {

  public selectedValue: number = 0;
  public ratingArray: number[] = [1, 2, 3, 4, 5];
  constructor() { }

  ngOnInit(): void {
  }
  selectValue(num: number) {
    console.log('num :>> ', num);
    this.selectedValue = num;
  }
}
