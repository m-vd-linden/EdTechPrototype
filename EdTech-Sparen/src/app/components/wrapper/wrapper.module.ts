import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { wrapperRoutes } from 'src/app/wrapper.routing';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(wrapperRoutes),
  ]
})
export class WrapperModule { }
