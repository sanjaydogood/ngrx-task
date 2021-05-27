import translation from 'src/assets/i18n/en.json';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CitiesEffects } from 'src/app/state/cities.effects';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { rootReducer } from './state';
import { CountryEffects } from './state/country.effects';
import { StatesEffects } from './state/states.effects';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent, LandingComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([CountryEffects, StatesEffects, CitiesEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// 1. i18n - two language translations (English and French)
//    a.) Only single page translations? Or translate all pages?
// 2. ngx-translate
