import { NgModule } from '@angular/core';
import { ToolTipDirective } from './tool-tip.directive';

@NgModule({
     declarations: [
          ToolTipDirective,
     ],

     exports: [
          ToolTipDirective,
     ]
})
export class ToolTipModule {
     
}

