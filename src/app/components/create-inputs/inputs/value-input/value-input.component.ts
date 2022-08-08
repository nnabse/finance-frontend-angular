import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-value-input',
  templateUrl: './value-input.component.html',
  styleUrls: ['./value-input.component.scss'],
})
export class ValueInputComponent implements OnInit {
  public formValue!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.formValue = this.rootFormGroup.control;
  }

  clearValueInput(): void {
    this.formValue.controls['value'].setValue(0);
  }
}
