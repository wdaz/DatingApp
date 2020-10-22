import { DateInputModule } from './../../_forms/date-picker/date-input.module';
import { TextInputModule } from './../../_forms/text-input/text-input.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, SignUpComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TextInputModule,
    DateInputModule,
  ],
})
export class HomeModule {}
