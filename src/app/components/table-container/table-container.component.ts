import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Country } from 'src/app/models/country.model';
import { tableCountry } from 'src/app/models/tableCountry.model';
import { addCountry, removeCountry } from 'src/app/state/country.actions';

const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');

@Component({
  selector: 'table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.scss'],
})
export class TableContainerComponent {
  private _rows: Array<tableCountry> = [];
  @Input('tableData') set rows(tableData: Array<Country>) {
    let tableDataId: Array<tableCountry>;
    if (tableData.length !== 0) {
      tableDataId = this.addSerialNumber(tableData);
      alphabetArray.forEach((letter) => {
        const headingIndex = tableDataId.findIndex((country) =>
          country.name.startsWith(letter.toUpperCase())
        );
        if (headingIndex !== -1) {
          tableDataId.splice(
            headingIndex,
            0,
            this.createDictHeadingObject(letter)
          );
        }
      });
    }
    this._rows = tableDataId;
  }

  get rows() {
    return this._rows;
  }
  addCountryForm = new FormGroup({
    country: new FormControl(''),
    capital: new FormControl(''),
  });

  removeCountryForm = new FormGroup({
    country: new FormControl(''),
  });

  constructor(private store: Store) {}

  createDictHeadingObject(letter: string) {
    return { id: -1, name: 'heading', capital: letter.toUpperCase() };
  }

  addSerialNumber(tableData: Array<Country>): Array<tableCountry> {
    return tableData.map((country, index) => {
      return { id: index + 1, ...country };
    });
  }

  addCountryOnSubmit() {
    const countryName = this.addCountryForm.get('country').value;
    const capitalName = this.addCountryForm.get('capital').value;
    const Country: Country = { name: countryName, capital: capitalName };
    this.store.dispatch(addCountry({ Country }));
    this.addCountryForm.reset();
  }

  removeCountryOnSubmit() {
    const CountryName: string = this.removeCountryForm.get('country').value;
    this.removeCountry(CountryName);
    this.removeCountryForm.reset();
  }

  removeCountry(CountryName: string) {
    this.store.dispatch(removeCountry({ CountryName }));
  }
}
