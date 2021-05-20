import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full',
  },
  {
    path: 'countries',
    loadChildren: () =>
      import('./modules/countries/countries.module').then(
        (m) => m.CountriesModule
      ),
  },
  {
    path: 'states',
    loadChildren: () =>
      import('./modules/states/states.module').then((m) => m.StatesModule),
  },
  {
    path: 'cities',
    loadChildren: () =>
      import('./modules/cities/cities.module').then((m) => m.CitiesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
