import { MemberDetailedResolver } from './../../_resolvers/member-detailed.resolver';
import { PreventUnsavedChangesGuard } from './../../_guards/prevent-unsaved-changes.guard';
import { MemberEditComponent } from './member-edit/member-edit.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MemberComponent } from './member.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'members',
    component: MemberComponent,
  },
  {
    path: 'members/:username',
    component: MemberDetailComponent,
    resolve: { member: MemberDetailedResolver },
  },
  {
    path: 'member/edit',
    component: MemberEditComponent,
    canDeactivate: [PreventUnsavedChangesGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberRoutingModule {}
