import { Component, OnInit } from '@angular/core';
import { Spend } from 'src/app/models/Spend';

@Component({
  selector: 'app-spend-list',
  templateUrl: './spend-list.component.html',
  styleUrls: ['./spend-list.component.scss'],
})
export class SpendListComponent implements OnInit {
  public localSpendList: Spend[] = [
    { name: 'shop1', date: '2000.01.01', value: 100, isEditing: false },
    { name: 'shop2', date: '2000.01.01', value: 200, isEditing: false },
    { name: 'shop3', date: '2000.01.01', value: 300, isEditing: false },
  ];

  public totalSum: number = 0;

  constructor() {}

  getTotalSum(): number {
    this.totalSum = 0;
    this.localSpendList.reduce(
      (prev: number, curr: Spend) => (this.totalSum += curr.value),
      this.totalSum
    );
    return this.totalSum;
  }

  ngOnInit(): void {
    this.getTotalSum();
  }
}
