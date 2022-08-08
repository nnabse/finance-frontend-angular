import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-inputs',
  templateUrl: './create-inputs.component.html',
  styleUrls: ['./create-inputs.component.scss'],
})
export class CreateInputsComponent implements OnInit {
  public spendForm = new FormGroup({
    name: new FormControl('shop name'),
    value: new FormControl(100),
  });

  constructor() {}

  ngOnInit(): void {}
}
