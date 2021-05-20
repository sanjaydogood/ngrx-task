import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatesComponent } from './states/states.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { StatesRoutingModule } from './states-routing.module';
import { StoreModule } from '@ngrx/store';
import { statesReducer } from 'src/app/state/states.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StatesEffects } from 'src/app/state/states.effects';
import { countriesReducer } from 'src/app/state/country.reducer';
import { CountryEffects } from 'src/app/state/country.effects';

@NgModule({
  declarations: [StatesComponent],
  imports: [
    CommonModule,
    StatesRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature('countries', countriesReducer),
    StoreModule.forFeature('states', statesReducer),
    EffectsModule.forFeature([CountryEffects, StatesEffects]),
  ],
})
export class StatesModule {}
