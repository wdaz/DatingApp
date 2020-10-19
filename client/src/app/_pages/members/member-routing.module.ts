import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MemberComponent } from './member.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MemberComponent,
  },
  {
    path: ':id',
    component: MemberDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberRoutingModule {}
