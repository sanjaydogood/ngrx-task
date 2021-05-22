import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addDataRequest } from 'src/app/state/add-data-form.actions';

@Component({
  selector: 'add-data-form',
  templateUrl: './add-data-form.component.html',
  styleUrls: ['./add-data-form.component.scss'],
})
export class AddDataFormComponent implements OnInit {
  addData = new FormGroup({
    country: new FormControl(''),
    state: new FormControl(''),
    city: new FormControl(''),
  });

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.addData.reset();
  }
  onSubmit() {
    const countryName = this.addData.get('country').value;
    const stateName = this.addData.get('state').value;
    const cityName = this.addData.get('city').value;
    this.store.dispatch(addDataRequest({ countryName, stateName, cityName }));
    this.addData.reset();
  }

  // removeCountryOnSubmit() {
  //   const CountryName: string = this.removeCountryForm.get('country').value;
  //   this.removeCountry(CountryName);
  //   this.removeCountryForm.reset();
  // }
}
