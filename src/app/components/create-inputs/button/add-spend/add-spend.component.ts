import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-add-spend',
  templateUrl: './add-spend.component.html',
  styleUrls: ['./add-spend.component.scss'],
})
export class AddSpendComponent implements OnInit {
  public spendForm: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) {
    this.spendForm = this.rootFormGroup.control;
  }

  ngOnInit(): void {
    this.spendForm = this.rootFormGroup.control;
  }
}
