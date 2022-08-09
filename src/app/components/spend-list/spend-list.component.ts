import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Spend } from '@models/Spend';
import { SpendService } from '@services/spend.service';

@Component({
  selector: 'app-spend-list',
  templateUrl: './spend-list.component.html',
  styleUrls: ['./spend-list.component.scss'],
})
export class SpendListComponent implements OnInit, OnDestroy {
  public localSpendList: Spend[] = [];

  public totalSum: number = 0;

  public isEditing: boolean = false;
  private isInputsEmpty: boolean = true;

  public name = 'new name';
  public date = this.getCurrDate();
  public value = 100;

  public newName = '';
  public newDate = '';
  public newValue = 100;

  private subscription = new Subscription();

  constructor(private spendService: SpendService) {}

  getTotalSum(): void {
    this.totalSum = this.localSpendList.reduce(
      (sum: number, curr: Spend) => sum + curr.value,
      0
    );
  }

  ngOnInit(): void {
    this.subscription = this.spendService.spendList$.subscribe((data) => {
      this.localSpendList = data;
      this.getTotalSum();
    });
    this.spendService.getAllSpends();
  }

  editorToggle(idx: number, flag: boolean): void {
    if (this.isEditing && flag) return;
    this.localSpendList.map((elem, index) => {
      if (index === idx) elem.isEditing = flag;
    });
    this.isEditing = flag;
  }

  deleteSpend(id: number): void {
    this.spendService.deleteSpend(id);
  }

  clearRenameInputs(): void {
    this.name = '';
    this.value = 0;
    this.newName = '';
    this.newValue = 0;
  }

  getCurrDate(): string {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    return `${year}-${month}-${day}`;
  }

  getInputsValues(): void {
    this.newName = this.name;
    this.newValue = this.value;
    this.newDate = this.date;
  }

  renameInputsCheck(): void {
    if (this.newName === '' || !this.newDate || this.newValue <= 0) return;
    this.isInputsEmpty = false;
  }

  renameSpend(idx: number, id: number): void {
    this.isInputsEmpty = true;
    this.getInputsValues();
    this.renameInputsCheck();

    if (this.isInputsEmpty) return;

    this.spendService.renameSpend(id, {
      name: this.newName,
      createDate: this.newDate,
      value: this.newValue,
    });
    this.editorToggle(idx, false);
    this.clearRenameInputs();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
