import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TitleComponent } from '@components/title/title.component';
import { CreateInputsComponent } from '@components/create-inputs/create-inputs.component';
import { NameInputComponent } from '@components/create-inputs/inputs/name-input/name-input.component';
import { ValueInputComponent } from '@components/create-inputs/inputs/value-input/value-input.component';
import { AddSpendComponent } from '@components/create-inputs/button/add-spend/add-spend.component';
import { SpendListComponent } from '@components/spend-list/spend-list.component';

import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    CreateInputsComponent,
    NameInputComponent,
    ValueInputComponent,
    AddSpendComponent,
    SpendListComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
