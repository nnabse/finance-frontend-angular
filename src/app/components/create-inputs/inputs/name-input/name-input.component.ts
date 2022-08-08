import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.scss'],
})
export class NameInputComponent implements OnInit {
  public formName!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.formName = this.rootFormGroup.control;
  }

  clearNameInput(): void {
    this.formName.controls['name'].setValue('');
  }
}
