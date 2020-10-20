import { FormsModule } from '@angular/forms';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { MemberComponent } from './member.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MemberCardComponent } from './member-card/member-card.component';
import { MemberEditComponent } from './member-edit/member-edit.component';

@NgModule({
  declarations: [
    MemberComponent,
    MemberDetailComponent,
    MemberCardComponent,
    MemberEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MemberRoutingModule,
    TabsModule.forRoot(),
    NgxGalleryModule,
  ],
})
export class MemberModule {}
