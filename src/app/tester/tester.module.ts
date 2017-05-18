import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesterComponent } from './tester.component';
import { SharedModule } from "app/shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [TesterComponent],
  exports: [TesterComponent]
})
export class TesterModule { }
