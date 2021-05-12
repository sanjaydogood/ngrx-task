import { DictTableComponent } from './components/dict-table/dict-table.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { countriesReducer } from './state/country.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { CountryEffects } from './state/country.effects';
import { TableContainerComponent } from './components/table-container/table-container.component';

@NgModule({
  declarations: [AppComponent, DictTableComponent, TableContainerComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ countries: countriesReducer }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([CountryEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
