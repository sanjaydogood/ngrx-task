import { Component, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import * as EventEmitter from 'events';
import { Country } from '../../models/countries/country.model';
import { tableRow } from '../../models/tableRow.model';

const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');

@Component({
  selector: 'table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.scss'],
})
export class TableContainerComponent {
  private _rows: Array<tableRow> = [];
  @Input('tableData') set rows(tableData: Array<any>) {
    let tableDataId: Array<any>;
    if (tableData.length !== 0) {
      tableDataId = this.addSerialNumber(tableData);
      alphabetArray.forEach((letter) => {
        const headingIndex = tableDataId.findIndex((item) =>
          item.name.startsWith(letter.toUpperCase())
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
  @Output() _removeRow = new EventEmitter();
  get rows() {
    return this._rows;
  }

  constructor(private store: Store) {}

  createDictHeadingObject(letter: string) {
    return { id: -1, name: 'heading', capital: letter.toUpperCase() };
  }

  addSerialNumber(tableData: Array<Country>): Array<tableRow> {
    return tableData.map((country, index) => {
      return { id: index + 1, ...country };
    });
  }

  removeRow(rowId: string) {
    this._removeRow.emit(rowId);
  }
}
