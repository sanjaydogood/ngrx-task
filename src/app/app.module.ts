import { CitiesEffects } from 'src/app/state/cities.effects';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { rootReducer } from './state';
import { CountryEffects } from './state/country.effects';
import { StatesEffects } from './state/states.effects';

@NgModule({
  declarations: [AppComponent, LandingComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([CountryEffects, StatesEffects, CitiesEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
