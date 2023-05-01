import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from '../detail.component';
import { MainDetailComponent } from 'src/app/components/presentational/main-detail/main-detail.component';



@NgModule({
  declarations: [
    DetailComponent,
    MainDetailComponent


  ],
  imports: [
    CommonModule,
    DetailRoutingModule
  ]
})
export class DetailModule { }
