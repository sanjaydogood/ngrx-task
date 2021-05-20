import { KeyValue } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { transformData } from 'src/app/utils/transformData';
import { transformRows } from 'src/app/utils/transformRows';
import { tableRow } from '../../models/tableRow.model';

@Component({
  selector: 'dict-table',
  templateUrl: './dict-table.component.html',
  styleUrls: ['./dict-table.component.scss'],
})
export class DictTableComponent {
  _colspan: number;
  _rows: tableRow[];

  @Input() isActionRequired: boolean = false;
  @Input() set rows(data) {
    if (data && data.length) {
      data = transformData(data);
      data = transformRows(data);
      this._colspan =
        Object.keys(data[0]).length + (this.isActionRequired ? 1 : 0);
    }

    this._rows = data;
  }
  get rows() {
    return this._rows;
  }

  @Output() _removeRow = new EventEmitter<string>();
  @Output() _rowClicked = new EventEmitter<string>();

  originalOrder = (
    a: KeyValue<number, string>,
    b: KeyValue<number, string>
  ): number => {
    return 0;
  };

  removeRow(rowId: string) {
    this._removeRow.emit(rowId);
  }

  rowClicked(rowId: string) {
    this._rowClicked.emit(rowId);
  }
}
