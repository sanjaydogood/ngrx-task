import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatesComponent } from './states/states.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { StatesRoutingModule } from './states-routing.module';

@NgModule({
  declarations: [StatesComponent],
  imports: [
    CommonModule,
    StatesRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class StatesModule {}
