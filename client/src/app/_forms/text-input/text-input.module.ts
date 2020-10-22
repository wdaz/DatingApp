import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './text-input.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TextInputComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [TextInputComponent],
})
export class TextInputModule {}
