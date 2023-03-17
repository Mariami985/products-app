import { NgModule } from '@angular/core';
import {SubstringPipe} from './substring.pipe'


@NgModule({
     declarations : [
          SubstringPipe,
     ],

     exports: [
          SubstringPipe,
     ]
})
export class SubstringModule {

}