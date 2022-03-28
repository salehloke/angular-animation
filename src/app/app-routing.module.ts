import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'dashboard',
    data: {
      transitionState: 'HomePage',
    },
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'about',
    data: {
      transitionState: 'AboutPage',
    },
    loadChildren: ()=>
    import('./das')
  }
];

@NgModule({
  imports: [CommonModule],
  declarations: [],
})
export class AppRoutingModule {}
