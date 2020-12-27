import { FormsModule } from '@angular/forms';
import { TimeagoModule } from 'ngx-timeago';
import { MemberMessagesComponent } from './member-messages.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MemberMessagesComponent],
  imports: [CommonModule, FormsModule, TimeagoModule],
  exports: [MemberMessagesComponent],
})
export class MemberMessagesModule {}
