import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesComponent } from './cities/cities.component';
import { CitiesRoutingModule } from './cities-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { citiesReducer } from 'src/app/state/cities.reducers';
import { CitiesEffects } from 'src/app/state/cities.effects';
import { statesReducer } from 'src/app/state/states.reducer';
import { StatesEffects } from 'src/app/state/states.effects';
import { countriesReducer } from 'src/app/state/country.reducer';
import { CountryEffects } from 'src/app/state/country.effects';

@NgModule({
  declarations: [CitiesComponent],
  imports: [
    CommonModule,
    CitiesRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature('countries', countriesReducer),
    StoreModule.forFeature('states', statesReducer),
    StoreModule.forFeature('cities', citiesReducer),
    EffectsModule.forFeature([CountryEffects, StatesEffects, CitiesEffects]),
  ],
})
export class CitiesModule {}
