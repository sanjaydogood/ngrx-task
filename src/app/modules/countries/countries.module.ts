import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries/countries.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CountriesComponent],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class CountriesModule {}
