import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { MemberModule } from './../members/member.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsRoutingModule } from './lists-routing.module';
import { ListsComponent } from './lists.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  declarations: [ListsComponent],
  imports: [
    CommonModule,
    ListsRoutingModule,
    FormsModule,
    MemberModule,
    ButtonsModule,
    PaginationModule,
  ],
})
export class ListsModule {}
