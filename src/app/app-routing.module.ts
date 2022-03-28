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
    path: 'home',
    data: {
      transitionState: 'HomePage',
    },
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    data: {
      transitionState: 'AboutPage',
    },
    loadChildren: () => import('./about/about.module'),
  },
];

@NgModule({
  imports: [CommonModule],
  declarations: [],
})
export class AppRoutingModule {}
