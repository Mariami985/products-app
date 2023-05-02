import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from '../list.component';
import { MainListComponent } from 'src/app/components/components/main-list/main-list.component';

@NgModule({
  declarations: [
    ListComponent,
    MainListComponent,
  ],
  imports: [
    CommonModule,
    ListRoutingModule
  ]
})
export class ListModule { }
