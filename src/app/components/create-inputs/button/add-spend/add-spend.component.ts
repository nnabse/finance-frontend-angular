import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { SpendService } from 'src/app/services/spend.service';

@Component({
  selector: 'app-add-spend',
  templateUrl: './add-spend.component.html',
  styleUrls: ['./add-spend.component.scss'],
})
export class AddSpendComponent implements OnInit {
  public spendForm: FormGroup;

  private checkName: string = '';
  private checkValue: number = 0;

  constructor(
    private rootFormGroup: FormGroupDirective,
    private spendService: SpendService
  ) {
    this.spendForm = this.rootFormGroup.control;
  }

  ngOnInit(): void {
    this.spendForm = this.rootFormGroup.control;
  }

  clearInputs(): void {
    this.spendForm.controls['name'].setValue('');
    this.spendForm.controls['value'].setValue(100);
  }

  createSpend(): void {
    this.checkName = this.spendForm.value.name.trim();
    this.checkValue = this.spendForm.value.value;
    if (this.checkName === '' || this.checkValue <= 0) return;
    this.spendService.createSpend({
      name: this.spendForm.value.name,
      value: this.spendForm.value.value,
    });
    this.clearInputs();
  }
}
