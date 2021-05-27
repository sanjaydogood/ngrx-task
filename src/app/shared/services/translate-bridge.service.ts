import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslateBridgeService {
  currentLang: string = 'en';
  constructor(private translate: TranslateService) {}

  getCurrentLang(): string {
    return this.currentLang;
  }

  setLang(lang: string) {
    if (lang === 'en' || lang === 'fr') {
      this.currentLang = lang;
      this.translate.use(lang);
    }
  }
}
