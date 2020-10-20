import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { MemberComponent } from './member.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MemberCardComponent } from './member-card/member-card.component';

@NgModule({
  declarations: [MemberComponent, MemberDetailComponent, MemberCardComponent],
  imports: [
    CommonModule,
    MemberRoutingModule,
    TabsModule.forRoot(),
    NgxGalleryModule
  ],
})
export class MemberModule {}
