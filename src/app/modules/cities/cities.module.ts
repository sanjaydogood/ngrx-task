import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesComponent } from './cities/cities.component';
import { CitiesRoutingModule } from './cities-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CitiesComponent],
  imports: [
    CommonModule,
    CitiesRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class CitiesModule {}
