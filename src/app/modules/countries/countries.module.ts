import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries/countries.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { countriesReducer } from 'src/app/state/country.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CountryEffects } from 'src/app/state/country.effects';

@NgModule({
  declarations: [CountriesComponent],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature('countries', countriesReducer),
    EffectsModule.forFeature([CountryEffects]),
  ],
})
export class CountriesModule {}
