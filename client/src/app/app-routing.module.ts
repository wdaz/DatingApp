import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { AuthGuard } from './_guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./_pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./_pages/members/member.module').then((m) => m.MemberModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'lists',
        loadChildren: () =>
          import('./_pages/lists/lists.module').then((m) => m.ListsModule),
      },
      {
        path: 'messages',
        loadChildren: () =>
          import('./_pages/messages/messages.module').then(
            (m) => m.MessagesModule
          ),
      },
    ],
  },
  {
    path: 'server-error',
    component: ServerErrorComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
