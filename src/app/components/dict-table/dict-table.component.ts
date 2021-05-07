import { Store } from '@ngrx/store';
import { removeCountry } from './../../state/country.actions';
import { Country } from './../../models/country.model';
import { KeyValue } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
interface tableCountry extends Country {
  id: number;
}
@Component({
  selector: 'dict-table',
  templateUrl: './dict-table.component.html',
  styleUrls: ['./dict-table.component.scss'],
})
export class DictTableComponent implements OnInit {
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
  constructor(private store: Store) {}

  ngOnInit(): void {}
  originalOrder = (
    a: KeyValue<number, string>,
    b: KeyValue<number, string>
  ): number => {
    return 0;
  };

  createDictHeadingObject(letter: string) {
    return { id: -1, name: 'heading', capital: letter.toUpperCase() };
  }

  addSerialNumber(tableData: Array<Country>): Array<tableCountry> {
    return tableData.map((country, index) => {
      return { id: index + 1, ...country };
    });
  }

  removeCountry(CountryName: string) {
    this.store.dispatch(removeCountry({ CountryName }));
  }
}
