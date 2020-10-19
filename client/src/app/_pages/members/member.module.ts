import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { MemberComponent } from './member.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';

@NgModule({
  declarations: [MemberComponent, MemberDetailComponent],
  imports: [CommonModule, MemberRoutingModule],
})
export class MemberModule {}
