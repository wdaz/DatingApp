import { HasRoleDirective } from './../_directives/has-role.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

@NgModule({
  declarations: [HasRoleDirective],
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    ButtonsModule.forRoot(),
  ],
  exports: [
    HasRoleDirective,
    TabsModule,
    ModalModule,
    CollapseModule,
    BsDropdownModule,
    ButtonsModule,
  ],
})
export class SharedModule {}
