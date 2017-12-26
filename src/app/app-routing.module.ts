import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MembersComponent } from './members.component';
import { MemberDetailComponent } from './member-detail.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'members',
    component: MembersComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: MemberDetailComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

};
