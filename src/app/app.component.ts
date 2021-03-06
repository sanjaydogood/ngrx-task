import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Country } from './shared/models/countries/country.model';
import { TranslateBridgeService } from './shared/services/translate-bridge.service';
const sortAscCountry = (a: Country, b: Country): number => {
  if (a.name < b.name) return -1;
  else if (a.name > b.name) return 1;
  return 0;
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'home-depot-task';
  currentLang: string;
  // countries$ = this.store
  //   .pipe(select(selectCountries))
  //   .pipe(
  //     map((countries) =>
  //       countries.map(({ name, capital }): Country => ({ name, capital }))
  //     )
  //   )
  //   .pipe(map((countries) => countries.sort(sortAscCountry)));

  // isUserLoggedIn = false;
  // constructor(private store: Store<AppState>) {}
  constructor(
    private translate: TranslateService,
    private trBridge: TranslateBridgeService
  ) {
    this.currentLang = this.trBridge.getCurrentLang();
  }

  ngOnInit(): void {
    this.translate.addLangs(['en', 'fr']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.currentLang = 'en';
    // const browserLang = this.translate.getBrowserLang();
    // this.translate.use(browserLang.match('/en|fr/') ? browserLang : 'en');
  }

  selectedLang(lang: string) {
    this.trBridge.setLang(lang);
    this.currentLang = lang;
  }
  // getCountriesData() {
  //   this.store.dispatch(getCountriesRequest());
  //   this.isUserLoggedIn = true;
}
