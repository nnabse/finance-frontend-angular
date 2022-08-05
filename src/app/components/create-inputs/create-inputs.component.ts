import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-inputs',
  templateUrl: './create-inputs.component.html',
  styleUrls: ['./create-inputs.component.scss'],
})
export class CreateInputsComponent {
  spendForm = new FormGroup({
    name: new FormControl('shop name'),
    value: new FormControl(100),
  });

  clearNameInput(): void {
    this.spendForm.controls.name.setValue('');
  }
  clearValueInput(): void {
    this.spendForm.controls.value.setValue(0);
  }
}
