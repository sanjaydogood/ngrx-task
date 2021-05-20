import { tableRow } from '../shared/models/tableRow.model';
import { addSerialNumber } from './addSerialNumber';
import { createDictHeadingObject } from './createDictHeading';

const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');

export const transformRows = (tableData: tableRow[]): tableRow[] => {
  let tableDataId: tableRow[];
  if (tableData.length !== 0) {
    tableDataId = addSerialNumber(tableData);
    alphabetArray.forEach((letter) => {
      const headingIndex = tableDataId.findIndex((row) =>
        row.name.startsWith(letter.toUpperCase())
      );
      if (headingIndex !== -1) {
        tableDataId.splice(headingIndex, 0, createDictHeadingObject(letter));
      }
    });
  }
  return tableDataId;
};
