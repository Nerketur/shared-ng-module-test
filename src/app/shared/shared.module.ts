import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingComponent } from './testing/testing.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TestingComponent],
  exports: [CommonModule, TestingComponent]
})
export class SharedModule { }
