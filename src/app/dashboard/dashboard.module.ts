import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';

const COMPONENTS = [HomeModule, AboutModule];

@NgModule({
  imports: [CommonModule],
  declarations: [COMPONENTS],
})
export class DashboardModule {}
