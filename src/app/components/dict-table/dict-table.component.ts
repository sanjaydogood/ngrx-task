import { KeyValue } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { tableCountry } from 'src/app/models/tableCountry.model';

@Component({
  selector: 'dict-table',
  templateUrl: './dict-table.component.html',
  styleUrls: ['./dict-table.component.scss'],
})
export class DictTableComponent {
  @Input() rows: Array<tableCountry>;
  @Output() _removeCountry = new EventEmitter<string>();

  originalOrder = (
    a: KeyValue<number, string>,
    b: KeyValue<number, string>
  ): number => {
    return 0;
  };

  removeCountry(CountryName: string) {
    this._removeCountry.emit(CountryName);
  }
}
